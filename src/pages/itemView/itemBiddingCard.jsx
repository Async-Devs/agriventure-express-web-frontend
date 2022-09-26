import React, {useState} from "react";
import {Button, Grid, Paper, Typography} from "@mui/material";
import CountdownTimer from "../../components/countdownTimer/countdownTimer";
import TextInput from "../../components/textInput/textInput";

export default function ItemBiddingCard(){
	const [bidValue, setBidValue] = useState(123);
	const endTime = "2022-09-27T04:52:03";

	function handleBidChange(event){
		let newValue = event.target.value;
		if(event.target.name === "firstName" && newValue>=0) {
			setBidValue(newValue);
		}
	}

	function handleSubmit(){
		
	}

	return(
		<Grid item container>
			<Paper elevation={0}>
				<Grid container p={1} >
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<CountdownTimer endTime={endTime}/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h6"} color={"green"} fontWeight={"bold"}>
								Last bid : LKR 55,000
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
						<Grid item xs={4}>
							<TextInput name="firstName" label="Bid Value" type={"number"} value={bidValue} onChange={handleBidChange} required={true}/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Button variant={"contained"} onClick={handleSubmit}>Bid</Button>
						</Grid>
					</Grid>

				</Grid>
			</Paper>
		</Grid>
	);
}