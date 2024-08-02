import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 20px;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		padding: 15px;
	}
`;

export const Title = styled.h2`
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
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-size: 0.875rem;
	max-height: 600px;
	overflow-y: auto;
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
	@media (max-width: 768px) {
		padding: 5px;
		font-size: 0.75rem;
		word-wrap: break-word;
	}
`;

export const InnerTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	font-size: 0.875rem;
	background-color: #2b2e2c;
`;

export const InnerTableRow = styled.tr`
	&:nth-child(even) {
		background-color: #3a3a3a;
	}
`;

export const InnerTableCell = styled.td`
	padding: 5px;
	border: 1px solid #3a3a3a;
	color: #ddd;
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
