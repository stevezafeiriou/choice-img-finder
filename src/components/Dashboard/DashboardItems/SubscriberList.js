import React, { useEffect, useState } from "react";
import { getSubscriberList, updateDonationStatus } from "../../../services/api";
import {
	Container,
	Title,
	Table,
	TableHeader,
	TableRow,
	TableCell,
	InnerTable,
	InnerTableRow,
	InnerTableCell,
	Button,
} from "../SubscriberListElements";
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";

const SubscriberList = () => {
	const [subscribers, setSubscribers] = useState([]);
	const { auth } = useAuth();
	const token = auth.token;

	useEffect(() => {
		if (token) {
			getSubscriberList(token)
				.then((response) => {
					setSubscribers(response);
				})
				.catch((error) => {
					console.error("Error fetching subscriber list:", error);
				});
		}
	}, [token]);

	const handleUpdateDonation = (email, currentStatus) => {
		const confirmUpdate = window.confirm(
			`Are you sure you want to update the donation status for ${email}?`
		);
		if (confirmUpdate) {
			if (currentStatus === "1") {
				toast.info("User has already donated.");
				return;
			}

			toast.promise(updateDonationStatus(email, token), {
				pending: "Updating donation status...",
				success: {
					render({ data }) {
						setSubscribers((prevSubscribers) =>
							prevSubscribers.map((subscriber) =>
								subscriber.email === email
									? { ...subscriber, donate: 1 }
									: subscriber
							)
						);
						return `Donation status updated successfully.`;
					},
				},
				error: {
					render({ data }) {
						const errorMessage =
							data?.response?.data?.message || "Error updating donation status";
						return `Error: ${errorMessage}`;
					},
				},
			});
		}
	};

	return (
		<Container>
			<Title>Subscriber List</Title>
			<Table>
				<thead>
					<TableRow>
						<TableHeader>Email</TableHeader>
						<TableHeader>Validated IDs</TableHeader>
						<TableHeader>Donation Status</TableHeader>
						<TableHeader>Update Donation</TableHeader>
					</TableRow>
				</thead>
				<tbody>
					{subscribers.map((subscriber, index) => (
						<TableRow key={index}>
							<TableCell>{subscriber.email}</TableCell>
							<TableCell>
								{Array.isArray(subscriber.validated_ids) ? (
									<InnerTable style={{ backgroundColor: "transparent" }}>
										<tbody>
											{subscriber.validated_ids.map((id, idx) => (
												<InnerTableRow
													key={idx}
													style={{ backgroundColor: "transparent" }}
												>
													<InnerTableCell style={{ border: "none" }}>
														{id}
													</InnerTableCell>
												</InnerTableRow>
											))}
										</tbody>
									</InnerTable>
								) : (
									"No validated IDs"
								)}
							</TableCell>
							<TableCell>
								{subscriber.donate !== "0" ? (
									<p style={{ color: "orange" }}>Donated</p>
								) : (
									<p>Not Donated</p>
								)}
							</TableCell>
							<TableCell>
								<Button
									onClick={() =>
										handleUpdateDonation(subscriber.email, subscriber.donate)
									}
									disabled={subscriber.donate !== "0"}
								>
									Update
								</Button>
							</TableCell>
						</TableRow>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default SubscriberList;
