import React from "react";
import "./dashboard.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import PieChart from "../../components/Charts/Piechart";
import Map from "../../components/map/map";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {CardActionArea} from "@mui/material";
import buyerimg from "../../img/buyer.jpg";
import farmerimg from "../../img/farmer.jpg";
import mapimg from "../../img/map.png";

import Video from "./video";




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
												Agriventure Express already has more than 1500 farmers who are
										selling crops and making profits. Still growing the number of farmers.
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
												Agriventure Express users all around the world are rapidly increasing.
										With more than 100,000 buyers Agriventure Express is still growing large.
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
												Agriventure Express has been used to collect data from all around the country.
										Coverage will be increased within the next months.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
					<Grid item xs={12} md={3.9}>
						<Paper >
							<PieChart/>
						</Paper>
					</Grid>
					<Grid item xs={12} md={7.5}>
						<Paper>
							<Map/>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Dashboard;
