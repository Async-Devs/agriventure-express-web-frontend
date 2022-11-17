import Axios from "axios";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/items";

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

export function addItem(data){
	const itemData = Axios.post(`${apiEndpoint}/add-item`, {data});
	return itemData;
}

export function getAllItemListingByProducerId(producerId){
	const items = Axios.get(`${apiEndpoint}/producer/${producerId}`);
	return items;
}
