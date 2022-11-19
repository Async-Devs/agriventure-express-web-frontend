import Axios from "axios";
import authService from "./auth.service";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/orders";
const apiEndpointPublicUser = apiUrl + "/publicUsers";

export function getAllOrders(){
	const orders = Axios.get(`${apiEndpoint}`);
	return orders;
}
export function getAllOrdersForBuyer(buyerId){
	const orders = Axios.get(`${apiEndpoint}/order-by-buyerId/${buyerId}`);
	return orders;
}
export function getAllOrdersForProducer(producerId){
	const orders = Axios.get(`${apiEndpoint}/order-by-producerId/${producerId}`);
	return orders;
}
export function getOrderByIdForPublicUser(orderId){
	const orders = Axios.get(
		`${apiEndpointPublicUser}/get-order/${orderId}`,
		{
			headers: { "x-auth-token": authService.getCurrentUser()}
		}
	);
	return orders;
}
export function updateOrderDeliveryStatus(orderId, status){
	const orders = Axios.put(`${apiEndpoint}/update/delivery-status/${orderId}`, {status});
	return orders;
}

