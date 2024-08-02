import React from "react";
import ChangeLog from "../components/ChangeLog";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

const ChangeLogRender = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Changelog | Choice</title>
				<meta
					name="description"
					content="A page to check firmware updates of choice - interactive sculpture."
				/>
			</Helmet>
			<Header />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<ChangeLog />
			</motion.div>
		</HelmetProvider>
	);
};

export default ChangeLogRender;
