import Axios from "axios";

// eslint-disable-next-line no-undef
const apiUrl = process.env.REACT_APP_API_URL;
const apiEndpoint = apiUrl + "/dataEntries";

export function getAgriData(){
	const agriData = Axios.get(`${apiEndpoint}`);
	return agriData;
}
export function addData(data){
	const Data = Axios.post(`${apiEndpoint}`, {data});
	return Data;
}
export function deleteData(id){
	Axios.delete(`${apiEndpoint}/${id}`);
}

