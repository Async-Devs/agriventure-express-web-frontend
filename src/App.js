import React from "react";
import AppRouter from "./router";
import "./App.css";
import theme from "./components/theme/theme";
import {Grid, ThemeProvider} from "@mui/material";
import Footer from "./components/footer/footer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {


	return (

		<ThemeProvider theme={theme}>
			<div className="App">
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Sidebar/>
					</Grid>
					<Grid item xs={12}>
						<AppRouter/>
					</Grid>
					<Grid item xs={12}>
						<Footer />
					</Grid>
				</Grid>



			</div>
		</ThemeProvider>
	);
}

export default App;