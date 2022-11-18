import React, {useState} from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle, FormControl,
	Grid,
	Typography
} from "@mui/material";
import CountdownTimer from "../../components/countdownTimer/countdownTimer";
import BidTable from "./bidTable";
import _ from "lodash";
import PropTypes from "prop-types";
import {setBidForItem} from "../../services/itemServices";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

function ItemBiddingCard(props){
	const { endTime, bidArray, minimumBid, itemId, bidStep } = props.biddingData;
	const [ lastBid, setLastBid ] = useState(bidArray.length>0?_.last(bidArray).bid_amount:minimumBid);
	const [bidValue, setBidValue] = useState(lastBid);
	const [ error, setError ] = useState(false);
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		if (bidValue<=lastBid+bidStep){
			setError(true);
			return;
		}
		setError(false);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function handleBidChange(event){
		let newValue = event.target.value;
		console.log(newValue);
		const x = parseInt(newValue);
		if(event.target.name === "bidValue" && x>=0  && x <= 1000000000000) {
			setBidValue(x);
		}else if(newValue ==""){
			setBidValue(newValue);
		}
	}

	const handleSubmit=async ()=>{
		setLastBid(bidValue);
		const dataObject = { itemId: itemId, userId: 0, bidValue: bidValue };
		await setBidForItem(itemId, dataObject);
		// Add Submitted Alert Here or Error
	};

	const {name, description, location, quantity } = props.biddingData;

	const bidConfirmPopup = ()=>{
		return(
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Confirm Bid Amount ?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						You are about to place a bid of amount {Intl.NumberFormat("si", { style: "currency", currency: "LKR" }).format(bidValue) }. Please verify the amount before submitting. You may have to contact the seller through customer support to undo this action.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant={"contained"} sx={{color:"white"}}>Discard</Button>
					<Button onClick={handleSubmit} autoFocus color={"error"} variant={"contained"}>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		);
	};
	console.log(props.user);
	return(
		<Grid item container direction={"column"} justifyContent={"flex-end"} alignItems={"stretch"} spacing={2} >
			<Grid item container justifyContent={"left"} mt={2}>
				<Grid item>
					<Typography variant={"h4"}>
						{name}
					</Typography>
				</Grid>
			</Grid>
			<Grid item container justifyContent={"center"} mt={2}>
				<Grid item xs={12}>
					<Typography variant={"h6"}>
						Description
					</Typography>
					<Typography variant={"body1"} align={"justify"}>
						{description}
					</Typography>
				</Grid>
			</Grid>
			<Grid item container justifyContent={"center"} mt={2}>
				<Grid item xs={12}>
					<Typography variant={"h6"}>
						Quantity: {quantity} kg
					</Typography>
				</Grid>
			</Grid>
			<Grid item container justifyContent={"center"} mt={2}>
				<Grid item xs={12}>
					<Typography variant={"h6"}>
						Location: {location.city}
					</Typography>
				</Grid>
			</Grid>
			<Divider sx={{marginLeft:"15px", marginTop:"30px"}}>Bidding Details</Divider>
			<Grid item container justifyContent={"center"} >
				<Grid item xs={12}>
					<CountdownTimer endTime={endTime}/>
				</Grid>
			</Grid>
			<Grid item container justifyContent={"center"} mt={2}>
				<Grid item xs={12}>
					<Typography variant={"h6"} color={"green"} fontWeight={"bold"}>
								Last bid : {Intl.NumberFormat("si", { style: "currency", currency: "LKR" }).format(lastBid) }
					</Typography>
				</Grid>
			</Grid>
			<Grid item  container justifyContent={"center"} mt={2}>
				<Grid item xs={12}>
					<Typography variant={"h7"}  fontWeight={"bold"}>
								Starting bid : {Intl.NumberFormat("si", { style: "currency", currency: "LKR" }).format(minimumBid) }
					</Typography>
				</Grid>
			</Grid>
			{props.user==1?
				(<Grid item container>
					<Grid item container justifyContent={"left"} mt={2}>
						<Grid item xs={5}>
							<Typography variant={"h6"} fontWeight={"bold"}>
							Place your Bid
							</Typography>
						</Grid>
						<Grid item xs={1}>
							<Typography variant={"h6"} fontWeight={"bold"}>
							:
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<FormControl fullWidth>
								<TextField
									type={"number"}
									helperText={`Enter Bid amount greater than ${Intl.NumberFormat("si", { style: "currency", currency: "LKR" }).format(lastBid+bidStep)}`}
									error={error}
									name="bidValue"
									label="Bid Value"
									onChange={handleBidChange}
									value={bidValue}
								/>
							</FormControl>
						</Grid>
					</Grid>
					<Grid item container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Button variant={"contained"} color={"warning"} onClick={handleClickOpen}>Place Bid</Button>
						</Grid>
					</Grid>
				</Grid>):
				null
			}
			<Grid item container justifyContent={"center"} mt={2}>
				<Grid item xs={12}>
					<BidTable bidderArray={bidArray} user={props.user}/>
				</Grid>
			</Grid>
			{bidConfirmPopup()}
		</Grid>
	);
}

ItemBiddingCard.propTypes = {
	biddingData: PropTypes.object.isRequired,
	user: PropTypes.number.isRequired
};

export default ItemBiddingCard;
