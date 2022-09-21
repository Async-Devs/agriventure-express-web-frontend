import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";
import Orders from "../pages/orders/orders";
/*
* Order Inventory Subsystem - Achira
* Account Management/ Support Subsystem - Toxic Supun
* Data Aggregation and Visualization - Ransika
* */

function AppRouter(){

	return(
		<BrowserRouter>
			<>
				<Routes>
					<Route path = "" element={<Dashboard />} ></Route>
					<Route path = "/orders" element={<Orders/>} ></Route>


				</Routes>
			</>
		</BrowserRouter>
	);
}

export default AppRouter;
