import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	width: 100%;

	@media (max-width: 768px) {
		padding: 15px;
	}
`;

export const Title = styled.h2`
	color: #ddd;
	font-weight: 500;
	margin: 10px 5px;
	text-align: center;
	font-size: 1rem;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		font-size: 0.9rem;
		margin-bottom: 15px;
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
	color: orange;
	margin: 10px;

	@media (max-width: 768px) {
		font-size: 1.5em;
		margin: 5px;

		span {
			font-size: 0.7rem;
		}
	}

	span {
		font-weight: 400;
		font-size: 0.758rem;
		color: gray;
		margin-top: 10px;
	}
`;

export const PieContainer = styled.div`
	width: 200px;
	height: 200px;
	margin: 0 auto;

	@media (max-width: 768px) {
		width: 200px;
		height: 200px;
	}
`;
