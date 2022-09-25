import React from "react";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import SelectInput from "../../../components/selectInput/selectInput";

function userType(props){

	return(
		<Grid container spacing={2} alignItems="flex-start">
			<Grid item sm={12}>
				<Typography variant="h5">Select User Type</Typography>
				<hr />
				<SelectInput name="userType" label="User Type" value={props.userType} onChange={props.handleChange} options={[{value:0,name:"Producer"}, {value:1,name:"Buyer"}]} multi={false}/>
			</Grid>

		</Grid>


	);
}

export default userType;