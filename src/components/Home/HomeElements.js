import styled from "styled-components";

export const HomeContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	align-items: center;
	justify-content: center;
	overflow: auto; /* Enable scrolling */
	padding: 10px;
	background-color: black;

	@media (max-width: 768px) {
		padding: 15px;
		justify-content: flex-start; /* Align items to the top */
	}
`;

export const InfoCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	background-color: black;
	margin: 20px;
	padding: 10px 20px;
	border: 1px solid #2b2e2c;
	box-shadow: 0 0 40px rgba(255, 255, 255, 0.17);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	width: 100%;
	max-width: 600px;
	margin-top: 70px;

	a {
		font-size: 0.785rem;

		max-width: 280px;
		text-align: center;
		color: #dddddd;

		margin-top: 10px;
	}

	@media (max-width: 768px) {
		max-width: 300px;
	}
`;

export const InfoCard = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	text-align: justify;

	img {
		width: 100%;
		height: auto;
		max-width: 80px;
		margin: 5px 0;

		object-fit: contain;
		-o-object-fit: contain;
	}

	h2 {
		background-color: transparent;
		color: #fff;
		font-weight: 500;
		margin: 10px 5px;
		font-size: 1.2rem;
	}

	p {
		font-size: 0.785rem;
		background-color: transparent;

		color: #fff;
		margin: 10px 5px;
		span {
			color: gray;
		}
	}

	button {
		border: 1px solid #dddddd;
		padding: 10px 15px;
		margin: 15px 0; /* Ensure consistent vertical margins */
		font-size: 0.758rem;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
		background-color: #171616;
		color: #dddddd;

		&:hover {
			background-color: ${(props) => (props.disabled ? "#171616" : "#2b2e2c")};
			color: ${(props) => (props.disabled ? "white" : "white")};
			border: ${(props) =>
				props.disabled ? "1px solid #2b2e2c" : "1px solid #171616"};
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
			background-color: transparent;
			color: #dddddd;
			border: 1px solid #dddddd;
		}
	}

	.flex-wrap {
		display: flex;
		justify-content: start;
		button {
			margin: 5px;
		}
	}

	@media (max-width: 768px) {
		input,
		select {
			padding: 8px;
			margin: 8px 4px;
		}

		h2 {
			font-size: 0.875rem;
		}

		p {
			font-size: 0.75rem;
		}

		button {
			width: 100%;
			padding: 5px;
			margin: 4px 0; /* Ensure consistent vertical margins */
		}
	}
`;

export const DocumentationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: black;
	color: white;
	padding: 20px;
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	font-size: 0.785rem;
	text-align: justify;
	line-height: 1.25;

	strong {
		text-decoration: underline;
		margin: 5px 0;
		font-weight: 600;
	}

	button {
		width: 30%;
		border: 1px solid #dddddd;
		padding: 10px 15px;
		margin: 15px 0; /* Ensure consistent vertical margins */
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
		background-color: #171616;
		color: #dddddd;

		&:hover {
			background-color: ${(props) => (props.disabled ? "#171616" : "#2b2e2c")};
			color: ${(props) => (props.disabled ? "white" : "white")};
			border: ${(props) =>
				props.disabled ? "1px solid #2b2e2c" : "1px solid #171616"};
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
			background-color: transparent;
			color: #dddddd;
			border: 1px solid #dddddd;
		}
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: #fff;
		font-weight: 500;
		margin: 10px 0;
	}

	a {
		color: #dc4c99;
	}

	p {
		margin-bottom: 10px;
	}

	pre {
		background-color: #2b2e2c;
		padding: 10px;
		border-radius: 5px;
		overflow-x: auto;
		width: 100%; /* Ensure the code snippets take up the full width */
		margin: 10px 0; /* Add some space below each snippet */
		white-space: pre-wrap; /* Ensure code wraps within the container */
		word-break: break-word; /* Break long words to prevent overflow */
	}

	code {
		background-color: #2b2e2c;
		color: #76dc4c;
		padding: 2px 4px;
		border-radius: 3px;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 20px;
	}

	th,
	td {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	th {
		background-color: #171616;
	}

	ol {
		text-align: left;
		margin: 15px;
	}

	li {
		list-style-type: none;
	}

	img {
		width: 100%;
		height: auto;
		max-width: 80px;
		margin: 5px 0;
		object-fit: contain;
		-o-object-fit: contain;
	}

	@media (max-width: 768px) {
		padding: 5px;

		.compilation {
			max-width: 240px;
			code {
				max-width: 280px;
			}
		}

		pre {
			max-width: 100%; /* Ensure the code snippets take up the full width */
		}
	}
`;
