import React, { useState } from "react";
import {
	Container,
	Form,
	FormGroup,
	Input,
	TextArea,
	Button,
	ErrorMessage,
} from "../UpdateFirmwareElements";
import { uploadNewFirmwareVersion } from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";
import { jwtDecode } from "jwt-decode"; // Correctly import jwtDecode
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateFirmware = () => {
	const [file, setFile] = useState(null);
	const [version, setVersion] = useState("");
	const [changeLog, setChangeLog] = useState("");
	const [uploadStatus, setUploadStatus] = useState(""); // For status messages
	const [errors, setErrors] = useState({});
	const { auth, refreshAuthToken } = useAuth();

	const validateFile = (file) => {
		const validExtensions = ["bin"];
		const fileExtension = file.name.split(".").pop().toLowerCase();
		return validExtensions.includes(fileExtension);
	};

	const validateVersion = (version) => {
		const versionPattern = /^\d+\.\d+\.\d+$/;
		return versionPattern.test(version);
	};

	const isTokenExpired = (token) => {
		const decoded = jwtDecode(token);
		const currentTime = Date.now() / 1000;
		return decoded.exp < currentTime;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let validationErrors = {};

		if (!file) {
			validationErrors.file = "File is required.";
		} else if (!validateFile(file)) {
			validationErrors.file = "Only .bin files are allowed.";
		}

		if (!version) {
			validationErrors.version = "Version is required.";
		} else if (!validateVersion(version)) {
			validationErrors.version = "Version must be in the format x.x.x.";
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setErrors({});
		const formData = new FormData();
		formData.append("file", file);
		formData.append("version", version);
		formData.append("change_log", changeLog);

		setUploadStatus("Loading...");

		const uploadPromise = async () => {
			if (isTokenExpired(auth.token)) {
				await refreshAuthToken();
				return; // Prevent further execution until token is refreshed
			}
			return uploadNewFirmwareVersion(formData, auth.token);
		};

		toast
			.promise(uploadPromise(), {
				pending: "Uploading firmware...",
				success: "Firmware uploaded successfully.",
				error: "Error uploading firmware.",
			})
			.then((response) => {
				setUploadStatus(`Success: ${response}`);
			})
			.catch((error) => {
				console.error("Error:", error);
				setUploadStatus(`Error: ${error.message}`);
			});
	};

	return (
		<Container>
			<h2>Update Firmware</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Input
						type="file"
						id="file"
						accept=".bin"
						onChange={(e) => setFile(e.target.files[0])}
						required
					/>
					{errors.file && <p style={{ color: "red" }}>{errors.file}</p>}
				</FormGroup>
				<FormGroup>
					<Input
						type="text"
						id="version"
						placeholder="Update Version (ex. 1.0.0)"
						value={version}
						onChange={(e) => setVersion(e.target.value)}
						required
					/>
					{errors.version && <p style={{ color: "red" }}>{errors.version}</p>}
				</FormGroup>
				<FormGroup>
					<TextArea
						id="changeLog"
						placeholder="Change Log: (ex. Initial Release)"
						value={changeLog}
						onChange={(e) => setChangeLog(e.target.value)}
						required
					/>
				</FormGroup>
				<Button type="submit" disabled={uploadStatus === "Loading..."}>
					{uploadStatus === "Loading..." ? "Loading..." : "Upload Firmware"}
				</Button>
			</Form>
			{uploadStatus && (
				<ErrorMessage color={uploadStatus}>
					{uploadStatus === "Loading..." ? null : uploadStatus}
				</ErrorMessage>
			)}
		</Container>
	);
};

export default UpdateFirmware;
