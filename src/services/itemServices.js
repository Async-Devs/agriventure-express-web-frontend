import Axios from "axios";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/items";

export function getAllItems(){
	const items = Axios.get(`${apiEndpoint}`);
	return items;
}
