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

import logo from "../../img/logo.png";
import "./sidebar.module.css";

const pages = ["Dashboard", "Marketplace", "Orders","Help Center"];
const settings = ["Account","Logout"];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (event) => {
		setAnchorElNav(null);
		if(event.target.name === "Help Center"){
			window.location.assign("/helpCenter");
		}
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
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

					<Box sx={{ display: { xs:"none",sm:"none",md: "none", lg: "flex" }}}>
						<div style={{display:"flex",marginTop:"8px"}}>
							<div style={{marginRight:"10px"}}>
								<PhoneInTalkOutlinedIcon style={{fontSize:"37px",color:"green"}}/>
							</div>
							<div style={{fontFamily:"Roboto,sans-serif",fontSize:16,color:"black",fontWeight:600}}>
							Telephone
								<div style={{fontFamily:"Arial, Helvetica, sans-serif",fontSize:14,color:"grey",fontWeight:500}}>
							+94 112 536228 / 29
								</div>
							</div>
						</div>

						<div style={{display:"flex",marginLeft:"30px",marginTop:"8px"}}>
							<div style={{marginRight:"10px"}}>
								<MailOutlineIcon style={{fontSize:"37px",color:"green"}}/>
							</div>
							<div style={{fontFamily:"Roboto,sans-serif",fontSize:16,color:"black",fontWeight:600}}>
							Email
								<div style={{fontFamily:"Arial, Helvetica, sans-serif",fontSize:14,color:"grey",fontWeight:500}}>
								agriventureexpress@gmail.com
								</div>
							</div>
						</div>

						<div style={{display:"flex", marginLeft:"30px"}}>
							<div style={{marginRight:"10px",marginTop:"8px"}}>
								<LocationOnOutlinedIcon style={{fontSize:"37px",color:"green"}}/>
							</div>
							<div style={{fontFamily:"Roboto,sans-serif",fontSize:16,color:"black",fontWeight:600}}>
							Office Address
								<div style={{fontFamily:"Arial, Helvetica, sans-serif",fontSize:14,color:"grey",fontWeight:500}}>
								Agriventure express, Katubedda
								</div>
								<div style={{fontFamily:"Arial, Helvetica, sans-serif",fontSize:14,color:"grey",fontWeight:500}}>
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
	);
};
export default ResponsiveAppBar;
