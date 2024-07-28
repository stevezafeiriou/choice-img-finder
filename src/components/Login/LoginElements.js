import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	min-height: 100vh;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const Title = styled.h2`
	background-color: transparent;
	color: #fff;
	font-weight: 600;
	margin: 10px 5px;
	text-align: left;
	font-size: 1rem;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		font-size: 0.9rem;
		margin-bottom: 20px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid #2b2e2c;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	box-shadow: 0 0 60px rgba(255, 255, 255, 0.18);
	width: 100%;
	max-width: 300px;

	@media (max-width: 768px) {
		padding: 15px;
	}
`;

export const FormGroup = styled.div`
	/* margin-bottom: 15px; */
`;

export const Label = styled.label`
	font-size: 0.875rem;
	color: #ddd;
	font-weight: 300;
	display: block;
	margin: 5px;
`;

export const Input = styled.input`
	border: 1px solid #2b2e2c;
	padding: 10px;
	margin: 10px 0;
	font-size: 0.875rem;
	width: 100%;
	color: #fff;
	background-color: #000;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	&:focus {
		outline: none;
		box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
		border-color: #007bff;
	}

	@media (max-width: 768px) {
		padding: 8px;
		margin: 5px 2px;
	}
`;

export const Button = styled.button`
	width: 100%;
	border: 1px solid #ddd;
	padding: 10px;
	margin: 10px 0;
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	background-color: #171616;
	color: #ddd;

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

	@media (max-width: 768px) {
		padding: 8px;
		margin: 5px 2px;
		font-size: 0.75rem;
	}
`;

export const ErrorMessage = styled.div`
	color: #ff0000;
	margin-bottom: 10px;
	margin-left: 5px;
	font-size: 0.875rem;

	@media (max-width: 768px) {
		font-size: 0.75rem;
		margin: 8px 0;
	}
`;
