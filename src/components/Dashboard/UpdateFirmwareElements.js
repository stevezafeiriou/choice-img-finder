import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	border-radius: 5px;
	margin-bottom: 20px;
	font-size: 0.875rem;
	width: 100%;

	@media (max-width: 768px) {
		padding: 15px;
	}

	h2 {
		background-color: transparent;
		color: #ddd;
		font-weight: 500;
		margin: 10px 5px;
		text-align: left;
		font-size: 1rem;
		margin-bottom: 30px;

		@media (max-width: 768px) {
			font-size: 0.9rem;
			margin-bottom: 20px;
		}
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const FormGroup = styled.div`
	margin-bottom: 15px;
`;

export const Input = styled.input`
	border: 1px solid #2b2e2c;
	padding: 10px;
	margin: 10px 5px;
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
		font-size: 0.75rem;
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	border: 1px solid #2b2e2c;
	padding: 10px;
	margin: 10px 5px;
	font-size: 0.875rem;
	transition: all 0.25s ease-in-out;
	background-color: #000;
	color: #fff;
	resize: vertical;

	&:focus {
		outline: none;
		box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
		border-color: #007bff;
	}

	@media (max-width: 768px) {
		padding: 8px;
		margin: 5px 2px;
		font-size: 0.75rem;
	}
`;

export const Button = styled.button`
	width: 100%;
	border: 1px solid #ddd;
	padding: 10px;
	margin: 10px 5px;
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

export const ErrorMessage = styled.p`
	color: ${(props) => (props.color.startsWith("Success") ? "green" : "red")};
	font-size: 0.9rem;

	@media (max-width: 768px) {
		font-size: 0.75rem;
		margin: 5px 2px;
	}
`;
