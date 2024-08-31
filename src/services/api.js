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
	try {
		const response = await api.post(
			"/subscribe/donation/update",
			{ email },
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const getCollectedImages = async (email) => {
	try {
		const response = await api.get("/collected", { params: { email } });
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const getSubscriberList = async (token) => {
	try {
		const response = await api.get("/subscribe/list", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const uploadNewFirmwareVersion = async (formData, token) => {
	try {
		const response = await api.post("/firmware/upload", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const getJwtForUser = async (username, password) => {
	try {
		const response = await authApi.post("/jwt-auth/v1/token", {
			username,
			password,
		});
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const deleteImageById = async (id, token) => {
	try {
		const response = await api.delete(`/image-data/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const getAllDevices = async () => {
	try {
		const response = await api.get("/devices");
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const registerNewDevice = async (deviceData, token) => {
	try {
		const response = await api.post("/devices", deviceData, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const getSurveyResponses = async (token) => {
	try {
		const response = await api.get("/get-surveys", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const getAllImages = () => api.get("/image-data");
export const getImageById = (id) => api.get(`/image-data/${id}`);
export const validateImage = async (id, email) => {
	try {
		const response = await api.post("/image-data/validate", { id, email });
		return response.data;
	} catch (error) {
		console.error("API Error during validation:", error);
		throw error.response ? error.response.data : error.message;
	}
};
export const getRecentUnvalidatedImages = () =>
	api.get("/recent-unvalidated-images");
export const subscribeUser = (data) => api.post("/subscribe", data);
export const updateSubscription = (data) => api.put("/subscribe", data);
export const getFirmwareData = () => api.get("/firmware");
export const getFirmwareChangelog = () => api.get("/firmware/changelog");
export const getTotalDevices = () => api.get("/devices/total");
export const submitSurvey = async (answers, uuid) => {
	try {
		const response = await api.post("/survey-responses", {
			uuid, // Ensure uuid is sent correctly
			answers, // Ensure answers array is sent correctly
		});
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error.response ? error.response.data : error.message;
	}
};

export const logoImage =
	"https://stevezafeiriou.com/wp-content/uploads/2024/07/choice-logo.png";
export const collectionCover =
	"https://stevezafeiriou.com/wp-content/uploads/2024/06/newsletter-scaled.jpg";
