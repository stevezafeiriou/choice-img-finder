import React from "react";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Login from "../components/Login";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ProtectedDashboardRender = () => {
	const { auth } = useAuth();

	if (!auth || !auth.token) {
		return (
			<HelmetProvider>
				<Helmet>
					<title>Login | Choice</title>
					<meta name="robots" content="noindex, nofollow" />
				</Helmet>
				<Header />
				<Login />
			</HelmetProvider>
		);
	}

	return (
		<HelmetProvider>
			<Helmet>
				<title>Dashboard | Choice</title>
				<meta name="robots" content="noindex, nofollow" />
			</Helmet>
			<Header />
			<Dashboard />
		</HelmetProvider>
	);
};

export default ProtectedDashboardRender;
