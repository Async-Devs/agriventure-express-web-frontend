import React, {useEffect, useState} from "react";
import {Box, ButtonGroup, CircularProgress, Grid, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import RefundRequest from "../../components/refundRequest/refundRequest";
import {Link, useParams} from "react-router-dom";
import SaveButton from "../../components/button/button";
import CustomInformationListItem from "../../components/customInformationListItem/customInformationListItem";
import {getOrderById} from "../../services/orderServices";
import authService from "../../services/auth.service";
import {Alert} from "@mui/lab";
import Axios from "axios";
import RefundRequestChatWindow from "../../components/refundChatWindow/refundChatWindow";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function OrderView(){
	const {id} = useParams();
	const [isLoading, setLoading] = useState(true);
	const [open,setOpen] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const [order, setOrder] = useState(null);
	const [refundBody,setRefundBody] = useState();
	const [refundValue,setRefundValue] = useState(0);
	const [isChatOpen, setChat] = useState({gridVal:0,chatDisplay:"none"});
	const [refundError,setRefundError] = useState(true);
	const [refundSuccess,setRefundSuccess] = useState(true);
	const [refresh,setRefresh] = useState(false);
	const [refundRequest,setRefundRequest] = useState({_id: "", orderId: {_id: ""},buyerId: {_id: ""}, messages: []});
	const [refundRequestAvailable,setRefundRequestAvailable] = useState(false);
	const [refundRequestOpen,setRefundRequestOpen] = useState(false);

	useEffect( () => {
		setOrderId(id);

		async function getRefundRequest() {

			// eslint-disable-next-line no-undef
			const refundRequest = await Axios.get(`${process.env.REACT_APP_API_URL}/buyerUsers/refundRequestForOrder/${id}`,
				{
					headers: {
						"x-auth-token": authService.getCurrentUser()
					}
				});

			if(!refundRequest.data.success){
				alert("Error occured!");
				return;
			}

			if(refundRequest.data.isFound){
				setRefundRequest(refundRequest.data.refundRequest);
				setRefundRequestAvailable(true);
			}else{
				setRefundRequestAvailable(false);
			}
		}

		getRefundRequest();

	},[id,refresh]);

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


		setRefundError(true);
		setRefundSuccess(true);
		if(refundRequestAvailable === false){
			setOpen(true);
		}else{
			// eslint-disable-next-line no-undef
			Axios.put(`${process.env.REACT_APP_API_URL}/publicUsers/openRefundRequest`,{
				id: refundRequest._id
			},{
				headers: {"x-auth-token": authService.getCurrentUser()}
			}).then(async (newRes)=>{
				if(!newRes.data.success){
					alert("can not sync with the server");
				}else{
					// eslint-disable-next-line react/prop-types
					setRefresh(!refresh);
				}
			});


			setRefundRequestOpen(true);
		}

	}

	function handleRefundRequestClose(){
		setRefundRequestOpen(false);
	}

	function handleClose(){
		setOpen(false);
	}

	function handleSubmit(){
		if(refundBody === "" || refundBody === undefined || refundValue <= 0 || refundValue === undefined){
			setRefundError(false);
		}

		const refundForm = {
			orderId: orderId,
			refundValue: refundValue,
			description: refundBody,
			producerId: order.producer._id
		};

		// eslint-disable-next-line no-undef
		Axios.post(`${process.env.REACT_APP_API_URL}/buyerUsers/addRefundRequest`,refundForm,{
			headers: {"x-auth-token": authService.getCurrentUser()}
		}).then(async (res)=>{
			if(!res.data.success){
				alert("Error Occured!");
			}else{
				setRefundBody("");
				setRefundValue(0);
				setRefundSuccess(false);
				setRefresh(!refresh);
			}
		});

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
			const val = parseFloat(event.target.value);
			val >= 0 ? setRefundValue(parseFloat(event.target.value)) : setRefundValue(0);
		}
	}
	function renderButtons(){
		if(authService.getCurrentUserType()==0){
			return(
				<ButtonGroup variant="outlined" aria-label="outlined button group" item xs={4}>
					<Button onClick={onClickChat}>Chat</Button>
					<SaveButton />
				</ButtonGroup>
			);
		}
		else if(authService.getCurrentUserType()==1){
			return (
				<ButtonGroup variant="outlined" aria-label="outlined button group" item xs={4}>
					<Button onClick={onClickChat}>Chat</Button>
					{refundRequest.isBuyerRead  === false? (
						<Button onClick={onClickRefund} startIcon={<NotificationsActiveIcon />}>Refund Request</Button>
					):(
						<Button onClick={onClickRefund} >Refund Request</Button>
					)}
					<Link to={".."} style={{textDecoration: "inherit"}}>
						<Button sx={{textDecoration: "inherit"}} >Cancel</Button>
					</Link>
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
		return(
			<Paper elevation={3} sx={{ flexGrow: 1, p: 5, m:5, mx: "auto", width: "80%" }}>

				<Grid item hidden={refundError}>
					<Alert severity="error">Enter valid data to refund request!</Alert>
				</Grid>

				<Grid item hidden={refundSuccess}>
					<Alert severity="success">Refund Request Successfully sent!</Alert>
				</Grid>


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
				<RefundRequestChatWindow refresh={refresh} setRefresh={setRefresh} open={refundRequestOpen} handleClose={handleRefundRequestClose} refundRequest={refundRequest}/>


			</Paper>
		);
	}

}

export default OrderView;
