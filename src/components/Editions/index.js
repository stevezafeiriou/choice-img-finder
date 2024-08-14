import React, { useState } from "react";
import {
	EditionContainer,
	EditionCardContainer,
	Form,
	ButtonWrap,
	TextWrapper,
	EditionCardP,
	ScannerButton,
} from "./EditionsElements";
import { getAllDevices } from "../../services/api";
import { toast } from "react-toastify";
import QrScanner from "react-qr-scanner";
import { BsQrCodeScan } from "react-icons/bs";

const Editions = () => {
	const [chipId, setChipId] = useState("");
	const [edition, setEdition] = useState(null);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [isScannerOpen, setIsScannerOpen] = useState(false);

	const handleInputChange = (e) => {
		setChipId(e.target.value);
	};

	const handleScan = (data) => {
		if (data) {
			setChipId(data);
			setIsScannerOpen(false); // Close the scanner once data is scanned
			toast.success("Chip ID scanned successfully!");
		}
	};

	const handleError = (err) => {
		console.error(err);
		toast.error("Error scanning the QR code.");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setErrorMessage("");
		setEdition(null);

		const toastId = toast.loading("Searching for your edition...");

		try {
			const devices = await getAllDevices();
			const foundDevice = devices.find((device) => device.chip_id === chipId);

			if (foundDevice) {
				setEdition(foundDevice.edition);
				toast.update(toastId, {
					render: "Edition found successfully!",
					type: "success",
					isLoading: false,
					autoClose: 3000,
				});
			} else {
				toast.update(toastId, {
					render: "Chip ID not found.",
					type: "error",
					isLoading: false,
					autoClose: 3000,
				});
				setErrorMessage("Chip ID not found.");
			}
		} catch (error) {
			console.error("Error fetching device data:", error);
			toast.update(toastId, {
				render: `Error: ${error.message}`,
				type: "error",
				isLoading: false,
				autoClose: 3000,
			});
			setErrorMessage(`Error: ${error.message}`);
		} finally {
			setLoading(false);
		}
	};

	const handleDownload = () => {
		const certificateUrl = `https://stevezafeiriou.com/wp-content/uploads/coa/${chipId}.pdf`;
		window.open(certificateUrl, "_blank");
	};

	const openScanner = () => {
		if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
			toast.error(
				"Camera access is not supported in this browser or is disabled."
			);
			return;
		}
		setIsScannerOpen(true);
	};

	return (
		<EditionContainer>
			<EditionCardContainer>
				{edition && (
					<TextWrapper>
						<EditionCardP>
							<span>Your Artwork Edition:</span> {edition}
						</EditionCardP>
					</TextWrapper>
				)}
				{!edition ? (
					<>
						<Form onSubmit={handleSubmit}>
							<h2>Check Your Artwork Edition</h2>
							<div style={{ display: "flex", alignItems: "center" }}>
								<input
									type="text"
									value={chipId}
									onChange={handleInputChange}
									placeholder="Your ChipID"
									required
									// style={{ marginRight: "10px" }}
								/>

								<EditionCardP>or</EditionCardP>
								<ScannerButton onClick={openScanner}>
									<BsQrCodeScan />
								</ScannerButton>
							</div>
							<ButtonWrap>
								<button type="submit" disabled={loading || !chipId}>
									{loading ? "Searching..." : "Get Edition"}
								</button>
							</ButtonWrap>
						</Form>
						{isScannerOpen && (
							<QrScanner
								delay={300}
								onError={handleError}
								onScan={handleScan}
								style={{ width: "100%" }}
							/>
						)}
					</>
				) : (
					<ButtonWrap>
						<button onClick={handleDownload}>View Certificate</button>
					</ButtonWrap>
				)}
				{errorMessage && (
					<TextWrapper>
						<EditionCardP style={{ color: "red" }}>{errorMessage}</EditionCardP>
					</TextWrapper>
				)}
			</EditionCardContainer>
		</EditionContainer>
	);
};

export default Editions;
