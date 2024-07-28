import React, { useEffect, useState } from "react";
import { getTotalDevices } from "../../../services/api";
import { Container, Title, Stat, StatWrapper } from "../TotalDevicesElements";

const TotalDevices = () => {
	const [totalDevices, setTotalDevices] = useState(0);

	useEffect(() => {
		getTotalDevices().then((response) => {
			setTotalDevices(response.data.total);
		});
	}, []);

	return (
		<Container>
			<Title>Total Devices</Title>
			<StatWrapper>
				<Stat>
					{totalDevices} <span>Registered Devices</span>
				</Stat>
			</StatWrapper>
		</Container>
	);
};

export default TotalDevices;
