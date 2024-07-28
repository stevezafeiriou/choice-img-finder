import React, { useEffect, useState } from "react";
import { getFirmwareData } from "../../../services/api";
import { Container, Title, StatWrapper, Stat } from "../FirmwareInfoElements";

const FirmwareInfo = () => {
	const [firmware, setFirmware] = useState({});

	useEffect(() => {
		getFirmwareData().then((response) => {
			setFirmware(response.data);
		});
	}, []);

	return (
		<Container>
			<Title>Firmware Information</Title>
			<StatWrapper>
				<Stat>
					v{firmware.version}{" "}
					<a href={firmware.file} target="_blank" rel="noopener noreferrer">
						Current Version
					</a>
				</Stat>
			</StatWrapper>
		</Container>
	);
};

export default FirmwareInfo;
