import React from "react";
import {FormControl, FormLabel, Grid, TextField, Typography} from "@mui/material";
import CountdownTimer from "../../components/countdownTimer/countdownTimer";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import moment from "moment/moment";
import "react-image-crop/dist/ReactCrop.css";
// import {CropImage} from "../../components/cropImage/CropImage";
import TextInput from "../../components/textInput/textInput";
import PropTypes from "prop-types";

function SetBiddingCard(props){

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
						<Grid xs={12}>
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
							<CountdownTimer endTime={props.endTime}/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
						<Grid item xs={12}>
							<Typography align={"center"} sx={{ typography: { md:"h6", sm: "h5", xs: "body1" }, overflow:"hidden" }} color={"green"} fontWeight={"bold"}>
									Minimum Bidding Price : {Intl.NumberFormat("en", { style: "currency", currency: "LKR" }).format(props.minimumBid) }
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"left"} mt={3} ml={3} mr={3}>
						<Grid item container xs={12} justifyContent={"center"}>
							<Grid item>
								<LocalizationProvider dateAdapter={AdapterMoment}>
									<DateTimePicker
										renderInput={(params) => {
											console.log(params);
											return(
												<FormControl fullWidth>
													<TextField {...params} />
												</FormControl>);
										}}
										label="Bidding End Date and Time"
										value={props.endTime}
										onChange={
											(newValue) => {
												props.setTime(newValue);
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
							<TextInput name="minBid" value={props.minimumBid} type={"number"} onChange={props.onChange} required={true}/>
						</FormControl>
					</Grid>

					<Grid item xs={12} m={3}>
						<FormControl fullWidth>
							<FormLabel>
									Minimum Bid Step
							</FormLabel>
							<TextInput name="minBid" value={props.minimumBid} type={"number"} onChange={props.onChange} required={true}/>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

SetBiddingCard.propTypes = {
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	minimumBid: PropTypes.number,
	endTime: PropTypes.object,
	setTime: PropTypes.func
};

export default SetBiddingCard;
