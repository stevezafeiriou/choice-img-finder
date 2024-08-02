import styled from "styled-components";

export const FooterNav = styled.div`
	display: flex;
	height: 60px; /* Set an appropriate height */
	width: 100%;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0; /* Position at the top of the page */
	right: 0;
	left: 0;
	z-index: 999;
	padding: 0 20px;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Logo = styled.div`
	margin: 0 20px;
	a {
		font-size: 0.857rem;
		padding: 10px;
		text-decoration: none;
		color: orange;
		transition: 0.25s all ease-in-out;
		&:hover {
			background-color: #2b2e2c;
			color: #fff;
		}
	}
	p {
		font-size: 0.857rem;
		padding: 10px;
		text-decoration: none;
		color: orange;
		transition: 0.25s all ease-in-out;
	}

	@media (max-width: 768px) {
		padding: 0 5px;
		font-size: 0.758rem;
	}
`;
