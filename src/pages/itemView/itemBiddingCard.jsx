import React, {useState} from "react";
import {Button, Grid, Paper, Typography} from "@mui/material";
import CountdownTimer from "../../components/countdownTimer/countdownTimer";
import TextInput from "../../components/textInput/textInput";
import BidTable from "./bidTable";
import _ from "lodash";
import PropTypes from "prop-types";
import {setBidForItem} from "../../services/itemServices";

function ItemBiddingCard(props){
	const { endTime, bidArray, minimumBid, itemId } = props.biddingData;
	const [bidValue, setBidValue] = useState(0);
	const [ lastBid, setLastBid ] = useState(_.last(bidArray).bid_amount);

	function handleBidChange(event){
		let newValue = event.target.value;
		const x = parseInt(newValue);
		if(event.target.name === "bidValue" && x>=0  && x <= 1000000000000) {
			setBidValue(x);
		}
	}

	const handleSubmit=async ()=>{
		if (bidValue<=lastBid){
			return;
		}
		setLastBid(bidValue);
		const dataObject = { itemId: itemId, userId: 0, bidValue: bidValue };
		await setBidForItem(itemId, dataObject);
		// Add Submitted Alert Here or Error
	};

	return(
		<Grid item container>
			<Paper elevation={0}>
				<Grid container >
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<CountdownTimer endTime={endTime}/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h6"} color={"green"} fontWeight={"bold"}>
								Last bid : {Intl.NumberFormat("si", { style: "currency", currency: "LKR" }).format(lastBid) }
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h7"}  fontWeight={"bold"}>
								Starting bid : {Intl.NumberFormat("si", { style: "currency", currency: "LKR" }).format(minimumBid) }
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"left"} mt={2}>
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
							<TextInput name="bidValue" label="Bid Value" type={"number"} value={bidValue} onChange={handleBidChange} required={true}/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Button variant={"contained"} color={"warning"} onClick={handleSubmit}>Place Bid</Button>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<BidTable bidderArray={bidArray}/>
						</Grid>
					</Grid>

				</Grid>
			</Paper>
		</Grid>
	);
}

ItemBiddingCard.propTypes = {
	biddingData: PropTypes.object.isRequired
};

export default ItemBiddingCard;
