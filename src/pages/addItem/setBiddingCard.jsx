import React, {useEffect, useState} from "react";
import {FormControl, FormLabel, Grid, Stack, TextField, Typography} from "@mui/material";
import CountdownTimer from "../../components/countdownTimer/countdownTimer";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import moment from "moment/moment";
import "react-image-crop/dist/ReactCrop.css";
import PropTypes from "prop-types";
import InfoIcon from "@mui/icons-material/Info";

function SetBiddingCard(props){
	const [minimumBid, setMinimumBid] = useState("");
	const [minimumBidStep, setMinimumBidStep] = useState("");
	const [endTime, setEndTime] = useState(moment());
	useEffect(()=>{
		const data = {
			minimumBid:minimumBid,
			minimumBidStep:minimumBidStep,
			endTime:endTime
		};
		props.getValues(data);
	},[props.onSubmit]);
	function onChangeMinBid(event){
		if(event.target.value==""){
			setMinimumBid(event.target.value);
		}else if(event.target.value>=0 && event.target.value<=1000000000) {
			const value = Math.ceil(event.target.value);
			setMinimumBid(value);
		}
		setMinimumBidStep("");
	}

	function onChangeMinBidStep(event){
		if(event.target.value==""){
			setMinimumBidStep(event.target.value);
		}else if(event.target.value>=0 && event.target.value<=minimumBid/10){
			const value = Math.ceil(event.target.value);
			setMinimumBidStep(value);
		}
	}

	return(
		<Grid item container xs={12}>
			<Grid item container xs={12}>
				<Grid container>
					<Grid item xs={12} container justifyContent={"left"} m={3}>
						<Grid item>
							<Typography variant={"h5"}>
								Bidding Setup
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<hr
								style={{
									color: "black",
									backgroundColor: "black",
									height: 0.1
								}}
							/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={3}>
						<Grid item xs={12}>
							<CountdownTimer endTime={endTime}/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
						<Grid item xs={12}>
							<Typography align={"center"} sx={{ typography: { md:"h6", sm: "h5", xs: "body1" }, overflow:"hidden" }} color={"green"} fontWeight={"bold"}>
									Minimum Bidding Price : {Intl.NumberFormat("en", { style: "currency", currency: "LKR" }).format(minimumBid) }
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"left"} mt={3} ml={3} mr={3}>
						<Grid item container xs={12} justifyContent={"center"}>
							<Grid item>
								<LocalizationProvider dateAdapter={AdapterMoment}>
									<DateTimePicker
										renderInput={(params) => {
											return(
												<FormControl fullWidth>
													<TextField {...params} />
												</FormControl>);
										}}
										label="Bidding End Date and Time"
										value={endTime}
										onChange={
											(newValue) => {
												setEndTime(newValue);
											}
										}
										minDateTime={moment()}
									/>
								</LocalizationProvider>
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} mr={3} mt={3} ml={3}>
						<FormControl fullWidth>
							<FormLabel>
									Minimum Bidding Price
							</FormLabel>
							<TextField name="minBid" value={minimumBid} type={"number"} required={true} onChange={onChangeMinBid}/>
						</FormControl>
					</Grid>

					<Grid item xs={12} mt={3} ml={3} mr={3}>
						<FormControl fullWidth>
							<FormLabel>
									Minimum Bid Step
							</FormLabel>
							<TextField name="minBidStep" value={minimumBidStep} type={"number"} required={true} onChange={onChangeMinBidStep}/>
						</FormControl>
					</Grid>
					{
						(minimumBid==""||minimumBid<10)?
							(<Grid item xs={12} m={3}>
								<Stack direction="row" alignItems="center" gap={1}>
									<InfoIcon color={"info"}/>
									<Typography textAlign={"center"} variant={"body1"}>Enter Minimum Bidding Price of more than 10 to add Minimum Bid Step</Typography>
								</Stack>
							</Grid>):
							(<Grid item xs={12} m={3}></Grid>)
					}
				</Grid>
			</Grid>
		</Grid>
	);
}

SetBiddingCard.propTypes = {
	onSubmit: PropTypes.bool,
	getValues: PropTypes.func
};

export default SetBiddingCard;
