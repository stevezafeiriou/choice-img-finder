import React from "react";
import styled from "styled-components";

const AnswerButton = styled.button`
	border: 1px solid #dddddd;
	padding: 10px 15px;
	margin: 15px 0;
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	background-color: #171616;
	color: #dddddd;
	width: 100%;
	text-align: left;

	&:hover {
		background-color: #2b2e2c;
		color: white;
		border: 1px solid #171616;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 5px;
	}
`;

const Answer = ({ text, onClick }) => {
	return <AnswerButton onClick={onClick}>{text}</AnswerButton>;
};

export default Answer;
