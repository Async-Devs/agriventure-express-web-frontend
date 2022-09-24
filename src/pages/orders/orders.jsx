import React from "react";
import Paper from "@mui/material/Paper";
import {Grid, ThemeProvider} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "../../components/theme/theme";
import OrderTable from "./orderTable";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";


function Orders(){
	return(
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex" }}>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? theme.palette.grey[100]
								: theme.palette.grey[900],
						flexGrow: 1,
						height: "100vh",
						overflow: "auto",
					}}
				>


					<Grid container spacing={0}>
						<Grid item xs={12}>
							<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
								<Grid item xs={12}>
									<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
										<h1>Orders</h1>
										<Button variant="outlined" startIcon={<DeleteIcon/>} color={"error"}>
									Delete
										</Button>
										<OrderTable/>
									</Paper>
								</Grid>

							</Container>

						</Grid>

					</Grid>

				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default Orders;