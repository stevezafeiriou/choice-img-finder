import styled from "styled-components";

export const TimelineContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	overflow: auto; /* Enable scrolling */
	padding: 10px;
	background-color: black;

	.flex-wrap {
		display: flex;
		justify-content: center;
		a {
			margin: 5px;
			color: white;
			font-size: 0.758em;
		}
	}

	@media (max-width: 768px) {
		padding: 15px;
		justify-content: flex-start; /* Align items to the top */
	}
`;

export const Timeline = styled.div`
	position: relative;
	max-width: 300px;
	margin: 0 auto;
	padding: 20px 0;
	margin-top: 50px;
	&:before {
		content: "";
		position: absolute;
		width: 1px;
		background: #2b2e2c;
		top: 0;
		bottom: 0;
		left: 20px;
	}
`;

export const Loading = styled.div`
	color: white;
	font-size: 0.758em;
	max-width: 300px;
`;

export const TimelineItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: justify;
	margin-bottom: 20px;
	position: relative;
	min-width: 200px;
`;

export const Dot = styled.div`
	width: 10px;
	height: 10px;
	background-color: ${(props) => (props.active === "true" ? "orange" : "#ddd")};
	border-radius: 50%;
	position: absolute;
	left: 16px;
	top: 0;
`;

export const TimelineContent = styled.div`
	padding: 10px 20px;
	position: relative;
	width: calc(100% - 40px);
	margin-left: 40px;

	box-shadow: 0 0 40px rgba(255, 255, 255, 0.17);
	border: 1px solid #2b2e2c;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	cursor: pointer;
	transition: 0.25s all ease-in-out;

	&:hover {
		background: #2b2e2c;
	}
`;

export const TimelineDate = styled.div`
	font-size: 0.758em;
	color: #ddd;
	margin-bottom: 10px;
`;

export const TimelineVersion = styled.div`
	font-size: 0.758em;
	color: orange;
	font-weight: 600;
	margin-bottom: 10px;
`;

export const TimelineLog = styled.div`
	font-size: 0.758em;
	color: #ddd;
	max-width: 300px;
`;
