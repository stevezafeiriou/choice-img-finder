import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ImagePageContainer, Loading } from "./ImagePageElements"; // Assuming you have defined these styled components
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubscriptionForm from "./SubscriptionForm";
import ImageCard from "./ImageCard";
import FindGenerationsById from "./FindGenerationsById";
import {
	logoImage,
	getImageById,
	validateImage,
	subscribeUser,
	getRecentUnvalidatedImages,
} from "../../services/api";

const ImagePage = () => {
	const [imageData, setImageData] = useState(null);
	const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
	const [pendingAction, setPendingAction] = useState(null);
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [validatedIds, setValidatedIds] = useState([]);
	const [isSaveDisabled, setIsSaveDisabled] = useState(false);
	const [isPrintDisabled, setIsPrintDisabled] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null); // To store error messages
	const [loadingImage, setLoadingImage] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const id = params.get("id");

		if (id) {
			fetchImageData(id);
		}

		const subscriptionInfo = JSON.parse(localStorage.getItem("subscribed"));
		if (subscriptionInfo && subscriptionInfo.subscribed) {
			setIsSubscribed(true);
		}

		const storedValidatedIds = JSON.parse(localStorage.getItem("validatedIds"));
		if (storedValidatedIds) {
			setValidatedIds(storedValidatedIds);
		}
	}, [location]);

	const fetchImageData = async (id) => {
		setLoadingImage(true);
		try {
			const data = await getImageById(id);
			setImageData(data.data); // Ensure setImageData uses data.data
			setLoadingImage(false);
		} catch (error) {
			console.error("Error fetching image data:", error);
			toast.error(`Error fetching image data: ${error.message}`);
			setErrorMessage(`Error fetching image data: ${error.message}`);
			setLoadingImage(false);
		}
	};

	const handleSave = async () => {
		if (await handleSubscriptionAndValidation("save")) {
			performSave();
		} else {
			toast.error("Save action could not be performed due to previous errors.");
		}
	};

	const handlePrint = async () => {
		if (await handleSubscriptionAndValidation("print")) {
			performPrint();
		} else {
			toast.error(
				"Print action could not be performed due to previous errors."
			);
		}
	};

	const handleSubscriptionAndValidation = async (action) => {
		const subscriptionInfo = JSON.parse(localStorage.getItem("subscribed"));

		if (subscriptionInfo && subscriptionInfo.subscribed) {
			const validationSuccessful = await validateImageAndProceed(action);
			return validationSuccessful;
		} else {
			setPendingAction(action);
			setShowSubscriptionForm(true);
			return false;
		}
	};

	const validateImageAndProceed = async (action) => {
		try {
			if (imageData && imageData.id) {
				const validationSuccessful = await validateImage(imageData.id);
				if (validationSuccessful) {
					return true;
				}
			} else {
				throw new Error("Image data or ID is missing");
			}
		} catch (error) {
			console.error("Error performing validation:", error);
			toast.error(`Validation failed: ${error.message}`);
			setErrorMessage(`Validation failed: ${error.message}`);
			setIsSaveDisabled(true);
			setIsPrintDisabled(true);
			return false;
		}
		return false;
	};

	const handleSubmitSubscription = async (email, validatedIds = []) => {
		try {
			const response = await subscribeUser({ email, ids: validatedIds });

			if (response.data === "User subscribed successfully.") {
				if (!isSubscribed && validatedIds.length === 0) {
					toast.success("Subscription successful!");
				} else if (pendingAction === "save") {
					performSave();
				} else if (pendingAction === "print") {
					performPrint();
				}

				localStorage.setItem(
					"subscribed",
					JSON.stringify({ subscribed: true, email })
				);
				setIsSubscribed(true);
				setShowSubscriptionForm(false);
				return true;
			} else {
				toast.error(`Subscription failed: ${response.data}`);
				setErrorMessage(`Subscription failed: ${response.data}`);
				setIsSaveDisabled(true);
				setIsPrintDisabled(true);
				return false;
			}
		} catch (error) {
			console.error("Error subscribing:", error);
			const errorMessage = error.response?.data?.message || error.message;
			toast.error(`Subscription failed: ${errorMessage}`);
			setErrorMessage(`Subscription failed: ${errorMessage}`);
			setIsSaveDisabled(true);
			setIsPrintDisabled(true);
			return false;
		}
	};

	const performSave = () => {
		if (imageData && imageData.image) {
			const blob = dataURLtoBlob(imageData.image);

			const a = document.createElement("a");
			a.href = URL.createObjectURL(blob);
			a.download = `${imageData.id}.png`;
			a.click();
			toast.success(`Image ${imageData.id} saved!`);
			setIsSaveDisabled(true);
		}
	};

	const performPrint = () => {
		if (imageData && imageData.image) {
			const img = new Image();
			img.src = imageData.image;

			img.onload = () => {
				const printWindow = window.open();
				printWindow.document.open();
				printWindow.document.write(
					`<html><body style="text-align: center;"><img src="${imageData.image}" onload="window.print();window.close();" /></body></html>`
				);
				printWindow.document.close();
				toast.success(`Image ${imageData.id} printed!`);
				setIsPrintDisabled(true);
			};
		}
	};

	const dataURLtoBlob = (dataURL) => {
		const parts = dataURL.split(";base64,");
		const contentType = parts[0].split(":")[1];
		const raw = window.atob(parts[1]);
		const rawLength = raw.length;
		const uInt8Array = new Uint8Array(rawLength);

		for (let i = 0; i < rawLength; ++i) {
			uInt8Array[i] = raw.charCodeAt(i);
		}

		return new Blob([uInt8Array], { type: contentType });
	};

	const handleSubscribeClick = () => {
		setShowSubscriptionForm(true);
	};

	return (
		<ImagePageContainer>
			{showSubscriptionForm ? (
				<SubscriptionForm onSubmit={handleSubmitSubscription} />
			) : (
				!imageData && (
					<FindGenerationsById
						onSubmit={fetchImageData}
						logo={logoImage}
						getRecentUnvalidatedImages={getRecentUnvalidatedImages}
					/>
				)
			)}
			{!showSubscriptionForm &&
				imageData &&
				(loadingImage ? (
					<Loading>Loading Image.. Please wait.</Loading>
				) : (
					<ImageCard
						imageData={imageData}
						onSave={handleSave}
						onPrint={handlePrint}
						isSubscribed={isSubscribed}
						isSaveDisabled={isSaveDisabled}
						isPrintDisabled={isPrintDisabled}
						onSubscribe={handleSubscribeClick}
					/>
				))}
		</ImagePageContainer>
	);
};

export default ImagePage;
