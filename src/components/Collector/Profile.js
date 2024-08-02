import React, { useState, useEffect } from "react";
import {
	ProfileCard,
	ProfileInfo,
	BadgesContainer,
	BadgeIcon,
	Tooltip,
} from "./CollectorElements";
import { ColorBadge, EditionBadge, DonationBadge } from "./OGBadge";

const Profile = ({ loading, email, rank, images, donated }) => {
	const [tooltip, setTooltip] = useState({ show: false, content: "" });
	const [dominantColor, setDominantColor] = useState("#d44e96"); // default color

	useEffect(() => {
		if (images.length > 0) {
			const colorCounts = {};
			images.forEach((image) => {
				image.attributes.forEach((attr) => {
					if (
						attr.trait_type.startsWith("Color") &&
						attr.trait_type !== "Color #000000" &&
						attr.trait_type !== "Color #ffffff"
					) {
						const color = attr.trait_type.split(" ")[1];
						colorCounts[color] = (colorCounts[color] || 0) + 1;
					}
				});
			});

			const mostFrequentColor = Object.keys(colorCounts).reduce(
				(a, b) => (colorCounts[a] > colorCounts[b] ? a : b),
				"#d44e96"
			);
			setDominantColor(mostFrequentColor);
		}
	}, [images]);

	const handleMouseEnter = (content) => {
		setTooltip({ show: true, content });
	};

	const handleMouseLeave = () => {
		setTooltip({ show: false, content: "" });
	};

	return (
		<ProfileCard>
			<ProfileInfo>
				<BadgesContainer>
					<BadgeIcon
						onMouseEnter={() =>
							handleMouseEnter("You get this Badge from your generated Images.")
						}
						onMouseLeave={handleMouseLeave}
					>
						<ColorBadge active={images.length > 0} color={dominantColor} />
					</BadgeIcon>
					<BadgeIcon
						onMouseEnter={() =>
							handleMouseEnter("You get this Badge by Owning a Sculpture.")
						}
						onMouseLeave={handleMouseLeave}
					>
						<EditionBadge active={false} />
					</BadgeIcon>
					<BadgeIcon
						onMouseEnter={() =>
							handleMouseEnter("You get this Badge by Donating to the project.")
						}
						onMouseLeave={handleMouseLeave}
					>
						<DonationBadge active={donated} />
					</BadgeIcon>
				</BadgesContainer>
				{tooltip.show && <Tooltip>{tooltip.content}</Tooltip>}
				<h2>{loading ? `fetching user` : email}</h2>
				<p style={{ margin: "10px 5px", color: "gray" }}>RANK #{rank}</p>
			</ProfileInfo>
			{/* <ProfileImage src={profileImage} alt="Profile Image" /> */}
		</ProfileCard>
	);
};

export default Profile;
