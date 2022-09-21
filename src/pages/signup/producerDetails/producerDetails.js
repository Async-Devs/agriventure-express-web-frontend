import React from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import Typography from "@mui/material/Typography";

function ProducerDetails(){

	return(
		<Grid container spacing={2} alignItems="flex-start">
			<Grid item xs={12}>
				<Typography variant="h5">Producer Details</Typography>
				<hr />
			</Grid>

			<Grid item xs={12} md={6}>
				<FormControl fullWidth>
					<InputLabel id="userType">User Type</InputLabel>
					<Select
						labelId="userType"
						id="userType"
						name="userType"
						value={""}
						label="User Type"
					>
						<MenuItem value={0}>Producer</MenuItem>
						<MenuItem value={1}>Buyer</MenuItem>
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={12} md={6}>
				<FormControl fullWidth>
					<InputLabel id="userType">User Type</InputLabel>
					<Select
						labelId="userType"
						id="userType"
						name="userType"
						value={""}
						label="User Type"
					>
						<MenuItem value={0}>Producer</MenuItem>
						<MenuItem value={1}>Buyer</MenuItem>
					</Select>
				</FormControl>
			</Grid>

		</Grid>


	);
}

export default ProducerDetails;