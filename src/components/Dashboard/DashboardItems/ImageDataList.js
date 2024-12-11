import React, { useEffect, useState } from "react";
import {
	getAllImages,
	deleteImageById,
	validateImage,
} from "../../../services/api";
import {
	AllImagesContainer,
	Table,
	TableHeader,
	TableRow,
	TableCell,
	Button,
	SearchInput,
	Select,
} from "../ImageDataListElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../context/AuthContext";

const ImageDataList = () => {
	const { auth } = useAuth();
	const [images, setImages] = useState([]);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("All");
	const [expanded, setExpanded] = useState({});

	useEffect(() => {
		getAllImages().then((response) => {
			setImages(response.data);
		});
	}, []);

	const handleDelete = (id) => {
		const userConfirmed = window.confirm(
			`Are you sure you want to delete image ID: ${id}? This action cannot be undone.`
		);

		if (!userConfirmed) {
			return;
		}

		const deletePromise = () => deleteImageById(id, auth.token);

		toast.promise(deletePromise(), {
			pending: `Deleting image ID: ${id}...`,
			success: {
				render() {
					setImages(images.filter((image) => image.id !== id));
					return `Image ID: ${id} deleted successfully.`;
				},
			},
			error: {
				render({ data }) {
					return `Error deleting image ID: ${id}. ${data.message}`;
				},
			},
		});
	};

	const handleValidate = (id) => {
		const email = prompt(
			"Please enter the email of the user who validated this image:"
		);

		if (!email) {
			toast.error("Validation canceled. No email provided.");
			return;
		}

		const validatePromise = () => validateImage(id, email);

		toast.promise(validatePromise(), {
			pending: `Validating image ID: ${id}...`,
			success: {
				render() {
					setImages(
						images.map((image) => {
							if (image.id === id) {
								return { ...image, validated: "1" };
							}
							return image;
						})
					);
					return `Image ID: ${id} validated successfully.`;
				},
			},
			error: {
				render({ data }) {
					return `Error validating image ID: ${id}. ${data.message}`;
				},
			},
		});
	};

	const toggleExpand = (id, field) => {
		setExpanded((prevState) => ({
			...prevState,
			[id]: {
				...prevState[id],
				[field]: !prevState[id]?.[field],
			},
		}));
	};

	const filteredImages = images.filter((image) => {
		const matchesSearch = image.id.includes(search);
		const matchesFilter =
			filter === "All" ||
			(filter === "Validated" && image.validated === "1") ||
			(filter === "Unvalidated" && image.validated === "0");
		return matchesSearch && matchesFilter;
	});

	return (
		<AllImagesContainer>
			<h2>All Images</h2>
			<div style={{ display: "flex" }}>
				<SearchInput
					type="text"
					placeholder="Search by ID"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Select value={filter} onChange={(e) => setFilter(e.target.value)}>
					<option value="All">All</option>
					<option value="Validated">Validated</option>
					<option value="Unvalidated">Unvalidated</option>
				</Select>
			</div>
			<Table>
				<thead>
					<tr>
						<TableHeader>ID</TableHeader>
						<TableHeader>Description</TableHeader>
						<TableHeader>Image</TableHeader>
						<TableHeader>Actions</TableHeader>
					</tr>
				</thead>
				<tbody>
					{filteredImages.map((image) => (
						<TableRow key={image.id}>
							<TableCell>{image.id}</TableCell>
							<TableCell>
								{expanded[image.id]?.description ? (
									<>
										{image.description}
										<br />
										<Button
											onClick={() => toggleExpand(image.id, "description")}
										>
											Show Less
										</Button>
									</>
								) : (
									<>
										{image.description.substring(0, 50)}...
										<br />
										<Button
											onClick={() => toggleExpand(image.id, "description")}
										>
											Show More
										</Button>
									</>
								)}
							</TableCell>
							<TableCell>
								<a
									href={`https://choice.saphirelabs.com/finder?id=${image.id}`}
									target="_blank"
									rel="noreferrer"
								>
									<img
										src={image.image}
										alt="image"
										style={{
											maxWidth: "200px",
											maxHeight: "200px",
										}}
									/>
								</a>
							</TableCell>
							<TableCell>
								<Button
									onClick={() => handleValidate(image.id)}
									disabled={image.validated === "1"}
								>
									Validate
								</Button>
								<Button onClick={() => handleDelete(image.id)}>Delete</Button>
							</TableCell>
						</TableRow>
					))}
				</tbody>
			</Table>
		</AllImagesContainer>
	);
};

export default ImageDataList;
