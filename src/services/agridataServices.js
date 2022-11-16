import Axios from "axios";
import authService from "./auth.service";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/officerUsers";

export function getAgriData(){
	const agriData = Axios.get(`${apiEndpoint}/getAllDataEntry`,{
		headers: { "x-auth-token": authService.getCurrentUser()
		}
	});
	return agriData;
}

export function getDistrictDetails(){
	const agriData = Axios.get(`${apiEndpoint}/districtDetails`);
	return agriData;
}

export function getCropDetails(){
	const agriData = Axios.get(`${apiEndpoint}/cropDetails`);
	return agriData;
}

export function addData(data){
	const Data = Axios.post(`${apiEndpoint}/addDataEntry`, {data});
	return Data;
}
export function deleteData(id){
	Axios.delete(`${apiEndpoint}/deleteDataById/${id}`);
}


