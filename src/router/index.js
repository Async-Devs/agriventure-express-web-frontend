import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
/*
* Order Inventory Subsystem - Achira
* Account Management/ Support Subsystem - Toxic Supun
* Data Aggregation and Visualization - Ransika
* */

function AppRouter(){

	//let userType = 1; //todo: usertype should get from jwt token

	return(
		<BrowserRouter>
			<>
				<Routes>
					<Route path = "" element={<Dashboard />} ></Route>
					<Route path = "/login" element={<Login />}></Route>
					<Route path = "/signup" element={<Signup />}></Route>


				</Routes>
			</>
		</BrowserRouter>
	);
}

export default AppRouter;
