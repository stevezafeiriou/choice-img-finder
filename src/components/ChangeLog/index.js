import React, { useEffect, useState } from "react";
import {
	TimelineContainer,
	Timeline,
	TimelineItem,
	Dot,
	TimelineContent,
	TimelineDate,
	TimelineVersion,
	TimelineLog,
	Loading,
} from "./ChangeLogElements";
import { getFirmwareChangelog } from "../../services/api"; // Import the function from api.js
import loader from "../../assets/loader.svg";

const ChangeLog = () => {
	const [logs, setLogs] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchChangelog = async () => {
			try {
				const data = await getFirmwareChangelog(); // Use the function from api.js

				// Sort changelog by added_date in descending order
				const sortedChangelog = data.data.sort(
					(a, b) => new Date(b.added_date) - new Date(a.added_date)
				);

				setLogs(sortedChangelog);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
				console.error("Error fetching changelog data:", error);
			}
		};

		fetchChangelog();
	}, []);

	return (
		<TimelineContainer>
			{loading ? (
				<Loading>
					<img src={loader} alt="loader-icon" />
				</Loading>
			) : error ? (
				<Loading>Error: {error}</Loading>
			) : (
				<Timeline>
					{logs.map((log, index) => (
						<TimelineItem key={index}>
							<Dot active={index === 0 ? "true" : "false"} />
							<TimelineContent>
								<TimelineDate>
									{new Date(log.added_date).toLocaleDateString(undefined, {
										year: "numeric",
										month: "long",
										day: "numeric",
									})}
								</TimelineDate>
								<TimelineVersion>v{log.version}</TimelineVersion>
								<TimelineLog>{log.change_log}</TimelineLog>
							</TimelineContent>
						</TimelineItem>
					))}
				</Timeline>
			)}
		</TimelineContainer>
	);
};

export default ChangeLog;
