import React from "react";
import Editions from "../components/Editions";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

const EditionsPageRender = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Editions | Choice</title>
				<meta
					name="description"
					content="Sculpture Editions Choice - interactive sculpture. Check your sculpture edition and downlaod your COA."
				/>
			</Helmet>
			<Header />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Editions />
			</motion.div>
		</HelmetProvider>
	);
};

export default EditionsPageRender;
