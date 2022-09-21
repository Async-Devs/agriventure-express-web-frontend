import React from "react";
import ProfileView from "../../profile/profileView/profileView";
import {Alert} from "@mui/material";

function Finish(props){

	return(
		<div>
			{/* eslint-disable-next-line react/prop-types */}
			<div hidden={!props.success}>
				{/* eslint-disable-next-line react/prop-types */}
				{props.userType === 0 ? (
					<Alert severity="success">Your request is recorded. We will contact you throw an email</Alert>
				) : (
					<Alert severity="success">Account create successfully!</Alert>
				)}
			</div>

			{/* eslint-disable-next-line react/prop-types */}
			<div hidden={!props.fail}>
				<Alert severity="error">Something went wrong! Try again or contact an officer</Alert>
			</div>

			<ProfileView />
		</div>

	);
}

export default Finish;