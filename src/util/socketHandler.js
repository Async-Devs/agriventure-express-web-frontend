import { io } from "socket.io-client";
import authService from "../services/auth.service";

// eslint-disable-next-line no-undef

async function getSocketUrl(){
	const url = await authService.getSocketURL();
	return url;
}

function startSocket(){
	// eslint-disable-next-line no-undef

	const socketUrl = getSocketUrl(); // env Issue
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
