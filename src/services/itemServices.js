import Axios from "axios";
import authService from "./auth.service";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/items";
const apiEndpointProducer = apiUrl + "/producerUsers/items";

export function getAllItems(){
	const items = Axios.get(`${apiEndpoint}`);
	return items;
}

export function getItemById(itemId){
	const itemData = Axios.get(`${apiEndpoint}/${itemId}`);
	return itemData;
}

export function setBidForItem(itemId, data){
	const itemData = Axios.put(`${apiEndpoint}/set-bid/${itemId}`, {data});
	return itemData;
}

export function producerAddListing(data){
	const itemData = Axios.post(
		`${apiEndpointProducer}/add-item`,
		{data},
		{
			headers: { "x-auth-token": authService.getCurrentUser()}
		}
	);
	return itemData;
}

export function getAllItemListingByProducerId(producerId){
	const items = Axios.get(`${apiEndpoint}/producer/${producerId}`);
	return items;
}
