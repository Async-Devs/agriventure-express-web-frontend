import React, {useEffect, useState} from "react";
import {
	Box,
	ButtonGroup,
	CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl,
	Grid, InputLabel, MenuItem,
	Paper, Select,
	Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import RefundRequest from "../../components/refundRequest/refundRequest";
import {useParams} from "react-router-dom";
import SaveButton from "../../components/button/button";
import {getOrderById, updateOrderDeliveryStatus} from "../../services/orderServices";
import authService from "../../services/auth.service";
import Divider from "@mui/material/Divider";
import DraggableDialog from "../../components/draggablePopup/draggablePopup";

function OrderView(){
	const {id} = useParams();
	const [isLoading, setLoading] = useState(true);
	const [open,setOpen] = useState(false);
	const [orderId, setOrderId] = useState(null);
	const [order, setOrder] = useState(null);
	const [refundBody,setRefundBody] = useState();
	const [refundValue,setRefundValue] = useState();
	const [isChatOpen, setChat] = useState({gridVal:0,chatDisplay:"none"});
	const [deliveryStatus, setDeliveryStatus] = React.useState("");
	const [openConfimation, setOpenConfimation] = React.useState(false);

	const handleChange = (event) => {
		setDeliveryStatus(event.target.value);
		console.log(event.target.value);
	};

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

	useEffect(()=>{
		if(order!=null){
			setDeliveryStatus(order.delivery_status);
		}
	},[order]);

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

	function onSave(){
		updateOrderDeliveryStatus(order._id, deliveryStatus);
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
					{"Use Google's location service?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending anonymous
						location data to Google, even when no apps are running.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseConfirmation}>Discard</Button>
					<Button onClick={onSave} autoFocus>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		);
	}

	function renderButtons(){
		if(authService.getCurrentUserType()==0){
			return(
				<ButtonGroup variant="outlined" aria-label="outlined button group" item xs={4}>
					<Button onClick={onClickRefund} >Refund</Button>
					<Button onClick={onClickChat}>Chat</Button>
					<SaveButton onClick={handleClickOpenConfirmation} />
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
			<Grid>
				<CircularProgress/>
			</Grid>
		);
	}else {
		console.log(order);
		return(
			<Grid container justifyContent={"center"} >
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
						<DraggableDialog/>
						{renderActions()}
						<Grid container item xs={10} mt={5}>
							{renderButtons()}
						</Grid>
						<RefundRequest open={open} handleSubmit={handleSubmit} handleClose={handleClose} onChange={onChange} body={refundBody} value={refundValue}/>
					</Paper>
				</Grid>
			</Grid>
		);
	}

}

export default OrderView;
