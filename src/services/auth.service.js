import axios from "axios";
import jwt_decode from "jwt-decode";

const login = (userName,password) =>{
	const formBody = {
		userName: userName,
		password: password
	};
	// eslint-disable-next-line no-undef
	return axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,formBody).then((res) =>{
		if(res.data.accessToken){
			localStorage.setItem("user",JSON.stringify(res.data.accessToken));
		}

		return res.data;
	});
};

const logout = () => {
	localStorage.removeItem("user");
};

const getCurrentUser = () => {
	return JSON.parse(localStorage.getItem("user"));
};

const getCurrentUserType = () => {
	const token = JSON.parse(localStorage.getItem("user"));
	if(token === null){
		return -1;
	}
	return jwt_decode(token).userType;
};

const getCurrentUserId = () => {
	const token = JSON.parse(localStorage.getItem("user"));
	if(token === null){
		return -1;
	}
	return jwt_decode(token).userId;
};

const authService = {
	login,
	logout,
	getCurrentUser,
	getCurrentUserType,
	getCurrentUserId
};

export default authService;