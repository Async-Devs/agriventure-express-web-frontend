import React from "react";
import "./dashboard.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PieChart from "../../components/Charts/Piechart";
import Barchart from "../../components/Charts/Barchart";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import buyerimg from "../../img/buyer.jpg";
import farmerimg from "../../img/farmer.jpg";
import mapimg from "../../img/map.png";
import CarouselComponent from "./carouselAgri";



function Dashboard(){

	// states
	
	//data access from axios

	//function
	// eslint-disable-next-line no-mixed-spaces-and-tabs

	return(
		
		<div>
			<div className="carousel">
				<CarouselComponent />
			</div>
			<div>
				<Grid container spacing={5} justifyContent="center">
					<Grid item xs={12} md={3} align="center">
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="160"
									image={farmerimg}
									alt="farmer"
								/>
								<CardContent >
									<Typography gutterBottom variant="h5" component="div">
												Over 1500 Farmers
									</Typography>
									<Typography variant="body2" color="text.secondary">
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={3} align="center">
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="160"
									image={buyerimg}
									alt="buyer"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
												Over 100,000 Buyers
									</Typography>
									<Typography variant="body2" color="text.secondary">
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={3} align="center">
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="160"
									marginTop="20"
									image={mapimg}
									alt="map"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
												67% Coverage
									</Typography>
									<Typography variant="body2" color="text.secondary">
												Lizards are a widespread group of squamate reptiles, with over 6,000
												species, ranging across all continents except Antarctica.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper >
							<PieChart/>
						</Paper>
					</Grid>
					<Grid item xs={12} md={7}>
						<Paper>
							<Barchart/>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Dashboard;