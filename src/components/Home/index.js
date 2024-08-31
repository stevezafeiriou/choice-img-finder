import React, { useState } from "react";
import {
	HomeContainer,
	InfoCardContainer,
	NoticeContainer,
	NoticeButton,
} from "./HomeElements";
import Game from "./Game";
import ArtworkInfo from "./ArtworkInfo";

const Home = () => {
	const [view, setView] = useState("notice"); // notice | game | artwork

	const handleExploreClick = () => {
		setView("game");
	};

	const handleArtworkClick = () => {
		setView("artwork");
	};

	return (
		<HomeContainer>
			<InfoCardContainer>
				{view === "notice" && (
					<NoticeContainer>
						<p style={{ textAlign: "justify" }}>
							Your journey begins here, embedded in the heart of this artwork.{" "}
							<br />
							<span>Your choices shaping the path ahead.</span>
							If you proceed, your responses will be anonymous, contributing to
							the artist's research on Human Behavior.{" "}
							<span>This journey is defined by your decisions.</span>
						</p>
						<div className="flex-wrap">
							<NoticeButton onClick={handleExploreClick}>
								Explore the unknown
							</NoticeButton>
							<NoticeButton onClick={handleArtworkClick}>
								Learn about the Artwork
							</NoticeButton>
						</div>
					</NoticeContainer>
				)}
				{view === "game" && <Game />}
				{view === "artwork" && <ArtworkInfo />}
			</InfoCardContainer>
		</HomeContainer>
	);
};

export default Home;
