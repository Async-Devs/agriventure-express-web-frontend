import { io } from "socket.io-client";

// eslint-disable-next-line no-undef

function startSocket(){
	// eslint-disable-next-line no-undef
	const socketUrl = "http://localhost:5000"; // env Issue
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
