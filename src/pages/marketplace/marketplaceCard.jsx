import React from "react";
import {Grid, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function MarketplaceCard(props){
	const {imgSrc, itemName, minBid, quantity} = props;
	return(
		<Grid item width={300}>
			<Paper elevation={4} sx={{borderRadius: "10px"}}>
				<Grid container border={0} borderRadius={2} >
					<Grid item xs={12} container justifyContent={"center"} mt={0.5}>
						<Grid item xs={12} ml={0.5} mr={0.5}>
							<Paper 
								elevation={2} 
								style={
									{
										borderRadius:"10px",
										backgroundImage: `url(${imgSrc})`,
										backgroundSize: "auto", 
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
								<Button 
									variant={"contained"} 
									size={"large"} 
									sx={
										{
											color:"white", 
											fontWeight:"bold", 
											borderRadius: "100px"
										}
									} 
									color={"primary"}>Bid</Button>
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
	quantity: PropTypes.number.isRequired
};

export default MarketplaceCard;