import React from "react";
import {Grid, Paper, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {LinkedButtonRound} from "../../components/button/button";

function MarketplaceCard(props){
	const {imgSrc, itemName, minBid, quantity, itemId} = props;
	return(
		<Grid item width={300}>
			<Paper elevation={4} sx={{borderRadius: "10px"}}>
				<Grid container border={0} borderRadius={2} >
					<Grid item xs={12} container justifyContent={"center"} mt={0.5}>
						<Grid item xs={12} ml={0.5} mr={0.5}>
							<Paper 
								elevation={0}
								style={
									{
										borderRadius:"10px",
										backgroundImage: `url(${imgSrc})`,
										backgroundSize: "cover",
										backgroundPosition: "center", 
										backgroundRepeat:"no-repeat"
									}
								} >
								<Grid height={300}>
								</Grid>
							</Paper>
						</Grid>
					</Grid>
					<Grid item xs={12} container justifyContent={"center"}>
						<Grid item xs={12} mt={1}>
							<Typography variant={"h4"} align={"center"}>
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
	imgSrc: PropTypes.string.isRequired,
	itemName: PropTypes.string.isRequired,
	minBid: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	itemId: PropTypes.string.isRequired
};

export default MarketplaceCard;