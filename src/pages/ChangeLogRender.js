import React from "react";
import ChangeLog from "../components/ChangeLog";
import Header from "../components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
			<ChangeLog />
		</HelmetProvider>
	);
};

export default ChangeLogRender;
