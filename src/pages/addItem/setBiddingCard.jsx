import React from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
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
			<Grid item container xs={12} mb={3}>
				<Grid item container xs={12}>
					<Grid item xs={12} container justifyContent={"center"} m={3}>
						<Grid item xs={12}>
							<Typography variant={"h5"} align={"left"}>
								Images
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
						<Grid xs={12}>
							<label htmlFor="upload-photo">
								<input
									style={{ display: "none" }}
									id="upload-photo"
									name="upload-photo"
									type="file"
								/>

								<Button color="secondary" variant="contained" component="span">
									Upload button
								</Button>
							</label>
						</Grid>
					</Grid>

				</Grid>
			</Grid>
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
							<Typography variant={"h6"} color={"green"} fontWeight={"bold"} sx={{overflow:"hidden"}}>
									Minimum Bidding Price : {Intl.NumberFormat("si", { style: "currency", currency: "LKR" }).format(props.minimumBid) }
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"left"} mt={3} ml={3} mr={3}>
						<Grid item xs={5}>
							<Typography variant={"body1"} >
								End Time
							</Typography>
						</Grid>
						<Grid item xs={1}>
							<Typography variant={"body1"} fontWeight={"bold"}>
								:
							</Typography>
						</Grid>
						<Grid item container xs={6} justifyContent={"right"}>
							<Grid item>
								<LocalizationProvider dateAdapter={AdapterMoment}>
									<DateTimePicker
										renderInput={
											(params) => <TextField {...params} />
										}
										label="Bidding End Date and Time"
										value={props.endTime}
										onChange={(newValue) => {
											props.setTime(newValue);
										}}
										minDateTime={moment()}
									/>
								</LocalizationProvider>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
						<Grid item xs={5}>
							<Typography variant={"body1"}>
									Minimum Bidding Price
							</Typography>
						</Grid>
						<Grid item xs={1}>
							<Typography variant={"body1"} fontWeight={"bold"} >
									:
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<TextInput name="minBid" label="Minimum Bidding Price" value={props.minimumBid} type={"number"} onChange={props.onChange} required={true}/>
						</Grid>
					</Grid>

					<Grid item xs={12} container justifyContent={"right"} m={3}>
						<Grid item >
							<Button variant={"contained"} color={"warning"} onClick={props.onSubmit}>Submit</Button>
						</Grid>
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
