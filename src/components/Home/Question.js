import React from "react";
import styled from "styled-components";
import Answer from "./Answer";
import { logoImage } from "../../services/api";

const QuestionContainer = styled.div`
	margin: 20px 0;
	img {
		width: 100%;
		height: auto;
		max-width: 80px;
		margin: 5px 0;

		object-fit: contain;
		-o-object-fit: contain;
	}

	.flex-wrap {
		display: flex;
		justify-content: start;
		button {
			margin: 5px;
		}
	}
`;

const QuestionText = styled.h2`
	color: #fff;
	margin-bottom: 15px;
	font-size: 1.2rem;
	font-weight: 400;
	background-color: transparent;
`;

const Question = ({ question, answers, onAnswerClick }) => {
	return (
		<QuestionContainer>
			<img src={logoImage} alt="choice-generation-logo" />
			<QuestionText>{question}</QuestionText>
			<div className="flex-wrap">
				{answers.map((answer, index) => (
					<Answer
						key={index}
						text={answer.text}
						onClick={() => onAnswerClick(answer.nextQuestion)}
					/>
				))}
			</div>
		</QuestionContainer>
	);
};

export default Question;
