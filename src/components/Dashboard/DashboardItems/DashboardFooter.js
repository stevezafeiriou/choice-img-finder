import React from "react";
import { FooterNav, Logo } from "../DashboardFooterElements";
import { useAuth } from "../../../context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const DashboardFooter = () => {
	const { auth } = useAuth();

	return (
		<FooterNav>
			<Logo>
				<p>{auth.user_email}</p>
			</Logo>
		</FooterNav>
	);
};

export default DashboardFooter;
