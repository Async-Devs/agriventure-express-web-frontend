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
					<Alert severity="success">Your request is recorded. Our officers will review and accept your account</Alert>
				) : (
					<Alert severity="success">Account create successfully!</Alert>
				)}
			</div>

			{/* eslint-disable-next-line react/prop-types */}
			<div hidden={!props.fail}>
				<Alert severity="error">Something went wrong! Try again or contact an officer</Alert>
			</div>

			{/* eslint-disable-next-line react/prop-types */}
			<ProfileView image={"https://res.cloudinary.com/drh02pftv/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1668790540/profilePictures/default_gerxri.jpg"} firstName={props.firstName} lastName={props.lastName} email={props.email} nic={props.nic} address={props.address} telephoneNumber={props.telephoneNumber} district={props.district} city={props.city} userType={props.userType}/>
		</div>

	);
}

export default Finish;