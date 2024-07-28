import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePageRender = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Introduction | Choice</title>
				<meta
					name="description"
					content="Information about Choice - interactive sculpture. Read about the Artistic Research, Documentation & more."
				/>
			</Helmet>
			<Header />
			<Home />
		</HelmetProvider>
	);
};

export default HomePageRender;
