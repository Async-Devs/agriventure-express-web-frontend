/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import "./dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Dashboard(){

	// states
	const rows = [
		createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
		createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
		createData("Eclair", 262, 16.0, 24, 6.0),
		createData("Cupcake", 305, 3.7, 67, 4.3),
		createData("Gingerbread", 356, 16.0, 49, 3.9),
	  // eslint-disable-next-line no-mixed-spaces-and-tabs
	  ];
	//data access from axios

	//function
	function createData(name, calories, fat, carbs, protein) {
		return { name, calories, fat, carbs, protein };
	  }

	return(
		<div>
			<Sidebar/>
			<Grid container spacing={2} marginTop="20px" padding="10px">
				<Grid item xs={12} md={8}>
					<Paper>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>Dessert (100g serving)</TableCell>
										<TableCell align="right">Calories</TableCell>
										<TableCell align="right">Fat&nbsp;(g)</TableCell>
										<TableCell align="right">Carbs&nbsp;(g)</TableCell>
										<TableCell align="right">Protein&nbsp;(g)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow
											key={row.name}
											sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
										>
											<TableCell component="th" scope="row">
												{row.name}
											</TableCell>
											<TableCell align="right">{row.calories}</TableCell>
											<TableCell align="right">{row.fat}</TableCell>
											<TableCell align="right">{row.carbs}</TableCell>
											<TableCell align="right">{row.protein}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Paper>
				</Grid>
				<Grid item xs={12} md={4}>
					<Paper>
						
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