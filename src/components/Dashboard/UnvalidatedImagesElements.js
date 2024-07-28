import styled from "styled-components";

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const TableHeader = styled.th`
	padding: 8px;
	background-color: #343a40;
	color: #fff;
`;

export const TableRow = styled.tr`
	&:nth-child(even) {
		background-color: #f2f2f2;
	}
`;

export const TableCell = styled.td`
	padding: 8px;
	border: 1px solid #ddd;
`;
