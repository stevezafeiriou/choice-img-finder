import React, { useEffect, useState } from "react";
import { getFirmwareChangelog } from "../../../services/api";
import {
	Container,
	Title,
	Table,
	TableHeader,
	TableRow,
	TableCell,
} from "../FirmwareChangeLogElements";

const FirmwareChangeLog = () => {
	const [changelog, setChangelog] = useState([]);

	useEffect(() => {
		getFirmwareChangelog().then((response) => {
			const sortedChangelog = response.data.sort(
				(a, b) => new Date(b.added_date) - new Date(a.added_date)
			);
			setChangelog(sortedChangelog);
		});
	}, []);

	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<Container>
			<Title>Firmware Changelog</Title>
			<Table>
				<thead>
					<TableRow>
						<TableHeader>Version</TableHeader>
						<TableHeader>Change Log</TableHeader>
						<TableHeader>Uploaded</TableHeader>
					</TableRow>
				</thead>
				<tbody>
					{changelog.map((log, index) => (
						<TableRow key={index}>
							<TableCell>{log.version}</TableCell>
							<TableCell>{log.change_log}</TableCell>
							<TableCell>{formatDate(log.added_date)}</TableCell>
						</TableRow>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default FirmwareChangeLog;
