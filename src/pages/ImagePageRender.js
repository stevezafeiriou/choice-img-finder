import React from "react";
import ImagePage from "../components/ImagePage";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
			<ImagePage />
		</HelmetProvider>
	);
};

export default ImagePageRender;
