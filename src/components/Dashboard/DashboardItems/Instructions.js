import React from "react";
import {
	Container,
	Title,
	InstructionSection,
	InstructionText,
} from "../InstructionElements";

const Instructions = () => {
	return (
		<Container>
			<Title>Instructions</Title>
			<InstructionSection>
				<InstructionText>
					<strong>Overview Cards:</strong> This section provides a quick glance
					at the total number of images, devices, and subscribers. Use these
					cards to get an overview of the current status.
				</InstructionText>
			</InstructionSection>
			<InstructionSection>
				<InstructionText>
					<strong>Firmware Information:</strong> Here, you can view the current
					firmware version and its changelog. Use the "Update Firmware" card to
					upload a new firmware version and its changelog.
				</InstructionText>
			</InstructionSection>
			<InstructionSection>
				<InstructionText>
					<strong>Subscriber Management:</strong> This section includes the list
					of all subscribers and tools to manage subscriptions. Use the
					"Subscription Manager" to add or update subscriptions.
				</InstructionText>
			</InstructionSection>
			<InstructionSection>
				<InstructionText>
					<strong>Device Management:</strong> View and manage registered
					devices. Use the "Update Registered Devices" card to add new devices
					or update existing ones.
				</InstructionText>
			</InstructionSection>
			<InstructionSection>
				<InstructionText>
					<strong>Image Data Management:</strong> View and manage all image
					data. This section provides a detailed list of images that can be
					validated or deleted as needed.
				</InstructionText>
			</InstructionSection>
		</Container>
	);
};

export default Instructions;
