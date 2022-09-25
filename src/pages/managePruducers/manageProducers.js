import React from "react";
import {Divider, Grid} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Results from "./results/results";
import Paper from "@mui/material/Paper";
import PendingAccounts from "./pendingAccounts/pendingAccounts";

function ManageProducers(){

	return(
		<Container>
			<Grid container>
				<Grid item xs={12} mt={2}>
					<Typography variant="h4">Manage Producers</Typography>
					<Divider />
				</Grid>

				<Grid item xs={12}>
					<Paper elevation={3} >
						<Grid container padding={1}>
							<Grid item xs={12} mt={2}>
								<Typography variant="h5">Producers List</Typography>
								<Divider />
							</Grid>

							<Grid item xs={12} mt={1}>
								<Results />
								<Divider sx={{mt:1}} />
							</Grid>
						</Grid>
					</Paper>
				</Grid>

				<Grid item xs={12}>
					<Paper elevation={3} >
						<Grid container padding={1}>
							<Grid item xs={12} mt={2}>
								<Typography variant="h5">Pending Accounts</Typography>
								<Divider />
							</Grid>

							<Grid item xs={12} mt={1}>
								<PendingAccounts />
								<Divider sx={{mt:1}} />
							</Grid>
						</Grid>
					</Paper>
				</Grid>

			</Grid>
		</Container>

	);
}

export default ManageProducers;