import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	border-radius: 5px;
	margin-bottom: 20px;
	max-height: 300px;
	overflow-y: auto;
	font-size: 0.875rem;
	width: 100%;

	@media (max-width: 768px) {
		padding: 15px;
		max-height: 200px;
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
	text-align: left;

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
	padding: 8px;
	border: 1px solid #2b2e2c;

	@media (max-width: 768px) {
		padding: 5px;
		font-size: 0.75rem;
		word-wrap: break-word;
	}
`;
