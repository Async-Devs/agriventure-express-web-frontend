import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Divider from "@mui/material/Divider";

import logo from "../../img/logo.png";
import "./sidebar.module.css";
import authService from "../../services/auth.service";
import {useEffect, useState} from "react";
import {CircularProgress, Grid} from "@mui/material";



const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [isLoading,setLoading] = useState(true);

	var pages = ["Dashboard"];
	var settings = ["sign in","sign up"];

	useEffect(()=>{
		async function checkValidity(){
			authService.isAuthenticated();

		}

		checkValidity();
		setLoading(false);
	},[]);





	// eslint-disable-next-line react/prop-types
	const userType = authService.getCurrentUserType();

	if(userType === 0){
		pages = ["Dashboard", "My Dashboard", "Orders","Help Center"];
		settings = ["My Profile","Logout"];
	}else if(userType === 1){
		pages = ["Dashboard", "Marketplace", "My Refunds", "Orders"];
		settings = ["My Profile","Logout"];
	}else if(userType === 2){
		pages = ["Dashboard", "Manage Producers", "Support Management","Agri Data"];
		settings = ["Logout"];
	}else if(userType === 3){
		pages = ["Dashboard", "Manage Accounts"];
		settings = ["Logout"];
	}else{
		pages = ["Dashboard"];
		settings = ["sign in","sign up"];
	}

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (event) => {
		setAnchorElNav(null);
		if(event.target.name === "Help Center"){
			window.location.assign("/producer/helpCenter");
		}else if(event.target.name === "My Dashboard"){
			window.location.assign("/producer");
		}else if(event.target.name === "Orders" && userType==0){
			window.location.assign("/producer/orders");
		}else if(event.target.name === "Orders" && userType==1){
			window.location.assign("/buyer/buy-menu");
		}else if(event.target.name === "Dashboard"){
			window.location.assign("/");
		}else if(event.target.name === "Marketplace"){
			window.location.assign("/buyer/marketplace");
		}else if(event.target.name === "My Refunds"){
			window.location.assign("/buyer/myRefund");
		}else if(event.target.name === "Manage Producers"){
			window.location.assign("/officer/manageProducers");
		}else if(event.target.name === "Support Management"){
			window.location.assign("/officer/supportManagement");
		}else if(event.target.name === "Agri Data"){
			window.location.assign("/officer/agriDataManage");
		}else if(event.target.name === "Manage Accounts"){
			window.location.assign("/admin/manageAccounts");
		}
	};

	const handleCloseUserMenu = async (event) => {
		setAnchorElUser(null);
		if (event.target.innerHTML === "My Profile" && userType === 0) {
			window.location.assign("/producer/myProfile");
		} else if (event.target.innerHTML === "My Profile" && userType === 1) {
			window.location.assign("/buyer/myProfile");
		} else if (event.target.innerHTML === "sign in") {
			window.location.assign("/login");
		} else if (event.target.innerHTML === "sign up") {
			window.location.assign("/signup");
		} else if (event.target.innerHTML === "Logout") {
			await authService.logout();
			window.location.assign("/");
		}
	};

	return (
		<div>
			{isLoading ? (
				<Grid item align="center">
					<CircularProgress />
				</Grid>
			):(
				<AppBar position="static" style={{ background: "white" }}>
					<Container maxWidth="xl">
						<Toolbar disableGutters>
							<Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
								<img src={logo} alt="logo"  width={100}/>
							</Box>
							<Box sx={{ flexGrow: 1,display: { xs: "none", md: "flex" }}}>
								<div>
									<Typography
										variant="h6"
										noWrap
										component="a"
										href="/"
										sx={{
											mr: 2,
											display: { xs: "none", md: "flex" },
											fontFamily: "Segoe ui,cursive",
											fontWeight: 700,
											color: "black",
											textDecoration: "none",
										}}
									>
										Agriventure Express
									</Typography>
									<div style={{fontSize:10,color:"green"}}>Let us go green</div>
								</div>
							</Box>

							<Box sx={{ display: { xs:"none",sm:"none",md: "none", lg: "flex",marginTop:"8px",marginBottom:"8px" }}}>
								<div style={{display:"flex",marginTop:"8px"}}>
									<div style={{marginRight:"10px"}}>
										<PhoneInTalkOutlinedIcon style={{fontSize:"37px",color:"green"}}/>
									</div>
									<div style={{fontFamily:"Roboto,sans-serif",fontSize:16,color:"black",fontWeight:600}}>
										Telephone
										<div style={{fontFamily:"Arial, Helvetica, sans-serif",fontSize:14,color:"grey",fontWeight:500,marginTop:"5px"}}>
											+94 112 536228 / 29
										</div>
									</div>
								</div>
								<Divider orientation="vertical" flexItem sx={{ margin:"4px",marginLeft:"8px"}}/>

								<div style={{display:"flex",marginLeft:"30px",marginTop:"8px"}}>
									<div style={{marginRight:"10px"}}>
										<MailOutlineIcon style={{fontSize:"37px",color:"green"}}/>
									</div>
									<div style={{fontFamily:"Roboto,sans-serif",fontSize:16,color:"black",fontWeight:600}}>
										Email
										<div style={{fontFamily:"Arial, Helvetica, sans-serif",fontSize:14,color:"grey",fontWeight:500,marginTop:"5px"}}>
											agriventureexpress@gmail.com
										</div>
									</div>
								</div>
								<Divider orientation="vertical" flexItem sx={{ margin:"4px",marginLeft:"8px"}}/>

								<div style={{display:"flex", marginLeft:"30px"}}>
									<div style={{marginRight:"10px",marginTop:"8px"}}>
										<LocationOnOutlinedIcon style={{fontSize:"37px",color:"green"}}/>
									</div>
									<div style={{fontFamily:"Roboto,sans-serif",fontSize:16,color:"black",fontWeight:600}}>
										Office Address
										<div style={{fontFamily:"Arial, Helvetica, sans-serif",fontSize:14,color:"grey",fontWeight:500,marginTop:"5px"}}>
											Agriventure express, Katubedda
										</div>
										<div style={{fontFamily:"Arial, Helvetica, sans-serif",fontSize:14,color:"grey",fontWeight:500,marginTop:"2px"}}>
											Moratuwa
										</div>
									</div>
								</div>
							</Box>

							<Box sx={{ display: { xs: "flex", md: "none" }}}>
								<IconButton
									size="large"
									aria-label="account of current user"
									aria-controls="menu-appbar"
									aria-haspopup="true"
									onClick={handleOpenNavMenu}
									color="inherit"
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorElNav}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "left",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
									open={Boolean(anchorElNav)}
									onClose={handleCloseNavMenu}
									sx={{
										display: { xs: "block", md: "none" },
									}}
								>
									{pages.map((page) => (
										<MenuItem key={page} id={page} name={page} onClick={handleCloseNavMenu}>
											<Typography textAlign="center">{page}</Typography>
										</MenuItem>
									))}
								</Menu>
							</Box>
							<div style={{ justifyContent:"space-between",display:"flex",flexGrow:1}}>
								<div style={{display:"flex",flexGrow:1,marginLeft:"25%"}} >
									<div>
										<Box sx={{display: { xs: "flex", md: "none" }, mr: 1 }}>
											<img src={logo} alt="logo"  width={100}/>
										</Box>
									</div>
									<div>
										<Box sx={{display: { sm: "flex", xs:"none",md: "none" }}}>
											<div>
												<Typography
													variant="h6"
													noWrap
													component="a"
													href="/"
													sx={{
														mr: 2,
														display: { xs: "flex", md: "none" },
														fontFamily: "Segoe ui",
														fontWeight: 700,
														color: "black",
														textDecoration: "none",
													}}
												>
													Agriventure Express
												</Typography>
												<div style={{fontSize:10,color:"green"}}>Let us go green</div>
											</div>
										</Box>
									</div>
								</div>

								<div>
									<Box sx={{ marginTop:{lg:"4px",md:"8px",sm:"8px",xs:"8px"}}}>
										<Tooltip title="Open settings">
											<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
												<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
											</IconButton>
										</Tooltip>
										<Menu
											sx={{ mt: "45px" }}
											id="menu-appbar"
											anchorEl={anchorElUser}
											anchorOrigin={{
												vertical: "top",
												horizontal: "right",
											}}
											keepMounted
											transformOrigin={{
												vertical: "top",
												horizontal: "right",
											}}
											open={Boolean(anchorElUser)}
											onClose={handleCloseUserMenu}
										>
											{settings.map((setting) => (
												<MenuItem key={setting} onClick={handleCloseUserMenu}>
													<Typography textAlign="center">{setting}</Typography>
												</MenuItem>
											))}
										</Menu>
									</Box>
								</div>
							</div>
						</Toolbar>
					</Container>
					<Box className="click" sx={{ display: { xs: "none", md: "flex" }, backgroundColor: "green",justifyContent: "space-around"}}>
						{pages.map((page) => (
							<Button
								key={page}
								id={page}
								name={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" ,fontWeight:500,margin:"3px"}}
							>
								{page}
							</Button>

						))}
					</Box>
				</AppBar>
			)}
		</div>

	);
};
export default ResponsiveAppBar;
