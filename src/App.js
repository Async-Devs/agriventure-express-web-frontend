import React from "react";

import AppRouter from "./router";
import "./App.css";
import theme from "./components/theme/theme";
import {ThemeProvider} from "@mui/material";

function App() {
	return (

		<ThemeProvider theme={theme}>
			<div className="App">
				<AppRouter/>
			</div>
		</ThemeProvider>
	);
}

export default App;