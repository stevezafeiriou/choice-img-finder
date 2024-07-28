import React, { useEffect, useState } from "react";
import { getAllImages } from "../../../services/api";
import { Container, Title, Stat, StatWrapper } from "../TotalImagesElements";
import { Bar } from "react-chartjs-2";

const TotalImages = () => {
	const [totalImages, setTotalImages] = useState(0);
	const [totalValidated, setTotalValidated] = useState(0);
	const [totalUnvalidated, setTotalUnvalidated] = useState(0);

	useEffect(() => {
		getAllImages().then((response) => {
			const images = response.data;
			const validated = images.filter(
				(image) => image.validated === "1"
			).length;
			const unvalidated = images.filter(
				(image) => image.validated === "0"
			).length;

			setTotalImages(images.length);
			setTotalValidated(validated);
			setTotalUnvalidated(unvalidated);
		});
	}, []);

	const data = {
		labels: ["Total Images", "Validated", "Unvalidated"],
		datasets: [
			{
				label: "Images Count",
				data: [totalImages, totalValidated, totalUnvalidated],
				backgroundColor: ["yellow", "yellow", "yellow"],
				// borderColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
				borderWidth: 0,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<Container>
			<Title>Total Images</Title>
			<Bar data={data} options={options} />
			<StatWrapper>
				<Stat>
					<span>{totalImages} T</span>
				</Stat>
				<Stat>
					<span> {totalValidated} V</span>
				</Stat>
				<Stat>
					<span>{totalUnvalidated} U</span>
				</Stat>
			</StatWrapper>
		</Container>
	);
};

export default TotalImages;
