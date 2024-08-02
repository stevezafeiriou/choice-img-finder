import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCollectedImages } from "../../services/api";
import {
	CollectorContainer,
	CoverImage,
	ProfileContainer,
	ImagesGridContainer,
} from "./CollectorElements";
import Profile from "./Profile";
import ImageGrid from "./ImageGrid";
import ImageModal from "./ImageModal";
import { collectionCover } from "../../services/api";

const Collector = () => {
	const { email } = useParams();
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [modalImage, setModalImage] = useState(null);
	const [userScore, setUserScore] = useState(0);
	const [blur, setBlur] = useState(0);
	const [profileImage, setProfileImage] = useState(null);
	const [donated, setDonated] = useState(false);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const { collected_images, user_score, donate } =
					await getCollectedImages(email);
				setImages(collected_images);
				setUserScore(user_score);
				setDonated(donate);
				setProfileImage(
					collected_images[Math.floor(Math.random() * collected_images.length)]
						.image
				);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchImages();
	}, [email]);

	useEffect(() => {
		const handleScroll = () => {
			setBlur(window.scrollY / 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleImageClick = (image) => {
		setModalImage(image);
	};

	const handleCloseModal = () => {
		setModalImage(null);
	};

	const userImages = images.length;

	// Example badges array for demonstration
	const badges = ["medal", "star"]; // Replace with actual badge data

	return (
		<CollectorContainer>
			<CoverImage
				src={collectionCover}
				alt="Cover Image"
				style={{
					filter: `blur(${blur}px)`,
				}}
			/>
			<ProfileContainer>
				<Profile
					loading={loading}
					email={email}
					totalImages={userImages}
					rank={userScore.toFixed(2)}
					edition={images[0]?.chip_id_edition}
					profileImage={profileImage}
					images={images}
					donated={donated}
				/>
			</ProfileContainer>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : (
				<ImagesGridContainer>
					<ImageGrid images={images} onImageClick={handleImageClick} />
				</ImagesGridContainer>
			)}
			{modalImage && (
				<ImageModal image={modalImage} onClose={handleCloseModal} />
			)}
		</CollectorContainer>
	);
};

export default Collector;
