import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./GlobalStyles";
import HomePageRender from "./pages/HomePageRender";
import ImagePageRender from "./pages/ImagePageRender";
import ChangeLogRender from "./pages/ChangeLogRender";
import ProtectedDashboardRender from "./pages/ProtectedDashboardRender";
import CollectorPageRender from "./pages/CollectorPageRender";
import EditionsPageRender from "./pages/EditionsPageRender";

const App = () => {
	return (
		<>
			<GlobalStyle />
			<AuthProvider>
				<BrowserRouter>
					<ToastContainer
						toastClassName="custom-toast"
						bodyClassName="custom-toast-container"
						autoClose={3500}
						position="top-center"
					/>
					<Routes>
						<Route path="/" element={<HomePageRender />} exact />
						<Route path="/finder" element={<ImagePageRender />} exact />
						<Route path="/change-log" element={<ChangeLogRender />} />
						<Route path="/dashboard" element={<ProtectedDashboardRender />} />
						<Route path="/collector/:email" element={<CollectorPageRender />} />
						<Route path="/editions" element={<EditionsPageRender />} />
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
};

export default App;
