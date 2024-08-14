import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AiOutlineEnter } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	HeaderNav,
	Logo,
	MobileIcon,
	NavMenu,
	NavLink,
	NavLinkExt,
	EmailInputContainer,
	EmailInputWrapper,
} from "./HeaderElements";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
	const { auth, logout, reloadInformation } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [showInput, setShowInput] = useState(false);
	const [email, setEmail] = useState("");

	let logoText = "Choice / Introduction";

	if (location.pathname === "/finder") {
		logoText = "Choice / Image Finder";
	} else if (location.pathname === "/change-log") {
		logoText = "Choice / Change Log";
	} else if (location.pathname === "/dashboard") {
		logoText = "Choice / [Admin] Dashboard";
	} else if (location.pathname.startsWith("/collector/")) {
		logoText = `Choice / Collector`;
	}

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = () => {
		logout();
		toast.success("You Logged out Successfully.");
	};

	const handleCollectorClick = () => {
		setShowInput(!showInput);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleEmailSubmit = (event) => {
		event.preventDefault();
		if (validateEmail(email)) {
			navigate(`/collector/${email}`);
			setShowInput(false);
			window.location.reload();
		} else {
			toast.error("Invalid email address");
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleEmailSubmit(event);
		}
	};

	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	return (
		<>
			<HeaderNav>
				<Logo>
					<Link to="/">{logoText}</Link>
				</Logo>
				<MobileIcon onClick={toggleMenu}>
					{isOpen ? <IoClose /> : <FaBars />}
				</MobileIcon>
				<NavMenu isOpen={isOpen}>
					<ul>
						<li>
							<NavLink
								to="/"
								className={location.pathname === "/" ? "active" : ""}
							>
								Introduction
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/finder"
								className={location.pathname === "/finder" ? "active" : ""}
							>
								Image Finder
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/change-log"
								className={location.pathname === "/change-log" ? "active" : ""}
							>
								Change Log
							</NavLink>
						</li>
						<li>
							<NavLink
								to="#"
								onClick={handleCollectorClick}
								className={
									location.pathname.startsWith("/collector/") ? "active" : ""
								}
							>
								Collector
							</NavLink>
						</li>
						<li>
							<NavLinkExt
								href="https://stevezafeiriou.com/links/"
								target="_blank"
							>
								Arist Info
							</NavLinkExt>
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
					<AnimatePresence>
						{showInput && (
							<EmailInputContainer
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
							>
								<EmailInputWrapper>
									<form onSubmit={handleEmailSubmit}>
										<input
											type="email"
											value={email}
											onChange={handleEmailChange}
											onKeyPress={handleKeyPress}
											placeholder="Enter email"
										/>
										<button
											type="submit"
											style={{ backgroundColor: "transparent", border: "none" }}
										>
											<AiOutlineEnter className="enter" />
										</button>
									</form>
								</EmailInputWrapper>
							</EmailInputContainer>
						)}
					</AnimatePresence>
				</NavMenu>
			</HeaderNav>
		</>
	);
};

export default Header;
