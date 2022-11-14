import React, {useEffect, useState} from "react";
import {Box, ButtonGroup, CircularProgress, Grid, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import RefundRequest from "../../components/refundRequest/refundRequest";
import {useParams} from "react-router-dom";
import SaveButton from "../../components/button/button";
import CustomInformationListItem from "../../components/customInformationListItem/customInformationListItem";
import {getOrderById} from "../../services/orderServices";
import authService from "../../services/auth.service";

function OrderView(){
	const {id} = useParams();
	const [isLoading, setLoading] = useState(true);
	const [open,setOpen] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const [order, setOrder] = useState(null);
	const [refundBody,setRefundBody] = useState();
	const [refundValue,setRefundValue] = useState();
	const [isChatOpen, setChat] = useState({gridVal:0,chatDisplay:"none"});

	useEffect(()=>{
		setOrderId(id);
	},[id]);

	useEffect(()=>{
		async function getOrder(){
			const data = await getOrderById(orderId);
			setOrder(data.data[0]);
			setLoading(false);
		}
		if(orderId!=null){
			getOrder();
		}
	},[orderId]);

	const topGap = 5;
	const itemHeight = 10;

	function onClickRefund(){
		setOpen(true);
	}

	function handleClose(){
		setOpen(false);
	}

	function handleSubmit(){
		//todo: check the validity
		handleClose();

	}
	function onClickChat(){
		if (isChatOpen.gridVal == 0)return setChat({gridVal:4,chatDisplay:null});
		return setChat({gridVal:0,chatDisplay:"none"});
	}

	function onChange(event){
		if(event.target.name === "body"){
			setRefundBody(event.target.value);
		}else if(event.target.name === "value"){
			// if(!isNaN(event.target.value) && !isNaN(parseFloat(event.target.value)) ){
			// 	setRefundValue(parseFloat(event.target.value));
			// }
			setRefundValue(parseFloat(event.target.value));
		}
	}
	function renderButtons(){
		if(authService.getCurrentUserType()==0){
			return(
				<ButtonGroup variant="outlined" aria-label="outlined button group" item xs={4}>
					<Button onClick={onClickRefund} >Refund</Button>
					<Button onClick={onClickChat}>Chat</Button>
					<SaveButton />
				</ButtonGroup>
			);
		}
		else if(authService.getCurrentUserType()==1){
			return (
				<ButtonGroup variant="outlined" aria-label="outlined button group" item xs={4}>
					<Button onClick={onClickChat}>Chat</Button>
				</ButtonGroup>
			);
		}
	}
	if(isLoading){
		return (
			<Grid>
				<CircularProgress/>
			</Grid>
		);
	}else {
		console.log(order);
		return(
			<Paper elevation={3} sx={{ flexGrow: 1, p: 5, m:5, mx: "auto", width: "80%" }}>

				<Grid container alignItems="center" justifyContent={"left"}>
					<Typography gutterBottom variant="h4" component="div">
					Order Details
					</Typography>
				</Grid>

				<Grid container spacing={2}>
					<Grid container item xs={12-isChatOpen.gridVal} alignItems={"center"}>

						<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Invoice Number"} infoValue={order._id}/>
						<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Producer"} infoValue={order.producer.userName}/>
						<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Item"} infoValue={order.item.name}/>
						<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Quantity"} infoValue={`${order.item.quantity} kg`}/>
						<CustomInformationListItem topMargin={topGap} height={"auto"} infoTitle={"Description"} infoValue={order.item.description}/>
						<CustomInformationListItem
							topMargin={topGap}
							height={itemHeight}
							infoTitle={"Order Price"}
							infoValue={
								Intl.NumberFormat(
									"si",
									{
										style: "currency",
										currency: "LKR" }
								).
									format(order.order_price)
							}
						/>
						<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Date Placed"} infoValue={order.order_date_time}/>
						<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Payment Status"} infoValue={order.payment_status}/>
						<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Delivery Status"} infoValue={order.delivery_status}/>

						<Grid container item xs={10} mt={topGap} height={itemHeight} >
							{renderButtons()}
						</Grid>
					</Grid>
					<Grid item xs={isChatOpen.gridVal} display={isChatOpen.chatDisplay}>
						<Box bgcolor={"red"}>
						WIP: Insert Chat Component Here
						</Box>
					</Grid>
				</Grid >
				<RefundRequest open={open} handleSubmit={handleSubmit} handleClose={handleClose} onChange={onChange} body={refundBody} value={refundValue}/>


			</Paper>
		);
	}

}

export default OrderView;
