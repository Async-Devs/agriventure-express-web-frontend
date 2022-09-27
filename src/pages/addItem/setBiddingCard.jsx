import React, {useState} from "react";
import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import CountdownTimer from "../../components/countdownTimer/countdownTimer";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import moment from "moment/moment";
import "react-image-crop/dist/ReactCrop.css";
import {CropImage} from "../../components/cropImage/CropImage";

export default function SetBiddingCard(){

	const [value, setValue] = useState(moment());

	return(
		<Grid item container>
			<Grid item container xs={12} mb={3}>
				<Paper item elevation={4}>
					<Grid item container xs={12}>
						<Grid item xs={12} container justifyContent={"center"} mt={3}>
							<Grid item>
								<Typography variant={"h4"}>
								Images
								</Typography>
							</Grid>
							<Grid item>
								<CropImage/>
							</Grid>
						</Grid>

					</Grid>
				</Paper>
			</Grid>

			<Grid item container xs={12}>
				<Paper elevation={4}>
					<Grid container>
						<Grid item xs={12} container justifyContent={"center"} mt={3}>
							<Grid item>
								<Typography variant={"h4"}>
								Bidding Setup
								</Typography>
							</Grid>
						</Grid>
						<Grid item xs={12} container justifyContent={"center"} mt={3}>
							<Grid item xs={12}>
								<CountdownTimer endTime={value}/>
							</Grid>
						</Grid>
						<Grid item xs={12} container justifyContent={"center"} mt={3}>
							<Grid item xs={12}>

							</Grid>
						</Grid>
						<Grid item xs={12} container justifyContent={"left"} mt={3} ml={3} mr={3}>
							<Grid item xs={5}>
								<Typography variant={"h6"} fontWeight={"bold"}>
								End Time
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography variant={"h6"} fontWeight={"bold"}>
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
											value={value}
											onChange={(newValue) => {
												setValue(newValue);
											}}
											minDateTime={moment()}
										/>
									</LocalizationProvider>
								</Grid>
							</Grid>
						</Grid>

						<Grid item xs={12} container justifyContent={"right"} m={3}>
							<Grid item >
								<Button variant={"contained"} color={"warning"}>Submit</Button>
							</Grid>
						</Grid>

					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
}