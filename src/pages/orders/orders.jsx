import React from "react";
import Paper from "@mui/material/Paper";
import { Grid, ThemeProvider} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "../../components/theme/theme";
import OrderTable from "./orderTable";

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
					{/*<Toolbar />*/}
					<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
						
							
						{/* Recent Orders */}
						<Grid item xs={12}>
							<Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
								<OrderTable/>
							</Paper>
						</Grid>
						
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default Orders;