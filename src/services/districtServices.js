import Axios from "axios";
import authService from "./auth.service";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl;

export function getAllDistricts(){
	const districts = Axios.get(`${apiEndpoint}/guestUsers/getAllLocations`, {
		headers: { "x-auth-token": authService.getCurrentUser()
		}
	});
	return districts;
}

export function getDistrictById(districtId){
	const districtData = Axios.get(`${apiEndpoint}/guestUsers/getDistrictById/${districtId}`, {
		headers: { "x-auth-token": authService.getCurrentUser()
		}
	});
	return districtData;
}
