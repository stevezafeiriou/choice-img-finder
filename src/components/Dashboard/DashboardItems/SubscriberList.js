import React, { useEffect, useState } from "react";
import { getSubscriberList } from "../../../services/api";
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
} from "../SubscriberListElements";
import { useAuth } from "../../../context/AuthContext";

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

	return (
		<Container>
			<Title>Subscriber List</Title>
			<Table>
				<thead>
					<TableRow>
						<TableHeader>Email</TableHeader>
						<TableHeader>Validated IDs</TableHeader>
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
						</TableRow>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default SubscriberList;
