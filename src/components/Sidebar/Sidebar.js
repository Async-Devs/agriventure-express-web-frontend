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

import logo from "../../img/logo.png";

var pages = ["Dashboard", "Marketplace", "Orders","Help Center"];
var settings = ["Account","Logout"];
const userType = 3;

if(userType === 0){
	pages = ["Dashboard", "My Dashboard", "Orders","Help Center"];
	settings = ["My Profile","Logout"];
}else if(userType === 1){
	pages = ["Dashboard", "Marketplace", "My Refunds"];
	settings = ["My Profile","Logout"];
}else if(userType === 2){
	pages = ["Dashboard", "Manage Producers", "Support Management","Agri Data"];
	settings = ["Logout"];
}else if(userType === 3){
	pages = ["Dashboard", "Manage Accounts"];
	settings = ["Logout"];
}



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
			window.location.assign("/producer/helpCenter");
		}else if(event.target.name === "My Dashboard"){
			window.location.assign("/producer");
		}else if(event.target.name === "Orders"){
			window.location.assign("/producer/orders");
		}else if(event.target.name === "Dashboard"){
			window.location.assign("/");
		}else if(event.target.name === "Marketplace"){
			window.location.assign("/buyer/marketplace");
		}else if(event.target.name === "My Refunds"){
			window.location.assign("/buyer/myRefund");
		}else if(event.target.name === "Manage Producers"){
			window.location.assign("/officer");
		}else if(event.target.name === "Support Management"){
			window.location.assign("/officer/supportManagement");
		}else if(event.target.name === "Agri Data"){
			window.location.assign("/officer/agriDataManage");
		}else if(event.target.name === "Manage Accounts"){
			window.location.assign("/admin");
		}
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" color="primary">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
						<img src={logo} alt="logo"  width={90}/>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "white",
							textDecoration: "none",
						}}
					>
						Agriventure Express
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
					<Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
						<img src={logo} alt="logo"  width={90}/>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page}
								id={page}
								name={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
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
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
