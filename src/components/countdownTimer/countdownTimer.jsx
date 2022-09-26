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
	return `${padTo2Digits(hours)}h 
	${padTo2Digits(minutes)}m ${padTo2Digits(seconds)}s`;
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
	return(
		<Grid container justifyContent={"center"}>
			<Grid item>
				<Typography variant={"h4"} color={props.total>20000?"primary":"error"}>
					{convertMsToTime(props.total)} Left
				</Typography>
			</Grid>
		</Grid>
	);
}

CountdownTimer.propTypes = {
	endTime: PropTypes.string
};

renderer.propTypes = {
	total: PropTypes.string
};

export default CountdownTimer;