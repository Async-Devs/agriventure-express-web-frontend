import React, {useEffect, useState} from "react";
import {
	Box,
	ButtonGroup,
	CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl,
	Grid, InputLabel, MenuItem,
	Paper, Select,Alert,
	Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import RefundRequest from "../../components/refundRequest/refundRequest";
import {Link, useParams} from "react-router-dom";
import SaveButton from "../../components/button/button";
import {getOrderById, updateOrderDeliveryStatus} from "../../services/orderServices";
import authService from "../../services/auth.service";
// import {Alert} from "@mui/lab";
import Axios from "axios";
// eslint-disable-next-line no-unused-vars
import RefundRequestChatWindow from "../../components/refundChatWindow/refundChatWindow";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Divider from "@mui/material/Divider";
import DraggableDialog from "../../components/draggablePopup/draggablePopup";
import OrderChat from "../../components/orderChat/orderChat";

function OrderView(){
	const {id} = useParams();
	const [isPageChange, setPageChange] = useState(true);
	const [isLoading, setLoading] = useState(true);
	const [open,setOpen] = useState(false);
	const [openChat,setOpenChat] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const [order, setOrder] = useState(null);
	const [refundBody,setRefundBody] = useState();
	const [refundValue,setRefundValue] = useState(0);
	const [refundError,setRefundError] = useState(true);
	const [refundSuccess,setRefundSuccess] = useState(true);
	const [refresh,setRefresh] = useState(false);
	const [refundRequest,setRefundRequest] = useState({_id: "", orderId: {_id: ""},buyerId: {_id: ""}, messages: []});
	const [refundRequestAvailable,setRefundRequestAvailable] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [refundRequestOpen,setRefundRequestOpen] = useState(false);
	const [deliveryStatus, setDeliveryStatus] = React.useState("");
	const [openConfimation, setOpenConfimation] = React.useState(false);
	const [messages,setMessages] = useState([{message:""}]);
	const [messanger,setMessanger] = useState();


	const handleChange = (event) => {
		setDeliveryStatus(event.target.value);
		console.log(event.target.value);
	};

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

	},[id,refresh,isPageChange]);

	useEffect(()=>{
		async function getOrder(){
			const data = await getOrderById(orderId);
			console.log(data.data[0].messages);
			setMessages(data.data[0].messages);
			setMessanger(data.data[0].buyer._id === authService.getCurrentUserId() ? data.data[0].producer.userName: data.data[0].buyer.userName);
			setOrder(data.data[0]);
			setLoading(false);
		}
		if(orderId!=null){
			getOrder();
		}

	},[orderId,refresh]);

	useEffect(()=>{
		if(order!=null){
			setDeliveryStatus(order.delivery_status);
		}
	},[order]);

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

	// eslint-disable-next-line no-unused-vars
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

	function onSave(){
		updateOrderDeliveryStatus(order._id, deliveryStatus);
		setOpenConfimation(false);
		setPageChange(!isPageChange);
	}

	const handleClickOpenConfirmation = () => {
		setOpenConfimation(true);
	};

	const handleCloseConfirmation = () => {
		setOpenConfimation(false);
	};
	function renderConfirmation(){
		return(
			<Dialog
				open={openConfimation}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Are you sure you want to confirm?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<Grid item align="center"  xs={12}>
							<img height={200} src={"https://www.creativefabrica.com/wp-content/uploads/2021/01/04/Mustard-Kiss-Vegetable-Cute-Kawaii-Graphics-7558057-1-580x387.jpg"}/>
						</Grid>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseConfirmation}>Back</Button>
					<Button onClick={onSave} autoFocus>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		);
	}

	function handleChatClose(){
		setOpenChat(false);
	}
	function handleChatOpen(){
		setOpenChat(true);
	}

	function renderChat(param){
		if(param==="actions"){
			return (
				<Button autoFocus onClick={handleChatClose}>
					Close
				</Button>
			);
		}
		if(param==="body"){
			return (
				<OrderChat  orderId={id} setRefresh={setRefresh} messages={messages} refresh={refresh}  />
			);
		}if(param==="title"){
			return (
				<Grid  bgcolor="mediumseagreen" mt={1} textAlign="left">
					<Typography variant="h4" m={1} >
						{messanger}
					</Typography>
				</Grid>
			);
		}
	}

	function renderButtons(){
		if(authService.getCurrentUserType()==0){
			return(
				<ButtonGroup variant="outlined" aria-label="outlined button group" item xs={4}>
					<Button onClick={handleChatOpen}variant={"contained"}>Chat</Button>
					<SaveButton onClick={handleClickOpenConfirmation} variant={"contained"}/>
				</ButtonGroup>
			);
		}
		else if(authService.getCurrentUserType()==1){
			return (
				<ButtonGroup variant="outlined" aria-label="outlined button group" item xs={4}>
					<Button onClick={handleChatOpen} variant={"contained"} color={"primary"}>Chat</Button>
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

	function renderActions(){
		if(authService.getCurrentUserType()==0){
			return(
				<Grid>
					<Divider sx={{marginLeft:"15px", marginTop:"30px"}}>Actions</Divider>
					<Box>
						<Grid container item xs={12} alignItems={"center"} mt={4}>
							<Grid container item xs={12} alignItems={"center"}>
								<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
									<Box sx={{ minWidth: 300 }}>
										<Typography variant={"h6"}>
											Update Delivery status
										</Typography>
									</Box>
								</Grid>
								<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={3}>
									<Box sx={{ minWidth: 300 }}>
										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">Delivery Status</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={deliveryStatus}
												label="Delivery Status"
												onChange={handleChange}
											>
												<MenuItem value={"PROCESSING"}>PROCESSING</MenuItem>
												<MenuItem value={"OUT-FOR-DELIVERY"}>OUT-FOR-DELIVERY</MenuItem>
												<MenuItem value={"DELIVERED"}>DELIVERED</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Grid>
			);
		}
		else if(authService.getCurrentUserType()==1){
			return ;
		}
	}

	if(isLoading){
		return (
			<Grid container justifyContent={"center"} >
				<Grid item container minHeight={1200} maxWidth={1200} justifyContent={"center"} p={3} overflow={"hidden"}>
					<Paper elevation={3} sx={{ flexGrow: 1, p: 5, m:5, mx: "auto", width: "80%" }}>
						<Box>
							<Grid container item xs={12} alignItems={"center"}>
								<Grid container item alignItems="center" justifyContent={"left"}>
									<Typography gutterBottom variant="h3" component="div">
										Order Details
									</Typography>
								</Grid>
							</Grid>
						</Box>
						<Grid container justifyContent={"center"}>
							<Grid item>
								<CircularProgress/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		);
	}else {
		return(
			<Grid container justifyContent={"center"} >

				<Grid item hidden={refundError}>
					<Alert severity="error">Enter valid data to refund request!</Alert>
				</Grid>

				<Grid item hidden={refundSuccess}>
					<Alert severity="success">Refund Request Successfully sent!</Alert>
				</Grid>

				<Grid item container maxWidth={1200} justifyContent={"center"} p={3} overflow={"hidden"}>
					<Paper elevation={3} sx={{ flexGrow: 1, p: 5, m:5, mx: "auto", width: "80%" }}>
						<Box>
							<Grid container item xs={12} alignItems={"center"}>
								<Grid container item alignItems="center" justifyContent={"left"}>
									<Typography gutterBottom variant="h3" component="div">
										Order Details
									</Typography>
								</Grid>
								<Grid container item alignItems="center" justifyContent={"left"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Order ID
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order._id}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item alignItems="center" justifyContent={"left"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Date and Time
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order.order_date_time}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item alignItems="center" justifyContent={"left"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Price
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{Intl.NumberFormat(
												"en",
												{
													style: "currency",
													currency: "LKR" }
											).
												format(order.order_price)}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item xs={12} alignItems={"center"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Payment status
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order.payment_status}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Box>
						<Divider sx={{marginLeft:"15px", marginTop:"30px"}}>Item Details</Divider>
						<Box>
							<Grid container item xs={12} alignItems={"center"}>

								<Grid container item xs={12} alignItems={"center"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Producer
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order.producer.userName}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item alignItems="center" justifyContent={"left"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Name
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order.item.name}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item alignItems="center" justifyContent={"left"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Description
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order.item.description}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item alignItems="center" justifyContent={"left"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Quantity
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order.item.quantity} kg
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Box>
						<Divider sx={{marginLeft:"15px", marginTop:"30px"}}>Status Details</Divider>
						<Box>
							<Grid container item xs={12} alignItems={"center"}>
								<Grid container item xs={12} alignItems={"center"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Delivery status
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order.delivery_status}
										</Typography>
									</Grid>
								</Grid>
								<Grid container item xs={12} alignItems={"center"}>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"} mt={2}>
										<Typography gutterBottom variant="h5" component="div">
										Order status
										</Typography>
									</Grid>
									<Grid container item xs={12} alignItems="center" justifyContent={"left"}>
										<Typography gutterBottom variant="h6" component="div">
											{order.order_status}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Box>
						{renderConfirmation()}
						<DraggableDialog
							open={openChat}
							handleClose={handleChatClose}
							dialogActions={renderChat("actions")}
							dialogBody={renderChat("body")}
							dialogTitle={renderChat("title")}
						/>
						{renderActions()}
						<Grid container item xs={10} mt={5}>
							{renderButtons()}
						</Grid>
						<RefundRequest open={open} handleSubmit={handleSubmit} handleClose={handleClose} onChange={onChange} body={refundBody} value={refundValue}/>
						<RefundRequestChatWindow refresh={refresh} setRefresh={setRefresh} open={refundRequestOpen} handleClose={handleRefundRequestClose} refundRequest={refundRequest}/>
					</Paper>
				</Grid>
			</Grid>
		);
	}

}

export default OrderView;
