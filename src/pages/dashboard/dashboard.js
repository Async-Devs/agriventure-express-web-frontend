import React from "react";
import "./dashboard.module.css";
import "./boxstyle.css";
import Grid from "@mui/material/Grid";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import {CardActionArea} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EventNoteIcon from "@mui/icons-material/EventNote";



import Video from "./video";
import Visualize from "./visualization";


function Dashboard(){

	// states

	//data access from axios


	//function
	// eslint-disable-next-line no-mixed-spaces-and-tabs

	return(

		<div>
			<div className="carousel">
				<Video/>
			</div>
			<div>
				<Grid container spacing={15} justifyContent="center" padding={10} marginTop={"-18%"}>
					<Grid item xs={12} md={6} lg={3} align="center" >
						<Grid container spacing={1.5} justifyContent="center" sx={{boxShadow:"5"}}>
							<Grid className="farmer" item xs={12} sx={{fontSize:"40px", height:"150px"}}>
							</Grid>
							<Grid item xs={8} align="left" sx={{fontSize:"40px", color:"green"}}>
								16
							</Grid>
							<Grid item xs={4} align="center" sx={{ color:"black"}} >
								<GroupsIcon sx={{ fontSize:"40px", padding:"5px"}}/>
							</Grid>
							<Grid item xs={12} align="left" sx={{fontWeight:"800",fontFamily:"Montserrat",fontSize:"20px", color:"rgb(105,105,105)", backgroundColor:"rgb(124,252,0,0.5)"}}>
								Farmers
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} md={6} lg={3} align="center" >
						<Grid container spacing={1.5} justifyContent="center" sx={{boxShadow:"5"}}>
							<Grid className="buyer" item xs={12} sx={{fontSize:"40px", height:"150px"}}>
							</Grid>
							<Grid item xs={8} align="left" sx={{fontSize:"40px", color:"green"}}>
								150
							</Grid>
							<Grid item xs={4} align="center" sx={{ color:"black"}} >
								<PersonAddIcon sx={{ fontSize:"40px", padding:"5px"}}/>
							</Grid>
							<Grid item xs={12} md={12} align="left" sx={{fontWeight:"800",fontFamily:"Montserrat",fontSize:"20px", color:"rgb(105,105,105)", backgroundColor:"rgb(124,252,0,0.5)"}}>
								Buyers
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} md={6}  lg={3} align="center" >
						<Grid container spacing={1.5} justifyContent="center" sx={{boxShadow:"5"}}>
							<Grid className="crop" item xs={12} sx={{fontSize:"40px", height:"150px"}}>
							</Grid>
							<Grid item xs={8} align="left" sx={{fontSize:"40px", color:"green"}}>
								26
							</Grid>
							<Grid item xs={4} align="center" sx={{ color:"black"}} >
								<EventNoteIcon sx={{ fontSize:"40px", padding:"5px"}}/>
							</Grid>
							<Grid item xs={12} align="left" sx={{fontWeight:"800",fontFamily:"Montserrat",fontSize:"20px", color:"rgb(105,105,105)", backgroundColor:"rgb(124,252,0,0.5)"}}>
								Crop types
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={12} md={6} lg={3} align="center" >
						<Grid container spacing={1.5} justifyContent="center" sx={{boxShadow:"5"}}>
							<Grid className="coverage" item xs={12} sx={{fontSize:"40px", height:"150px"}}>
							</Grid>
							<Grid item xs={8} align="left" sx={{fontSize:"40px", color:"green"}}>
								67%
							</Grid>
							<Grid item xs={4} align="center" sx={{ color:"black"}} >
								<TrendingUpIcon sx={{ fontSize:"40px", padding:"5px"}}/>
							</Grid>
							<Grid item xs={12} md={12} align="left" sx={{fontWeight:"800",fontFamily:"Montserrat",fontSize:"20px", color:"rgb(105,105,105)", backgroundColor:"rgb(124,252,0,0.5)"}}>
								Coverage
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Visualize/>
			</div>
		</div>
	);
}


export default Dashboard;
