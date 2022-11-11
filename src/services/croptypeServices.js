import Axios from "axios";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/cropTypes";

export function getCropTypes(){
	const cropTypes = Axios.get(`${apiEndpoint}`);
	return cropTypes;
}
