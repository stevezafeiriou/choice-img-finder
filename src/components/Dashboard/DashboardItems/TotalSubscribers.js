import React, { useEffect, useState } from "react";
import { getSubscriberList } from "../../../services/api";
import { Container, Title, Stat, StatWrapper } from "../TotalDevicesElements";
import { useAuth } from "../../../context/AuthContext";

const TotalSubscribers = () => {
	const [totalSubscribers, setTotalSubscribers] = useState(0);
	const { auth } = useAuth();
	const token = auth.token;

	useEffect(() => {
		if (token) {
			getSubscriberList(token)
				.then((response) => {
					setTotalSubscribers(response.length);
				})
				.catch((error) => {
					console.error("Error fetching total subscribers:", error);
				});
		}
	}, [token]);

	return (
		<Container>
			<Title>Total Subscribers</Title>
			<StatWrapper>
				<Stat>
					{totalSubscribers} <span>Registered Subscribers</span>
				</Stat>
			</StatWrapper>
		</Container>
	);
};

export default TotalSubscribers;
