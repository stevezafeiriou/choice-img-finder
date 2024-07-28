import styled from "styled-components";

export const AllImagesContainer = styled.div`
	width: 100%;

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

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	max-height: 600px;
	overflow-y: auto;
	font-size: 0.875rem;

	@media (max-width: 768px) {
		display: block;
		overflow-x: auto;
		white-space: nowrap;
	}
`;

export const TableHeader = styled.th`
	padding: 8px;
	background-color: #2b2e2c;
	color: #fff;
	font-weight: 500;
	text-align: left;
	border: 1px solid #2b2e2c;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);

	@media (max-width: 768px) {
		padding: 5px;
		font-size: 0.75rem;
	}
`;

export const TableRow = styled.tr`
	&:nth-child(even) {
		background-color: #2b2e2c;
	}
`;

export const TableCell = styled.td`
	padding: 8px 20px;
	border: 1px solid #2b2e2c;

	margin: 0 5px;

	img {
		border-radius: 8px;
		border: 1px solid #2b2e2c;
		max-width: 100%;
		height: 80px;
		transition: 0.25s all ease-in-out;
		margin-left: 10px;
		&:hover {
			border: 1px solid #ddd;
		}
	}

	@media (max-width: 768px) {
		padding: 5px;
		font-size: 0.75rem;
		word-wrap: break-word;
	}
`;

export const Button = styled.button`
	padding: 5px;
	margin: 10px;
	font-size: 0.875rem;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	border: 1px solid #dddddd;
	background-color: #171616;
	color: #dddddd;
	width: 100px;

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
`;

export const SearchInput = styled.input`
	width: 100%;
	border: 1px solid #2b2e2c;
	padding: 10px;
	margin: 10px 5px;
	font-size: 0.875rem;
	transition: all 0.25s ease-in-out;
	background-color: #000;
	color: #fff;

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

export const Select = styled.select`
	width: 100%;
	border: 1px solid #2b2e2c;
	padding: 10px;
	margin: 10px 5px;
	font-size: 0.875rem;
	transition: all 0.25s ease-in-out;
	background-color: #000;
	color: #fff;

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
