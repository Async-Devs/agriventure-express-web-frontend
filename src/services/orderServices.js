import Axios from "axios";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/orders";

export function getAllOrders(){
	const orders = Axios.get(`${apiEndpoint}`);
	return orders;
}

