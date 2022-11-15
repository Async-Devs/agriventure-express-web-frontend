import Axios from "axios";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/orders";

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
export function getOrderById(orderId){
	const orders = Axios.get(`${apiEndpoint}/${orderId}`);
	return orders;
}
export function updateOrderDeliveryStatus(orderId, status){
	const orders = Axios.put(`${apiEndpoint}/update/delivery-status/${orderId}`, status);
	return orders;
}

