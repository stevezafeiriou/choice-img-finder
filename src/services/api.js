import axios from "axios";

const apiBaseURL = process.env.REACT_APP_API_BASE_URL;
const authApiBaseURL = process.env.REACT_APP_AUTH_API_BASE_URL;

const api = axios.create({
	baseURL: apiBaseURL,
	withCredentials: true,
});

const authApi = axios.create({
	baseURL: authApiBaseURL,
	withCredentials: true,
});

export const updateDonationStatus = async (email, token) => {
	const url = `${apiBaseURL}/subscribe/donation/update`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await api.post(url, { email }, config);
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error;
	}
};

// Fetch collected images for a user
export const getCollectedImages = async (email) => {
	try {
		const url = `${apiBaseURL}/collected`;
		const response = await api.get(url, {
			params: { email },
		});

		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error;
	}
};

// Get Sub List
export const getSubscriberList = async (token) => {
	const url = `/subscribe/list`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await api.get(url, config); // Use api instance
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error;
	}
};

// Firmware upload function with JWT token
export const uploadNewFirmwareVersion = async (formData, token) => {
	const url = `${apiBaseURL}/firmware/upload`;

	const config = {
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.post(url, formData, config);
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error;
	}
};

// JWT Authentication function
export const getJwtForUser = async (username, password) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await authApi.post(
			"/jwt-auth/v1/token",
			{
				username,
				password,
			},
			config
		);
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error;
	}
};

// API functions with authentication
export const deleteImageById = async (id, token) => {
	const url = `/image-data/${id}`;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await api.delete(url, config); // Use api instance
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error;
	}
};

// New functions for registered devices endpoint
export const getAllDevices = async (token) => {
	const url = `${apiBaseURL}/devices`;

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// };

	try {
		// const response = await axios.get(url, config);
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error;
	}
};

export const registerNewDevice = async (deviceData, token) => {
	const url = `${apiBaseURL}/devices`;

	const config = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await axios.post(url, deviceData, config);
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error;
	}
};

// Other API functions without authentication
export const getAllImages = () => api.get("/image-data");
export const getImageById = (id) => api.get(`/image-data/${id}`);
export const validateImage = (id) => api.post("/image-data/validate", { id });
export const getRecentUnvalidatedImages = () =>
	api.get("/recent-unvalidated-images");
export const subscribeUser = (data) => api.post("/subscribe", data);
export const updateSubscription = (data) => api.put("/subscribe", data);
export const getFirmwareData = () => api.get("/firmware");
export const getFirmwareChangelog = () => api.get("/firmware/changelog");
export const getTotalDevices = () => api.get("/devices/total");
export const logoImage =
	"https://stevezafeiriou.com/wp-content/uploads/2024/07/choice-logo.png";
export const collectionCover =
	"https://stevezafeiriou.com/wp-content/uploads/2024/06/newsletter-scaled.jpg";
