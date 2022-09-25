import React from "react";
import {Box, Button, Container, Paper, Typography} from "@mui/material";
import {Image} from "@mui/icons-material";

function MarketplaceCard(){
	return(
		<Box maxWidth={500} minWidth={200} height={"auto"} bgcolor={"pink"} >
			<Paper elevation={2}>
				<Container>
					
					<Image/>
					<Typography>
					Descriptiopn
					</Typography>
					<Typography>
					Price LKR 20000
					</Typography>
					<Button>Bid</Button>
				</Container>
			</Paper>
		</Box>
	);
}

export default MarketplaceCard;