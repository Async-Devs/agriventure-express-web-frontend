import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";
/*
* Order Inventory Subsystem - Achira
* Account Management/ Support Subsystem - Toxic Supun
* Data Aggregation and Visualization - Ransika
* */

function AppRouter(){

	let userType = 1; //todo: usertype should get from jwt token

	return(
		<BrowserRouter>
			<>
				<Routes>
					<Route path = "" element={<Dashboard />} ></Route>


				</Routes>
			</>
		</BrowserRouter>
	);
}

export default AppRouter;
