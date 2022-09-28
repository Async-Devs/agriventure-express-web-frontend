import React from "react";
import "./dashboard.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import Barchart from "../../components/Charts/Barchart";
import PieChart from "../../components/Charts/Piechart";
import Barchart from "../../components/Charts/Barchart";



function Dashboard(){

	// states
	
	//data access from axios

	//function
	// eslint-disable-next-line no-mixed-spaces-and-tabs

	return(

		<div>
			<Grid container spacing={2} marginTop="20px" margin="10px">
				<Grid item xs={6} md={8}>
					<Paper>
						Sri Lanka Map
					</Paper>
				</Grid>
				<Grid item xs={12} md={4} >
					<Paper >
						<PieChart/>
					</Paper>
				</Grid>
				<Grid item xs={12} md={8} padding="10px">
					<Paper>
						<Barchart/>
					</Paper>
				</Grid>
				<Grid item xs={6} md={4}>
					<Paper>
						skjdsakda
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default Dashboard;