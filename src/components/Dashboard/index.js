import React, { lazy, Suspense, useEffect, useState } from "react";
import { Container, Row, Card, InfoContainer } from "./DashboardElements";
import { IoInformationCircleOutline, IoClose } from "react-icons/io5";

const ImageDataList = lazy(() => import("./DashboardItems/ImageDataList"));
const FirmwareInfo = lazy(() => import("./DashboardItems/FirmwareInfo"));
const SubscriptionManager = lazy(() =>
	import("./DashboardItems/SubscriptionManager")
);
const FirmwareChangeLog = lazy(() =>
	import("./DashboardItems/FirmwareChangeLog")
);
const TotalSubscribers = lazy(() =>
	import("./DashboardItems/TotalSubscribers")
);
const RegisteredDevices = lazy(() =>
	import("./DashboardItems/RegisteredDevices")
);
const UpdateRegisteredDevices = lazy(() =>
	import("./DashboardItems/UpdateRegisteredDevices")
);
const SubscriberList = lazy(() => import("./DashboardItems/SubscriberList"));
const TotalDevices = lazy(() => import("./DashboardItems/TotalDevices"));
const TotalImages = lazy(() => import("./DashboardItems/TotalImages"));
const UpdateFirmware = lazy(() => import("./DashboardItems/UpdateFirmware"));
const DashboardFooter = lazy(() => import("./DashboardItems/DashboardFooter"));
const Instructions = lazy(() => import("./DashboardItems/Instructions"));

const Dashboard = () => {
	const [openInfo, setOpenInfo] = useState(false);

	const handleOpenInfo = () => {
		setOpenInfo(!openInfo);
	};

	useEffect(() => {
		localStorage.removeItem("auth");
	}, []);

	return (
		<Container>
			<Suspense fallback={<div>Loading...</div>}>
				{/* Overview Cards */}

				<Row opened={true}>
					<Card>
						<TotalImages />
					</Card>
					<Card>
						<TotalDevices />
					</Card>
					<Card>
						<TotalSubscribers />
					</Card>
				</Row>

				<Row opened={true}>
					<Card>
						<FirmwareInfo />
					</Card>
					<Card>
						<FirmwareChangeLog />
					</Card>
				</Row>

				<Row opened={true}>
					<Card>
						<SubscriberList />
					</Card>
				</Row>

				<Row opened={true}>
					<Card>
						<RegisteredDevices />
					</Card>
					<Card>
						<UpdateRegisteredDevices />
					</Card>
				</Row>

				<Row opened={true}>
					<Card>
						<ImageDataList />
					</Card>
				</Row>

				<Row opened={true}>
					<Card>
						<UpdateFirmware />
					</Card>
					<Card>
						<SubscriptionManager />
					</Card>
				</Row>
				<InfoContainer>
					{openInfo ? (
						<IoClose onClick={handleOpenInfo} />
					) : (
						<IoInformationCircleOutline onClick={handleOpenInfo} />
					)}
				</InfoContainer>

				<Row opened={openInfo}>
					<Card>
						<Instructions />
					</Card>
				</Row>

				<DashboardFooter />
			</Suspense>
		</Container>
	);
};

export default Dashboard;
