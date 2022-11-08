import React from "react";
import {Grid, Paper, Typography} from "@mui/material";
import Carousel from "../../components/carousel/carousel";
import PropTypes from "prop-types";

function ItemViewCard(props){
	const cropData = props.cropData;
	const {name, description, images, location, quantity} = cropData;
	return(
		<Grid item container>
			<Paper elevation={4}>
				<Grid container p={1} >
					<Grid item xs={12} container justifyContent={"center"}>
						<Grid item>
							<Typography variant={"h4"}>
								{name}
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Carousel images={images}/>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h6"}>
								Description
							</Typography>
							<Typography variant={"body1"} align={"justify"}>
								{description}
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h6"}>
								Quantity: {quantity} kg
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"} mt={2}>
						<Grid item xs={12}>
							<Typography variant={"h6"}>
								Location: {location.city}
							</Typography>
						</Grid>
					</Grid>

				</Grid>
			</Paper>
		</Grid>
	);
}

ItemViewCard.propTypes = {
	cropData: PropTypes.object.isRequired
};

export default ItemViewCard;
