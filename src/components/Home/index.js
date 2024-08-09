// src/Home.js
import React from "react";
import { HomeContainer, InfoCardContainer, InfoCard } from "./HomeElements";
import { logoImage } from "../../services/api";

const Home = () => {
	return (
		<HomeContainer>
			<InfoCardContainer>
				<InfoCard>
					<img src={logoImage} alt="choice-generation-logo" />
					<h2>Our Behaviour Shapes Our Reality</h2>
					<p>
						“Choice” is a multidimensional interactive artwork from the
						collection “Our Behaviour Shapes Our Reality,” merging Darwinian
						evolutionary theory with data-driven art. This piece employs an
						ESP32 microcontroller, gyroscope, and accelerometer sensors to
						capture viewer movements, which are then used to autonomously
						generate the digital art displayed. <br /> <br />
						The core concept of “Choice” revolves around the idea that small,
						consistent actions can lead to significant evolutionary changes over
						time. By engaging with the artwork, viewers experience firsthand how
						their movements—representing choices—dynamically alter the visual
						output, creating a constantly evolving piece that reflects the
						interplay between individual behavior and collective reality.
					</p>
					<p>
						<span>
							Once a new generative image is created, it is temporarily stored
							in a database for 15 minutes. The user can then choose to validate
							or discard their creation. Additionally, users have the option to
							save, print, or mint the image as an NFT on the Ethereum
							Blockchain.
						</span>
					</p>

					<p>
						This process not only highlights the evolutionary principle of
						adaptation but also emphasizes the impact of incremental choices in
						shaping both personal and communal experiences. The artwork stands
						as a testament to the profound connection between motion,
						decision-making, and the continuous development of life and art.{" "}
						<br /> <br />
						As viewers interact with “Choice,” they become active participants
						in the artistic process, their physical gestures feeding into the
						algorithmic patterns that define the visual narrative. This
						interaction transforms the artwork into a living entity, one that
						evolves in real-time and underscores the significance of each choice
						made within its immersive environment.
					</p>

					<div className="flex-wrap">
						<button>
							<a
								href="https://stevezafeiriou.com/works/choice/"
								target="_blank"
								rel="noreferrer"
							>
								View Artwork
							</a>
						</button>
						<button>
							<a
								href="https://stevezafeiriou.com/essays/incorporating-darwinian-theory-with-data-driven-art/"
								target="_blank"
								rel="noreferrer"
							>
								View Research
							</a>
						</button>
						<button>
							<a
								href="https://saphirelabs.com/terms-of-service/"
								target="_blank"
								rel="noreferrer"
							>
								Terms of Service
							</a>
						</button>
					</div>

					<p style={{ fontSize: "0.75rem" }}>
						© 2024, Saphire Labs. All Rights Reserved.
					</p>
				</InfoCard>
			</InfoCardContainer>
		</HomeContainer>
	);
};

export default Home;
