import React from "react";
import Countdown from "react-countdown";
import {Grid, Typography} from "@mui/material";
import PropTypes from "prop-types";

function padTo2Digits(num) {
	return num.toString().padStart(2, "0");
}

function convertMsToTime(milliseconds) {
	let seconds = Math.floor(milliseconds / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
	seconds = seconds % 60;
	minutes = minutes % 60;
	if (!Number.isNaN(hours) && !Number.isNaN(seconds) && !Number.isNaN(minutes)){
		return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m ${padTo2Digits(seconds)}s  Left`;
	}
	return "Invalid Date and Time";
}

function CountdownTimer(props){
	return(
		<Grid>
			<Countdown
				date={props.endTime}
				intervalDelay={1000}
				precision={3}
				renderer={renderer}
			/>
		</Grid>
	);
}

function renderer(props){
	if (props.total>0)props.api.start();
	return(
		<Grid container justifyContent={"center"}>
			<Grid item>
				<Typography variant={"h4"} color={props.total>20000?"primary":"error"}>
					{convertMsToTime(props.total)}
				</Typography>
			</Grid>
		</Grid>
	);
}

CountdownTimer.propTypes = {
	endTime: PropTypes.object
};

renderer.propTypes = {
	total: PropTypes.string
};

export default CountdownTimer;