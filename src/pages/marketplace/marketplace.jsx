import React from "react";
import { Grid, Pagination} from "@mui/material";
import MarketplaceCard from "./marketplaceCard";

function Marketplace(){
	return(
		<Grid container justifyContent={"center"} p={5}>
			<Pagination item count={10} shape="rounded" />
			<Grid item container spacing={4} p={4} xs={12} >
				{[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5].map((p)=>{
					return(
						<Grid container key={p} item xs={12} sm={6} md={4} lg={3} xl={2} justifyContent={"center"}>
							<MarketplaceCard imgSrc={"https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"} itemName={"Carrots"} minBid={4500000} quantity={1000}/>
						</Grid>
					);
				})}
			</Grid>
			<Pagination item count={10} shape="rounded" />
		</Grid>
	);
}

export default Marketplace;