import { io } from "socket.io-client";
import authService from "../services/auth.service";

async function getSocketUrl(){
	const {data} = await authService.getSocketURL();
	return data;
}

async function startSocket(){
	const socketUrl = await getSocketUrl(); // env Issue
	console.log("SocketURL - ", socketUrl);
	const socket = io(socketUrl);
	socket.on("connect", ()=>{
		console.log("Connected", socket.id);
	});
	return socket;
}
const socketHandler = {
	startSocket
};

export default socketHandler;
