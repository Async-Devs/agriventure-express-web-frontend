import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";
// import Orders from "../pages/orders/orders";
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
import MySupport from "../pages/supportRequestsProducer/mySupport";
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
import OfficerDashboard from "../pages/officerDashboard/officerDashboard";
import AddOfficer from "../pages/addOfficer/addOfficer";
import authService from "../services/auth.service";
/*
* Order Inventory Subsystem - Achira
* Account Management/ Support Subsystem - Toxic Supun
* Data Aggregation and Visualization - Ransika
*
*
* type 0 - producer
* type 1 - buyer
* type 2 - officer
* type 3 - admin
* */

function AppRouter(props){

	// eslint-disable-next-line no-undef
	let type = authService.getCurrentUserType();

	return(
		<BrowserRouter>
			<>
				<Routes>
					<Route path = "" element={<Dashboard/>} />
					{/* eslint-disable-next-line react/prop-types */}
					<Route path = "/login" element={<Login setUser={props.setUser}/>}/>
					<Route path = "/signup" element={<Signup/>}/>
					<Route path = "*" element={<ErrorPage/>}/>

					{type === 0 ? (
						<Route path = "/producer" >
							<Route index element={<ProducerDashboard />}/>
							<Route path = "add-item" element={<AddItem/>}/>
							<Route path = "orders" >
								<Route index element={<BuyMenu/>} />
								<Route path = ":id" element={<OrderView/>} />
							</Route>
							<Route path = "helpCenter">
								<Route index element={<HelpCenter/>}/>
								<Route path ="mySupport" element={<MySupport/>}/>
							</Route>

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
								<Route path = ":itemId" element={<ItemView user={type}/>} />
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
							<Route index element={<OfficerDashboard />} />
							<Route path="manageProducers">
								<Route index element={<ManageProducers/>}/>
								<Route path = "profile/:user_id">
									<Route index element={<Profile/>}/>
									<Route path = "edit" element={<EditProfile/>}/>
								</Route>
								<Route path ="addProducer" element={<AddProducers/>}/>
							</Route>

							<Route path ="supportManagement" element={<SupportRequests/>}/>
							<Route path ="officerDashboard" element={<OfficerDashboard/>}/>


							<Route path = "agriDataManage">
								<Route index element={<AgriDataManage/>}/>
								<Route path = "agridataentry" element={<AgriDataEntry/>}/>
							</Route>
							<Route path ="orderView" element={<OrderView/>}/>
						</Route>

					):type === 3 ?(
						<Route path = "/admin">
							<Route path = "manageAccounts">
								<Route index element={<ManageAccounts/>}/>
								<Route path ="addOfficer" element={<AddOfficer />} />
							</Route>
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
