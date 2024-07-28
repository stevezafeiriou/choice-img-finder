import React, { useState, useEffect } from "react";
import { SubscriptionFormContainer, Form, LogoImg } from "./ImagePageElements"; // Assuming you have defined these styled components
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getRecentUnvalidatedImages } from "../../services/api"; // Import the function from api.js

const FindGenerationsById = ({ onSubmit, logo }) => {
	const [imageIdInput, setImageIdInput] = useState("");
	const [recentImages, setRecentImages] = useState([]);
	const [selectedImageId, setSelectedImageId] = useState("");

	useEffect(() => {
		const fetchRecentUnvalidatedImages = async () => {
			try {
				const data = await getRecentUnvalidatedImages(); // Use the function from api.js

				if (Array.isArray(data.data)) {
					setRecentImages(data.data); // Access images inside data.data
				} else {
					toast("Unexpected response format", {
						toastId: `Unexpected response format`,
					});
					console.error("Unexpected response format:", data);
				}
			} catch (error) {
				toast("Currently there are no images to validate. Try again later.", {
					toastId:
						"Currently there are no images to validate. Try again later.",
				});
				console.error("Error fetching recent unvalidated images:", error);
			}
		};

		fetchRecentUnvalidatedImages();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (imageIdInput.trim() !== "") {
			onSubmit(imageIdInput);
		} else if (selectedImageId) {
			onSubmit(selectedImageId);
		} else {
			console.error("No UUID provided");
			// Optionally handle the case where no input is provided
			toast.error(`No UUID provided`);
		}
	};

	return (
		<SubscriptionFormContainer>
			<Form onSubmit={handleSubmit}>
				<LogoImg src={logo} alt="choice-generation-logo" />
				<h2>Find Generations by UUID</h2>
				<p>Please use one of the following methods to find an image:</p>

				{/* Text Input */}
				<label>
					<input
						type="text"
						value={imageIdInput}
						onChange={(e) => setImageIdInput(e.target.value)}
						placeholder="Specific image UUID"
					/>
				</label>
				<p>
					or choose from recently created generations that did not validated by
					viewers:
				</p>

				{/* Dropdown Menu */}
				<label htmlFor="recent-images-dropdown"></label>
				<select
					id="recent-images-dropdown"
					value={selectedImageId}
					onChange={(e) => setSelectedImageId(e.target.value)}
				>
					<option value="">Select an image</option>
					{recentImages.map((image) => (
						<option key={image.id} value={image.id}>
							{image.name} created {image.time_since_creation} ago
						</option>
					))}
				</select>

				{/* Submit Button */}
				<button type="submit" disabled={!imageIdInput && !selectedImageId}>
					Find Image
				</button>
			</Form>
		</SubscriptionFormContainer>
	);
};

export default FindGenerationsById;
