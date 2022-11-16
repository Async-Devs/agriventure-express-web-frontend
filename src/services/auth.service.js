import axios from "axios";
import jwt_decode from "jwt-decode";
import Axios from "axios";

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

const getGoogleAPIkey = ()=>{
	// eslint-disable-next-line no-undef
	const key = Axios.get(`${process.env.REACT_APP_API_URL}/producerUsers/google-API-key`,{
		headers: { "x-auth-token": authService.getCurrentUser()
		}});
	return key;
};

const logout = () => {
	localStorage.removeItem("user");
	window.location.assign("/login");
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

const getCurrentUserExp = () => {
	const token = JSON.parse(localStorage.getItem("user"));
	if(token === null){
		return -1;
	}
	return jwt_decode(token).exp;
};

const isAuthenticated = () => {
	const exp = getCurrentUserExp();
	if(exp === -1){
		return false;
	}
	if(Date.now() >= exp * 1000){
		logout();
	}
	return true;
};

const authService = {
	login,
	logout,
	getCurrentUser,
	getCurrentUserType,
	getCurrentUserId,
	getCurrentUserExp,
	isAuthenticated,
	getGoogleAPIkey
};

export default authService;
