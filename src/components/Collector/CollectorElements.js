import styled from "styled-components";
import { motion } from "framer-motion";

export const CollectorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	background-color: black;
	color: #ffffff;
	position: relative;
`;

export const CoverImage = styled.img`
	width: 100%;
	height: 600px;
	object-fit: cover;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
`;

export const ProfileContainer = styled.div`
	width: 100%;
	padding: 20px;
	margin-top: 600px;
	display: flex;
	justify-content: center;
	background: transparent;
	border-top-right-radius: 80px 80px;
	border-top-left-radius: 80px 80px;
	z-index: 2;

	@media screen {
		margin-top: 400px;
	}
`;

export const ProfileCard = styled.div`
	display: flex;
	width: 100%;
	max-width: 600px;
	padding: 20px;
	background-color: black;
	border: 1px solid #2b2e2c;
	backdrop-filter: blur(10px);
	margin-bottom: 20px;
	flex-wrap: wrap;
	box-shadow: 0 0 40px rgba(255, 255, 255, 0.17);
	position: relative; /* For tooltip positioning */
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #171717;
	}
`;

export const ProfileInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-right: 20px;

	h2,
	p {
		background-color: transparent;
		color: #dddddd;
		margin: 0 5px;
	}

	h2 {
		font-weight: 500;
		font-size: 1.2rem;
	}

	p {
		font-size: 0.875rem;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 0.875rem;
		}

		p {
			font-size: 0.75rem;
		}
	}
`;

export const ProfileImage = styled.img`
	flex: 1;
	max-width: 200px;
	border-radius: 8px;
	border: 1px solid #2b2e2c;
`;

export const BadgesContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;
	h3 {
		margin-right: 10px;
		font-size: 1rem;
		color: #ffffff;
	}
`;

export const BadgeIcon = styled.div`
	position: relative;
`;

export const Tooltip = styled.div`
	position: absolute;
	top: -30px;
	left: 0;
	background-color: #333;
	color: #fff;
	padding: 5px 10px;
	border-radius: 4px;
	font-size: 0.75rem;
	white-space: nowrap;

	z-index: 10;
`;

export const ImagesGridContainer = styled.div`
	width: 100%;
	padding: 20px;
	background-color: transparent;
	display: flex;
	justify-content: center;
	z-index: 2;
`;

export const ImagesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 20px;
	width: 100%;
	max-width: 600px;
	margin-bottom: 20px;
	background-color: transparent;
`;

export const ImageCard = styled.div`
	background-color: #2a2a2a;
	border: 1px solid #333;
	overflow: hidden;
	transition: transform 0.3s ease;
	cursor: pointer;
	&:hover {
		transform: scale(1.02);
	}
	aspect-ratio: 1;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	-o-object-fit: cover;
`;

export const ModalImage = styled.img`
	width: 100%;
	height: auto;
	max-width: 280px;
	margin: 5px auto;
	border: 1px solid #2b2e2c;
	object-fit: cover;
	-o-object-fit: cover;
`;

export const Modal = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: flex-start; /* Align content to the start */
	z-index: 1000;

	@media (min-width: 768px) {
		width: 25%; /* Fill 40% of the page width */
		height: 100%; /* Fill the full height */
	}
`;

export const ModalContent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	background-color: #171717;
	padding: 20px;
	border: 1px solid #2b2e2c;
	box-shadow: 0 0 40px rgba(255, 255, 255, 0.17);
	width: 100%;
	max-width: 100%;
	height: 100%; /* Fill the full height */
	position: relative;
	overflow-y: auto; /* Make the modal content scrollable */
	max-height: 100vh; /* Adjust the maximum height */
	border-top-right-radius: 50px 50px;
	border-bottom-right-radius: 50px 50px;

	@media (max-width: 768px) {
		padding: 10px;
		margin: 0;
		max-height: 65vh; /* Adjust the maximum height for mobile */
		position: fixed;
		bottom: 0;
		width: 100%;
		border-top-right-radius: 40px;
		border-top-left-radius: 40px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 40px;
	right: 40px;
	background: none;
	border: none;
	color: #ffffff;
	font-size: 1.1rem;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		color: orange;
	}
	@media (max-width: 768px) {
		top: 20px;
		right: 20px;
	}
`;

export const TextWrapper = styled.div`
	width: 100%;
	max-width: 280px;
	margin: 10px 5px;
	text-align: left;

	.flex-wrap {
		display: flex;
		border-bottom: 1px solid #2b2e2c;
	}

	@media (max-width: 768px) {
		max-width: 80%;
	}
`;

export const ImageCardP = styled.p`
	font-size: 0.785rem;
	background-color: transparent;
	text-align: justify;
	color: #dddddd;
	width: 100%;
	margin: 10px 0;

	span {
		text-align: justify;
		color: white;
		background: transparent;
		font-weight: 500;
		font-size: 0.785rem;
		line-height: 20px;
	}
`;

export const ButtonWrap = styled.div`
	display: flex;
	background-color: transparent;
	width: 100%;
	max-width: 280px;
	align-items: center;

	button {
		width: 100%;
		border: 1px solid #dddddd;
		padding: 10px 15px;
		margin: 5px;
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
		background-color: #171616;
		color: #dddddd;

		&:hover {
			background-color: ${(props) => (props.disabled ? "#171616" : "#2b2e2c")};
			color: ${(props) => (props.disabled ? "white" : "white")};
			border: ${(props) =>
				props.disabled ? "1px solid #2b2e2c" : "1px solid #171616"};
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
			background-color: transparent;
			color: #dddddd;
			border: 1px solid #dddddd;
		}
	}

	@media (max-width: 768px) {
		button {
			width: 100%;
			margin: 4px 0;
		}
	}
`;

export const Loading = styled.div`
	color: white;
	font-size: 0.758em;
	max-width: 300px;
	img {
		width: 60px;
		height: 60px;
	}
`;
