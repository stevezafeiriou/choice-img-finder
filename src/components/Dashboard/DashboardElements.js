import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	min-height: 100vh;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-top: 50px;
`;

export const InfoContainer = styled.div`
	z-index: 9999;
	svg {
		font-size: 2rem;
		cursor: pointer;
		color: #ddd;
		padding: 5px;
		border-radius: 50%;
		transition: 0.25s all ease-in-out;

		&:hover {
			background-color: #2b2e2c;
			color: #fff;
		}
	}
`;

export const Row = styled.div`
	display: ${(props) => (props.opened ? "flex" : "none")};
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	max-width: 1200px;
	margin-bottom: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const Card = styled.div`
	padding: 20px;
	margin: 10px;
	flex: 1;
	min-width: 280px;
	border: 1px solid #2b2e2c;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	box-shadow: 0 0 40px rgba(255, 255, 255, 0.13);

	@media (max-width: 768px) {
		width: 100%;
		margin: 10px 0;
	}
`;
