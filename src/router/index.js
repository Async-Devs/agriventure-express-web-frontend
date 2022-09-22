import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";
import Orders from "../pages/orders/orders";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import Profile from "../pages/profile/profile";
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
					<Route path = "/login" element={<Login />}></Route>
					<Route path = "/signup" element={<Signup />}></Route>
					<Route path= "/profile" element={<Profile />}></Route>


				</Routes>
			</>
		</BrowserRouter>
	);
}

export default AppRouter;
