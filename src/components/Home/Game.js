import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Question from "./Question";
import ArtworkInfo from "./ArtworkInfo";
import { questionsData } from "./questions";
import { submitSurvey } from "../../services/api";

const Game = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showInitialContent, setShowInitialContent] = useState(false);
	const [collectedAnswers, setCollectedAnswers] = useState([]);
	const [surveyUuid, setSurveyUuid] = useState("");

	useEffect(() => {
		const newUuid = uuidv4();
		setSurveyUuid(newUuid); // Generate and store the UUID when the component mounts
	}, []);

	const handleAnswerClick = (nextQuestion, selectedAnswer) => {
		const updatedAnswers = [
			...collectedAnswers,
			{ questionId: currentQuestion, answer: selectedAnswer },
		];
		setCollectedAnswers(updatedAnswers);

		if (nextQuestion >= 0 && nextQuestion < questionsData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowInitialContent(true);
			submitSurvey(updatedAnswers, surveyUuid)
				.then((response) => {
					console.log("Survey submitted successfully:", response);
				})
				.catch((error) => {
					console.error("Error submitting survey:", error);
				});
		}
	};

	if (showInitialContent) {
		return <ArtworkInfo />;
	}

	if (!questionsData[currentQuestion]) {
		return <div>Error: Invalid question index.</div>;
	}

	return (
		<div>
			<Question
				question={questionsData[currentQuestion].question}
				answers={questionsData[currentQuestion].answers}
				onAnswerClick={(nextQuestion) =>
					handleAnswerClick(
						nextQuestion,
						questionsData[currentQuestion].question
					)
				}
			/>
		</div>
	);
};

export default Game;
