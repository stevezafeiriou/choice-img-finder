import React from "react";
import { ImagesGrid, ImageCard, Image } from "./CollectorElements";

const ImageGrid = ({ images, onImageClick }) => {
	return (
		<ImagesGrid>
			{images.map((image) => (
				<ImageCard key={image.id} onClick={() => onImageClick(image)}>
					<Image src={image.image} alt={image.description} />
				</ImageCard>
			))}
		</ImagesGrid>
	);
};

export default ImageGrid;
