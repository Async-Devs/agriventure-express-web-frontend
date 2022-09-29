import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumbs, Grid, Typography} from "@mui/material";
import ItemViewCard from "./itemViewCard";
import ItemBiddingCard from "./itemBiddingCard";

function ItemView(){
	const [item, setItem] = useState();
	useEffect()

	const itemId = useParams().itemId;
	const breadcrumbs = [
		<Link to={"/marketplace"} key={1} style={{textDecoration: "none" ,color:"black"}}>
			MARKETPLACE
		</Link>,
		<Typography key="3" color="primary">
			BIDDING VIEW (ID: {itemId})
		</Typography>,
	];

	return(
		<Grid container spacing={2} p={5}>
			<Grid item md={12} maxHeight={50}>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
			</Grid>
			<Grid item md={6} xs={12}  minHeight={400} container>
				<ItemViewCard/>
			</Grid>
			<Grid item md={6} xs={12} container>
				<ItemBiddingCard/>
			</Grid>
		</Grid>
	);
}

export default ItemView;
