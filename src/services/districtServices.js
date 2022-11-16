import Axios from "axios";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/districts";

export function getAllDistricts(){
	const districts = Axios.get(`${apiEndpoint}/getAllLocations`);
	return districts;
}

export function getDistrictById(districtId){
	const districtData = Axios.get(`${apiEndpoint}/getDistrictById/${districtId}`);
	return districtData;
}
