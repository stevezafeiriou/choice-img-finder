import React, { useState } from "react";
import {
	Container,
	Title,
	Form,
	FormGroup,
	Input,
	Button,
	ErrorMessage,
} from "./LoginElements";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthContext";
import { getJwtForUser } from "../../services/api";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { setAuth } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const loginPromise = async () => {
			const response = await getJwtForUser(username, password);

			if (response) {
				setAuth({
					token: response.token,
					user_display_name: response.user_display_name,
					user_email: response.user_email,
					user_nicename: response.user_nicename,
				});
				setError(""); // Clear any previous errors
				return `Welcome, ${response.user_email}`;
			} else {
				throw new Error("Invalid response from server");
			}
		};

		toast
			.promise(loginPromise(), {
				pending: "Logging in...",
				success: {
					render({ data }) {
						return data;
					},
				},
				error: {
					render({ data }) {
						return data?.response?.data?.message || "Invalid credentials";
					},
				},
			})
			.catch((err) => {
				console.error("Error:", err.response ? err.response.data : err.message);
				setError("Invalid credentials");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<Container>
			<Title>Restricted Access</Title>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Input
						type="text"
						id="username"
						placeholder="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Input
						type="password"
						id="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormGroup>
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<Button type="submit" disabled={isLoading}>
					{isLoading ? "Loading..." : "Login"}
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
