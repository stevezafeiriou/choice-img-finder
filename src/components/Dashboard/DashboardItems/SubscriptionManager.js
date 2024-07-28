import React, { useState } from "react";
import { subscribeUser, updateSubscription } from "../../../services/api";
import {
	Container,
	Title,
	Input,
	Textarea,
	Button,
	Message,
} from "../SubscriptionManagerElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscriptionManager = () => {
	const [email, setEmail] = useState("");
	const [ids, setIds] = useState([]);
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState({});

	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const validateIds = (ids) => {
		return Array.isArray(ids) && ids.length > 0;
	};

	const handleSubscribe = async () => {
		let validationErrors = {};

		if (!validateEmail(email)) {
			validationErrors.email = "Invalid email address.";
		}

		if (!validateIds(ids)) {
			validationErrors.ids = "Validated IDs should be a non-empty array.";
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		const data = { email, ids };

		toast.promise(subscribeUser(data), {
			pending: "Subscribing...",
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
						data?.response?.data?.message || "Error subscribing";
					setMessage(`Error: ${errorMessage}`);
					return `Error: ${errorMessage}`;
				},
			},
		});
	};

	const handleUpdate = async () => {
		let validationErrors = {};

		if (!validateEmail(email)) {
			validationErrors.email = "Invalid email address.";
		}

		if (!validateIds(ids)) {
			validationErrors.ids = "Validated IDs should be a non-empty array.";
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		const data = { email, ids };

		toast.promise(updateSubscription(data), {
			pending: "Updating subscription...",
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
						data?.response?.data?.message || "Error updating subscription";
					setMessage(`Error: ${errorMessage}`);
					return `Error: ${errorMessage}`;
				},
			},
		});
	};

	return (
		<Container>
			<Title>Subscription Manager</Title>
			<Input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			{errors.email && <Message isError>{errors.email}</Message>}
			<Textarea
				placeholder="Validated IDs (comma-separated)"
				value={ids.join(",")}
				onChange={(e) =>
					setIds(e.target.value.split(",").map((id) => id.trim()))
				}
				required
			/>
			{errors.ids && <Message isError>{errors.ids}</Message>}
			<Button onClick={handleSubscribe}>Subscribe</Button>
			<Button onClick={handleUpdate}>Update</Button>
			{message && (
				<Message isError={message.startsWith("Error")}>{message}</Message>
			)}
		</Container>
	);
};

export default SubscriptionManager;
