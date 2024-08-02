import React from "react";
import ImagePage from "../components/ImagePage";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";

const ImagePageRender = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Image Finder | Choice</title>
				<meta
					name="description"
					content="A page to search generative images, created by choice - interactive sculpture."
				/>
			</Helmet>
			<Header />
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<ImagePage />
			</motion.div>
		</HelmetProvider>
	);
};

export default ImagePageRender;
