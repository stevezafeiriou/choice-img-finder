import React, { useEffect, useState } from "react";
import { getRecentUnvalidatedImages } from "../../../services/api";
import {
	Table,
	TableHeader,
	TableRow,
	TableCell,
} from "../UnvalidatedImagesElements";

const UnvalidatedImages = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		getRecentUnvalidatedImages().then((response) => {
			setImages(response.data);
		});
	}, []);

	return (
		<div>
			<h2>Recent Unvalidated Images</h2>
			<Table>
				<thead>
					<TableRow>
						<TableHeader>ID</TableHeader>
						<TableHeader>Description</TableHeader>
						<TableHeader>Image</TableHeader>
						<TableHeader>Name</TableHeader>
						<TableHeader>Artist</TableHeader>
						<TableHeader>Created At</TableHeader>
						<TableHeader>Acceleration</TableHeader>
					</TableRow>
				</thead>
				<tbody>
					{images.map((image) => (
						<TableRow key={image.id}>
							<TableCell>{image.id}</TableCell>
							<TableCell>{image.description}</TableCell>
							<TableCell>{image.image}</TableCell>
							<TableCell>{image.name}</TableCell>
							<TableCell>{image.artist}</TableCell>
							<TableCell>{image.created_at}</TableCell>
							<TableCell>{image.acceleration}</TableCell>
						</TableRow>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default UnvalidatedImages;
