import styled from "styled-components";

export const Container = styled.div`
	background-color: black;
	padding: 20px;
	margin-bottom: 20px;
	width: 100%;

	@media (max-width: 768px) {
		padding: 15px;
	}
`;

export const Title = styled.h2`
	background-color: transparent;
	color: #ddd;
	font-weight: 500;
	margin: 10px 5px;
	text-align: center;
	font-size: 1rem;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		font-size: 0.9rem;
		margin-bottom: 20px;
	}
`;

export const StatWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Stat = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2em;
	background-color: transparent;
	text-align: center;
	color: yellow;
	margin: 10px;

	@media (max-width: 768px) {
		font-size: 1.5em;
		margin: 5px;

		a {
			font-size: 0.7rem;
		}
	}

	a {
		font-weight: 400;
		font-size: 0.758rem;
		color: gray;
		text-decoration: none;
		margin-top: 10px;
		transition: 0.25s all ease-in-out;
		&:hover {
			color: yellow;
			text-decoration: underline;
		}
	}
`;
