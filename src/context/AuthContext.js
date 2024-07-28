import React, { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Correctly import jwtDecode

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(null);

	useEffect(() => {
		const storedAuth = localStorage.getItem("auth");
		if (storedAuth) {
			const authData = JSON.parse(storedAuth);
			if (isTokenExpired(authData.token)) {
				localStorage.removeItem("auth");
			} else {
				setAuth(authData);
			}
		}
	}, []);

	const saveAuth = (authData) => {
		setAuth(authData);
		// localStorage.setItem("auth", JSON.stringify(authData));
	};

	const isTokenExpired = (token) => {
		const decoded = jwtDecode(token);
		const currentTime = Date.now() / 1000;
		return decoded.exp < currentTime;
	};

	// const refreshAuthToken = async () => {
	// 	try {
	// 		localStorage.removeItem("auth");
	// 		window.location.reload();
	// 		throw "Token Expired, Please Login Again";
	// 	} catch (error) {
	// 		localStorage.removeItem("auth");
	// 		window.location.reload();
	// 	}
	// };

	const reloadInformation = () => {
		localStorage.setItem("auth", JSON.stringify(auth));
		window.location.reload();
	};

	const logout = () => {
		setAuth(null);
		// localStorage.removeItem("auth");
	};

	return (
		<AuthContext.Provider
			value={{ auth, setAuth: saveAuth, logout, reloadInformation }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
