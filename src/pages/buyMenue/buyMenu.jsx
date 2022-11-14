import React, {useEffect, useState} from "react";
import {CircularProgress, Grid} from "@mui/material";
import BuyMenuTable from "./buyMenuTable";
import {getAllOrders, getAllOrdersForBuyer, getAllOrdersForProducer} from "../../services/orderServices";
import authService from "../../services/auth.service";

function BuyMenu(){
	const [orderArray, setOrderArray] = useState([]);
	const [orderFinalArray, setOrderFinalArray] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(()=>{

		getOrders();
		setLoading(false);
	},[]);

	useEffect(()=>{
		setupData();
	},[orderArray]);

	async function getOrders(){
		const userType = authService.getCurrentUserType();
		const userId = authService.getCurrentUserId();
		console.log(userType);
		if(userType==1){
			const {data} = await getAllOrdersForBuyer(userId);
			setOrderArray(data);
			return;
		}else if(userType==0){
			const {data} = await getAllOrdersForProducer(userId);
			setOrderArray(data);
			return;
		}
		const {data} = await getAllOrders();
		setOrderArray(data);
	}

	function setupData(){
		const modifiedData = orderArray.map((order)=>{
			return  {
				"id": order._id,
				"paymentStatus": order.payment_status,
				"payment": order.order_price,
				"deliveryStatus": order.delivery_status
			};
		});
		setOrderFinalArray(modifiedData);
	}

	function renderMain(){
		if(isLoading){
			return(
				<CircularProgress/>
			);
		}
		return (
			<BuyMenuTable data={orderFinalArray} />
		);
	}

	console.log(orderArray);
	return(
		<Grid container justifyContent={"center"} p={5}>
			<Grid item container spacing={5} p={4} xs={12} minHeight={1000}>
				{renderMain()}
			</Grid>
		</Grid>
	);
}

export default BuyMenu;
