import React, { useState } from "react";
import { registerNewDevice } from "../../../services/api";
import {
	Container,
	Title,
	Input,
	Button,
	Message,
} from "../SubscriptionManagerElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../context/AuthContext";

const UpdateRegisteredDevices = () => {
	const { auth } = useAuth();
	const token = auth.token;

	const [chipId, setChipId] = useState("");
	const [edition, setEdition] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState({});

	const validateChipId = (chipId) => {
		return chipId && chipId.length > 0;
	};

	const validateEdition = (edition) => {
		return edition && edition.length > 0;
	};

	const handleRegisterDevice = async () => {
		let validationErrors = {};

		if (!validateChipId(chipId)) {
			validationErrors.chipId = "Chip ID is required.";
		}

		if (!validateEdition(edition)) {
			validationErrors.edition = "Edition is required.";
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		const userConfirmed = window.confirm(
			`Are you sure you want to Register device ID: ${chipId} as Edition: ${edition}? This action cannot be undone.`
		);

		if (!userConfirmed) {
			return;
		}

		const data = { chip_id: chipId, edition };

		console.log("Registering device with data:", data); // Debugging log

		toast.promise(registerNewDevice(data, token), {
			pending: "Registering device...",
			success: {
				render({ data }) {
					setMessage(`Success: ${data}`);
					setErrors({});
					return `Success: ${data}`;
				},
			},
			error: {
				render({ data }) {
					const errorMessage =
						data?.response?.data?.message || "Error registering device";
					setMessage(`Error: ${errorMessage}`);
					console.error("Error response data:", data); // Debugging log
					return `Error: ${errorMessage}`;
				},
			},
		});
	};

	return (
		<Container>
			<Title>Register New Device</Title>
			<Input
				type="text"
				placeholder="Chip ID"
				value={chipId}
				onChange={(e) => setChipId(e.target.value)}
				required
			/>
			{errors.chipId && <Message isError>{errors.chipId}</Message>}
			<Input
				type="text"
				placeholder="Edition"
				value={edition}
				onChange={(e) => setEdition(e.target.value)}
				required
			/>
			{errors.edition && <Message isError>{errors.edition}</Message>}
			<Button onClick={handleRegisterDevice}>Register Device</Button>
			{message && (
				<Message isError={message.startsWith("Error")}>{message}</Message>
			)}
		</Container>
	);
};

export default UpdateRegisteredDevices;
