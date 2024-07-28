// src/Home.js
import React, { useState } from "react";
import { HomeContainer, InfoCardContainer, InfoCard } from "./HomeElements";
import Research from "./Research";
import Documentation from "./Documentation";
import { logoImage } from "../../services/api";

const Home = () => {
	const [showResearch, setShowResearch] = useState(false);
	const [showDocs, setShowDocs] = useState(false);

	const handleResearch = () => {
		setShowResearch(!showResearch);
	};

	const handleDocs = () => {
		setShowDocs(!showDocs);
	};

	const handleExternalLinkClick = (event) => {
		event.preventDefault();
		const userConfirmed = window.confirm(
			"You will be redirected to an external page: Terms of Service (www.saphirelabs.com)."
		);
		if (userConfirmed) {
			window.location.href = "https://saphirelabs.com/terms-of-service/";
		}
	};

	return (
		<HomeContainer>
			<InfoCardContainer>
				{showResearch ? (
					<Research handleResearch={handleResearch} />
				) : showDocs ? (
					<Documentation handleDocs={handleDocs} />
				) : (
					<InfoCard>
						<img src={logoImage} alt="choice-generation-logo" />
						<h2>Our Behaviour Shapes Our Reality</h2>
						<p>
							A collection of interactive sculptures that emphasizes the
							importance of cognitive, emotional, social, and cultural factors
							in shaping human behavior.
						</p>
						<p>
							<span>
								"Choices" are interactive sculptures capable of creating
								generative artworks based on real-time user acceleration
								detections. Once a new generative image is created, it is
								temporarily stored in a database for 15 minutes. The user can
								then choose to validate or discard their creation. Additionally,
								users have the option to save, print, or mint the image as an
								NFT on the Ethereum Blockchain.
							</span>
						</p>

						<p>
							In the work “Choice,” the correlations between small, consistent
							actions and significant life outcomes are examined, delving into
							the evolutionary and artistic dimensions of human behavior.
						</p>

						<div className="flex-wrap">
							<button onClick={handleResearch}>Research</button>
							<button onClick={handleDocs}>Documentation</button>
							<button onClick={handleExternalLinkClick}>
								Terms of Service
							</button>
						</div>

						<p style={{ fontSize: "0.75rem" }}>
							© 2024, Saphire Labs. All Rights Reserved.
						</p>
					</InfoCard>
				)}
			</InfoCardContainer>
		</HomeContainer>
	);
};

export default Home;
