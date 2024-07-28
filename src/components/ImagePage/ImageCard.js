import React, { useState } from "react";
import {
	ImageCardContainer,
	Image,
	TextWrapper,
	ImageCardP,
	ButtonWrap,
	FooterP,
	ResetButton,
	Loading,
} from "./ImagePageElements"; // Ensure these styled components are correctly defined
import { GrPowerReset } from "react-icons/gr";

const ImageCard = ({
	imageData,
	onSave,
	onPrint,
	isSubscribed,
	onSubscribe,
	isSaveDisabled,
	isPrintDisabled,
}) => {
	const [saveClicked, setSaveClicked] = useState(false);
	const [printClicked, setPrintClicked] = useState(false);
	const [loadingImage, setLoadingImage] = useState(true);
	const [imageError, setImageError] = useState(false);

	const redirectToLink = () => {
		window.location.href =
			"https://www.paypal.com/donate/?hosted_button_id=EEJVELXRLTRAG";
	};

	const handleSave = async () => {
		if (!saveClicked) {
			setSaveClicked(true);
			await onSave(); // Ensure onSave is defined and works as expected
		}
	};

	const handlePrint = async () => {
		if (!printClicked) {
			setPrintClicked(true);
			await onPrint(); // Ensure onPrint is defined and works as expected
		}
	};

	const handleResetLocalStorage = () => {
		localStorage.removeItem("subscribed");
		localStorage.removeItem("validatedIds");
		window.location.reload(); // Reload the page after clearing localStorage
	};

	const handleImageLoad = () => {
		setLoadingImage(false);
		setImageError(false);
	};

	const handleImageError = () => {
		setLoadingImage(false);
		setImageError(true);
	};

	return (
		<ImageCardContainer>
			<ResetButton onClick={handleResetLocalStorage}>
				<GrPowerReset />
			</ResetButton>
			{loadingImage && <Loading>Loading Image...</Loading>}
			{imageError && <p>Error loading image.</p>}
			<Image
				src={imageData.image}
				alt={`generated-img-id-${imageData.id}`}
				onLoad={handleImageLoad}
				onError={handleImageError}
				style={{ display: loadingImage ? "none" : "block" }}
			/>
			<TextWrapper>
				<div className="flex-wrap">
					<ImageCardP>
						<span>Title</span>
						<br />
						{imageData.name}
					</ImageCardP>
					<ImageCardP>
						<span>Acceleration Used</span>
						<br />
						{imageData.acceleration}
					</ImageCardP>
				</div>
				<ImageCardP>
					<span>Description</span>
					<br />
					{imageData.description}
				</ImageCardP>
				<div className="flex-wrap">
					<ImageCardP>
						<span>Artist</span>
						<br />
						{imageData.artist}
					</ImageCardP>
					<ImageCardP>
						<span>Universally UID</span>
						<br />
						{imageData.id}
					</ImageCardP>
				</div>
				<div className="flex-wrap">
					<ImageCardP>
						<span>Sculpture Chip ID</span>
						<br />
						{imageData.created_by_chip_id}
					</ImageCardP>
					<ImageCardP>
						<span>Sculpture Edition</span>
						<br />
						{imageData.chip_id_edition}
					</ImageCardP>
				</div>
			</TextWrapper>

			<ButtonWrap>
				{isSubscribed ? (
					<>
						<button
							onClick={handleSave}
							disabled={isSaveDisabled || saveClicked}
						>
							Save Image
						</button>
						<button
							onClick={handlePrint}
							disabled={isPrintDisabled || printClicked}
						>
							Print
						</button>
					</>
				) : (
					<button onClick={onSubscribe}>Save your Image</button>
				)}
			</ButtonWrap>
			{isSubscribed && (
				<ButtonWrap>
					<button onClick={redirectToLink}>Donate</button>
				</ButtonWrap>
			)}
		</ImageCardContainer>
	);
};

export default ImageCard;
