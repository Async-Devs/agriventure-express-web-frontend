import React from "react";
import {Grid, Paper, Typography} from "@mui/material";
import Carousel from "../../components/carousel/carousel";

export default function ItemViewCard(){
	return(
		<Grid item container>
			<Paper elevation={2}>
				<Grid container p={1} >
					<Grid item xs={12} container justifyContent={"center"}>
						<Grid item>
							<Typography variant={"h4"}>
								Crop Name
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Carousel/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h6"}>
								Description
							</Typography>
							<Typography variant={"body1"} align={"justify"}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam,
								assumenda debitis deserunt dicta dolore dolorum eos fugiat magni maiores
								minima modi non officia porro, quaerat, quis reprehenderit ullam
								voluptatem!
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h6"}>
								Quantity: 12 mt
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h6"}>
								Location: Colombo
							</Typography>
						</Grid>
					</Grid>

				</Grid>
			</Paper>
		</Grid>
	);
}