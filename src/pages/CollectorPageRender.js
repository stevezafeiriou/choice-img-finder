import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Collector from "../components/Collector";

const CollectorPageRender = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Collector Page | Choice</title>
				<meta
					name="description"
					content="Collector page showing collected images."
				/>
			</Helmet>
			<Header />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Collector />
			</motion.div>
		</HelmetProvider>
	);
};

export default CollectorPageRender;
