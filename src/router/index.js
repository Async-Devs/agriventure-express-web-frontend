import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";
import Orders from "../pages/orders/orders";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import Profile from "../pages/profile/profile";
import EditProfile from "../pages/editProfile/editProfile";
import HelpCenter from "../pages/helpCenter/helpCenter";
import OrderView from "../pages/orderView/orderView";
import ErrorPage from "../pages/notFound";
import AgriDataEntry from "../pages/agriDataEntry/agriDataEntry";
import ProducerDashboard from "../pages/producerDashboard/producerDashboard";
import Marketplace from "../pages/marketplace/marketplace";
import RefundRequests from "../pages/refundRequests/refundRequests";
import RefundRequestBuyer from "../pages/refundRequestBuyer/refundRequestBuyer";
import SupportRequests from "../pages/supportRequest/supportRequests";
import MySupport from "../pages/supportRequestsBuyer/mySupport";
import AddProducers from "../pages/addProducer/addProducers";
import ManageProducers from "../pages/managePruducers/manageProducers";
import ManageAccounts from "../pages/manageAccounts/manageAccounts";
import ItemView from "../pages/itemView/itemView";
import BuyMenu from "../pages/buyMenue/buyMenu";
import AddItem from "../pages/addItem/addItem";
import AgriDataManage from "../pages/agriDataManage/agriDataManage";
import MyProfile from "../pages/profile/myProfile";
import EditMyProfileForm from "../pages/editProfile/editProfileForm/editMyProfileForm";
import EditItem from "../pages/editItem/edititem";
import OrderCheckout from "../pages/orderCheckout/orderCheckout";
/*
* Order Inventory Subsystem - Achira
* Account Management/ Support Subsystem - Toxic Supun
* Data Aggregation and Visualization - Ransika
* */

function AppRouter(){

	// eslint-disable-next-line no-undef
	let type = 3;


	return(
		<BrowserRouter>
			<>
				<Routes>
					<Route path = "" element={<Dashboard/>} />
					<Route path = "/login" element={<Login/>}/>
					<Route path = "/signup" element={<Signup/>}/>
					<Route path = "*" element={<ErrorPage/>}/>

					{type === 0 ? (
						<Route path = "/producer" >
							<Route index element={<ProducerDashboard />}/>
							<Route path = "add-item" element={<AddItem/>}/>
							<Route path = "orders" >
								<Route index element={<Orders/>} />
								<Route path = ":id" element={<OrderView/>} />
							</Route>
							<Route path = "helpcenter" element={<HelpCenter/>}/>
							<Route path ="mySupport" element={<MySupport/>}/>
							<Route path = "myProfile">
								<Route index element={<MyProfile/>}/>
								<Route exact path = "edit" element={<EditMyProfileForm/>}/>
							</Route>
							<Route path ="refund" element={<RefundRequests/>}/>
						</Route>
					): type === 1 ? (
						<Route path = "/buyer">
							<Route path = "marketplace" >
								<Route index element={<Marketplace/>} />
								<Route path = ":itemId" element={<ItemView/>} />
							</Route>
							<Route path = "buy-menu" >
								<Route index element={<BuyMenu/>} />
								<Route path = ":id" element={<OrderView/>} />
							</Route>
							<Route path = "myProfile">
								<Route index element={<MyProfile/>}/>
								<Route exact path = "edit" element={<EditMyProfileForm/>}/>
							</Route>
							<Route path ="myRefund" element={<RefundRequestBuyer/>}/>
							<Route path = "items" >
								<Route index element={<BuyMenu/>} />
								<Route path = "edit-item/:id" element={<EditItem/>} />
							</Route>
							<Route path = "buy-menu" >
								<Route index element={<BuyMenu/>} />
								<Route path = ":id" element={<OrderView/>} />
								<Route path = "checkout/:id" element={<OrderCheckout/>} />
							</Route>
						</Route>


					): type === 2 ?(

						<Route path = "/officer" >
							<Route index element={<ManageProducers/>}/>
							<Route path ="addProducer" element={<AddProducers/>}/>
							<Route path ="supportManagement" element={<SupportRequests/>}/>
							<Route exact path = "profile/edit/:user_id" element={<EditProfile/>}/>
							<Route path = "profile/:user_id" element={<Profile/>}/>
							<Route path = "agriDataManage">
								<Route index element={<AgriDataManage/>}/>
								<Route path = "agridataentry" element={<AgriDataEntry/>}/>
							</Route>
							<Route path ="orderView" element={<OrderView/>}/>
						</Route>

					):type === 3 ?(
						<Route path = "/admin">
							<Route index element={<ManageAccounts/>}/>
						</Route>
					):(
						<Route path = "*" element={<ErrorPage/>}/>
					)}
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default AppRouter;
