import React from "react";
import {
	Modal,
	ModalContent,
	CloseButton,
	TextWrapper,
	ImageCardP,
	ModalImage,
} from "./CollectorElements";

const ImageModal = ({ image, onClose }) => {
	const removeColorFromString = (str) => {
		return typeof str === "string" ? str.replace(/^Color\s*/, "").trim() : str;
	};

	const isMobile = window.innerWidth < 768;

	return (
		<Modal
			onClick={onClose}
			initial={{ x: isMobile ? 0 : "-100%", y: isMobile ? "100%" : 0 }}
			animate={{ x: 0, y: 0 }}
			exit={{ x: isMobile ? 0 : "-100%", y: isMobile ? "100%" : 0 }}
		>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<CloseButton onClick={onClose}>X</CloseButton>
				<ModalImage src={image.image} alt={image.description} />
				<TextWrapper>
					<div className="flex-wrap">
						<ImageCardP>
							<span>Title</span>
							<br />
							{image.name}
						</ImageCardP>
						<ImageCardP>
							<span>Acceleration Used</span>
							<br />
							{image.attributes[0].value}
						</ImageCardP>
					</div>
					<ImageCardP>
						<span>Description</span>
						<br />
						{image.description}
					</ImageCardP>
					<div className="flex-wrap">
						<ImageCardP>
							<span>Artist</span>
							<br />
							{image.artist}
						</ImageCardP>
						<ImageCardP>
							<span>UUID</span>
							<br />
							{image.id}
						</ImageCardP>
					</div>
					<div className="flex-wrap">
						<ImageCardP>
							<span>Chip ID</span>
							<br />
							{image.created_by_chip_id}
						</ImageCardP>
						<ImageCardP>
							<span>Sculpture Edition</span>
							<br />
							{image.chip_id_edition}
						</ImageCardP>
					</div>
					<ImageCardP>
						<span>Attributes</span>
					</ImageCardP>
					<div className="flex-wrap">
						<ImageCardP>
							<span>
								{removeColorFromString(image.attributes[2].trait_type)}
							</span>
							<br />
							{image.attributes[2].value}
						</ImageCardP>
						<ImageCardP>
							<span>
								{removeColorFromString(image.attributes[3].trait_type)}
							</span>
							<br />
							{image.attributes[3].value}
						</ImageCardP>
						<ImageCardP>
							<span>
								{removeColorFromString(image.attributes[4].trait_type)}
							</span>
							<br />
							{image.attributes[4].value}
						</ImageCardP>
					</div>
				</TextWrapper>
			</ModalContent>
		</Modal>
	);
};

export default ImageModal;
