import React, { useEffect, useState } from "react";
import { getSurveyResponses } from "../../../services/api";
import {
	Container,
	Title,
	Stat,
	StatWrapper,
} from "../SurveryResponsesElements";
import { useAuth } from "../../../context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const SurveyResponses = () => {
	const [totalSurveys, setTotalSurveys] = useState(0);
	const [totalAnswers, setTotalAnswers] = useState(0);
	const { auth, refreshAuthToken } = useAuth();

	const isTokenExpired = (token) => {
		const decoded = jwtDecode(token);
		const currentTime = Date.now() / 1000;
		return decoded.exp < currentTime;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Refresh the token if expired
				if (isTokenExpired(auth.token)) {
					await refreshAuthToken();
				}

				const data = await getSurveyResponses(auth.token);

				// Calculate total surveys and total answers
				const uniqueSurveys = Object.keys(data).length;
				const totalSurveyAnswers = Object.values(data).reduce(
					(total, responses) => total + responses.length,
					0
				);

				setTotalSurveys(uniqueSurveys);
				setTotalAnswers(totalSurveyAnswers);
			} catch (error) {
				console.error("Failed to fetch survey data", error);
				toast.error("Failed to fetch survey data.");
			}
		};

		fetchData();
	}, [auth, refreshAuthToken]);

	return (
		<Container>
			<Title>Survey Responses</Title>
			<StatWrapper>
				<Stat>
					{totalSurveys} <span>Unique Surveys</span>
				</Stat>
				<Stat>
					{totalAnswers} <span>Total Answers</span>
				</Stat>
			</StatWrapper>
		</Container>
	);
};

export default SurveyResponses;
