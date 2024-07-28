import React, { useEffect, useState } from "react";
import { getAllDevices } from "../../../services/api";
import {
	Container,
	Title,
	Table,
	TableHeader,
	TableRow,
	TableCell,
} from "../SubscriberListElements";
import { useAuth } from "../../../context/AuthContext";

const RegisteredDevices = () => {
	const [devices, setDevices] = useState([]);
	const { auth } = useAuth();
	const token = auth.token;

	useEffect(() => {
		if (token) {
			getAllDevices(token)
				.then((response) => {
					setDevices(response);
				})
				.catch((error) => {
					console.error("Error fetching devices list:", error);
				});
		}
	}, [token]);

	return (
		<Container>
			<Title>Registered Devices</Title>

			<Table>
				<thead>
					<TableRow>
						<TableHeader>Chip ID</TableHeader>
						<TableHeader>Edition</TableHeader>
					</TableRow>
				</thead>
				<tbody>
					{devices.map((device, index) => (
						<TableRow key={index}>
							<TableCell>{device.chip_id}</TableCell>
							<TableCell>{device.edition}</TableCell>
						</TableRow>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default RegisteredDevices;
