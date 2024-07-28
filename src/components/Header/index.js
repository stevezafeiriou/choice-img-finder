import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
	HeaderNav,
	Logo,
	MobileIcon,
	NavMenu,
	NavLink,
} from "./HeaderElements";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
	const { auth, logout, reloadInformation } = useAuth();

	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	let logoText = "Choice / Introduction";

	if (location.pathname === "/finder") {
		logoText = "Choice / Image Finder";
	} else if (location.pathname === "/change-log") {
		logoText = "Choice / Change Log";
	} else if (location.pathname === "/dashboard") {
		logoText = "Choice / [Admin] Dashboard";
	}

	const handleExternalLinkClick = (event) => {
		event.preventDefault();
		const userConfirmed = window.confirm(
			"You will be redirected to Artist's Instagram, follow him. It's free:)"
		);
		if (userConfirmed) {
			window.location.href = event.currentTarget.href;
		}
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = () => {
		logout();
		toast.success("You Logged out Successfully.");
	};

	return (
		<HeaderNav>
			<Logo>
				<a href="/">{logoText}</a>
			</Logo>
			<MobileIcon onClick={toggleMenu}>
				{isOpen ? <IoClose /> : <FaBars />}
			</MobileIcon>
			<NavMenu isOpen={isOpen}>
				<ul>
					<li>
						<NavLink
							href="/"
							className={location.pathname === "/" ? "active" : ""}
						>
							Introduction
						</NavLink>
					</li>
					<li>
						<NavLink
							href="/finder"
							className={location.pathname === "/finder" ? "active" : ""}
						>
							Image Finder
						</NavLink>
					</li>
					<li>
						<NavLink
							href="/change-log"
							className={location.pathname === "/change-log" ? "active" : ""}
						>
							Change Log
						</NavLink>
					</li>
					<li>
						<NavLink
							href="https://instagram.com/superkid.me"
							onClick={handleExternalLinkClick}
						>
							Instagram
						</NavLink>
					</li>
					{auth !== null ? (
						<>
							<li>
								<button onClick={reloadInformation}>Refresh</button>
							</li>
							<li>
								<button onClick={handleLogout}>Logout</button>
							</li>
						</>
					) : null}
				</ul>
			</NavMenu>
		</HeaderNav>
	);
};

export default Header;
