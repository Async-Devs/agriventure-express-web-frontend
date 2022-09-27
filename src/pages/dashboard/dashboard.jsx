import React from "react";
import "./dashboard.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Barchart from "../../components/Barchart/Barchart";




function Dashboard(){

	// states
	
	//data access from axios

	//function
	// eslint-disable-next-line no-mixed-spaces-and-tabs

	return(
		<div>
			<Grid container spacing={2} marginTop="20px" padding="10px">
				<Grid item xs={12} md={8}>
					<Paper>
						<Barchart/>
					</Paper>
				</Grid>
				<Grid item xs={12} md={4}>
					<Paper>
						sdklfdksfbsdj
					</Paper>
				</Grid>
				<Grid item xs={12} md={12}>
					<Paper>
						skjdsakda
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Dashboard;