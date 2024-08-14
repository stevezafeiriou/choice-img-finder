import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeaderNav = styled.div`
	display: flex;
	height: 60px; /* Set an appropriate height */
	width: 100%;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0; /* Position at the top of the page */
	right: 0;
	left: 0;
	z-index: 999;

	backdrop-filter: blur(10px); /* Apply blur effect */
	-webkit-backdrop-filter: blur(10px); /* Safari support */

	padding: 0 20px;
`;

export const Logo = styled.div`
	margin-left: 20px;
	a {
		font-size: 0.857rem;
		font-weight: 500;
		color: #ddd;
		padding: 0 10px;
		background-color: transparent;
		text-decoration: none;
		transition: 0.2s all ease-in-out;
		cursor: pointer;
		&:hover {
			color: #fff;
		}
	}

	@media (max-width: 768px) {
		padding: 0 5px;
		font-size: 0.758rem;
	}
`;

export const Menu = styled.div`
	margin-right: 20px;

	ul {
		display: flex;
		width: 100%;

		li {
			list-style-type: none;
			font-size: 0.857rem;
			a {
				padding: 10px;
				margin: 10px 0;
				text-decoration: none;
				color: #ddd;
				transition: 0.25s all ease-in-out;

				&:hover {
					background-color: #2b2e2c;
					color: #fff;
				}
			}

			button {
				background-color: transparent;
				border: none;
				margin-left: 10px;
				text-decoration: underline;
				color: orange;
				transition: 0.25s all ease-in-out;
				cursor: pointer;
				&:hover {
					color: #fff;
				}
			}
		}
	}

	@media (max-width: 768px) {
		li {
			a,
			button {
				font-size: 0.758rem;
				padding: 10px;
			}
		}
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
		font-size: 1.1rem;
		cursor: pointer;
		color: #ddd;
	}
`;

export const NavMenu = styled(Menu)`
	@media (max-width: 768px) {
		display: ${({ isOpen }) => (isOpen ? "block" : "none")};
		position: absolute;
		top: 60px;
		left: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 1);

		ul {
			flex-direction: column;

			li {
				text-align: left;
				margin: 10px 0;

				a {
					font-size: 0.758rem;
					padding: 10px 0;
					color: #fff;
					margin-left: 60px;
					text-align: left;
					&:hover {
						color: #ddd;
					}
				}
				button {
					font-size: 0.758rem;
					padding: 10px 0;
					color: orange;
					margin-left: 60px;
					text-align: left;
					&:hover {
						color: #ddd;
					}
				}
			}
		}
	}
`;

export const NavLink = styled(Link)`
	color: #ddd;
	&.active {
		color: orange;
	}
`;
export const NavLinkExt = styled.a`
	color: #ddd;
	&.active {
		color: orange;
	}
`;

export const EmailInputContainer = styled(motion.div)`
	width: 100%;
	background: transparent;
	position: fixed;
	top: 60px;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 998;
	padding: 10px 0;

	@media (max-width: 768px) {
		position: relative;
		top: 0;
	}
`;

export const EmailInputWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.758rem;
	form {
		display: flex;
		justify-content: center;
		align-items: center;
		input {
			padding: 15px 15px;
			width: 200px;
			border: none;
			background-color: #2b2d2c;
			color: #ddd;
			border-bottom: 1px solid #fff;
		}

		.enter {
			font-size: 2.5rem;
			padding: 10px;
			color: #ddd;
			cursor: pointer;
			transition: all 0.2s ease-in-out;

			&:hover {
				color: orange;
			}
		}
	}
`;
