import React from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Typography from "@mui/material/Typography";

function userType(props){

	return(
		<Grid container spacing={2} alignItems="flex-start">
			<Grid item sm={12}>
				<Typography variant="h5">Select User Type</Typography>
				<hr />
				<FormControl fullWidth>
					<InputLabel id="userType">User Type</InputLabel>
					<Select
						labelId="userType"
						id="userType"
						name="userType"
						value={props.userType !== undefined ? props.userType : ""}
						label="User Type"
						onChange={props.handleChange}
					>
						<MenuItem value={0}>Producer</MenuItem>
						<MenuItem value={1}>Buyer</MenuItem>
					</Select>
				</FormControl>
			</Grid>

		</Grid>


	);
}

export default userType;