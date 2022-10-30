import React from "react";
import {Grid, Paper, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {LinkedButtonRound} from "../../components/button/button";
// import {Blurhash} from "react-blurhash";

function MarketplaceCard(props){
	const { imgSrc, itemName, minBid, quantity, itemId, city} = props;
	return(
		<Grid item width={300}>
			<Paper elevation={4} sx={{borderRadius: "10px"}}>
				<Grid container border={0} borderRadius={2} >
					<Grid item xs={12} container justifyContent={"center"} mt={0.5}>

					</Grid>
					<Grid item xs={12} container justifyContent={"center"}>
						<Grid item xs={12} mt={1}>
							<Typography variant={"h5"} align={"center"}>
								{itemName}
							</Typography>
						</Grid>
						<Grid item xs={12} mt={1}>
							<Typography variant={"h5"} align={"center"} fontWeight={"bolder"}>
								LKR {minBid}
							</Typography>
						</Grid>
						<Grid item xs={12} mt={1} mb={1}>
							<Typography variant={"body1"} align={"center"} fontWeight={"bold"}>
								Quantity : {quantity} kg
							</Typography>
						</Grid>
						<Grid item xs={12} mt={1} mb={1}>
							<Typography variant={"body1"} align={"center"} fontWeight={"bold"}>
								Location : {city}
							</Typography>
						</Grid>
						<Grid item xs={12} mt={2} mb={2} container justifyContent={"center"}>
							<Grid item >
								<LinkedButtonRound href={`${itemId}`} content={"Bid"}/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Grid>

	);
}

MarketplaceCard.propTypes = {
	imgSrc: PropTypes.string,
	itemName: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	minBid: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	itemId: PropTypes.string.isRequired
};

export default MarketplaceCard;
