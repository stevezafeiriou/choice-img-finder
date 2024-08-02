import React from "react";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Login from "../components/Login";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

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
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Login />
				</motion.div>
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
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Dashboard />
			</motion.div>
		</HelmetProvider>
	);
};

export default ProtectedDashboardRender;
