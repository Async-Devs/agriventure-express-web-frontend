import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumbs, CircularProgress, Grid, Typography} from "@mui/material";
import ItemViewCard from "./itemViewCard";
import ItemBiddingCard from "./itemBiddingCard";
import Axios from "axios";
import NotFound from "../notFound";

function ItemView(){
	const [isLoading, setLoading] = useState(true);
	const [item, setItem] = useState();
	const itemId = useParams().itemId;
	useEffect(()=>{
		async function getItem(){
		// eslint-disable-next-line no-undef
			const data = await Axios.get(`${process.env.REACT_APP_API_URL}/items/${itemId}`);
			setItem(data.data);
			setLoading(false);
		}
		getItem();
	},[]);
	const breadcrumbs = [
		<Link to={"/marketplace"} key={1} style={{textDecoration: "none" ,color:"black"}}>
			MARKETPLACE
		</Link>,
		<Typography key="3" color="primary">
			BIDDING VIEW (ID: {itemId})
		</Typography>,
	];

	// If No valid Item
	if(item === "NoItem"){
		return (
			<Grid item align="center" height={500} xs={12}>
				<NotFound/>
			</Grid>
		);
	}

	if (isLoading){
		return (
			<Grid item align="center" height={500} xs={12}>
				<CircularProgress />
			</Grid>
		);
	}

	return(
		<Grid container spacing={2} p={5}>
			<Grid item md={12} maxHeight={50}>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
			</Grid>
			<Grid item md={6} xs={12}  minHeight={400} container>
				<ItemViewCard cropData = {
					{
						name: item.name,
						images: item.images,
						description: item.description,
						quantity: item.quantity,
						location: item.location
					}
				}/>
			</Grid>
			<Grid item md={6} xs={12} container>
				<ItemBiddingCard biddingData={
					{
						endTime: item.bid_end_time,
						bidArray: item.bidding_array,
						itemId: item._id,
						minimumBid: item.minimum_bid
					}

				}/>
			</Grid>
		</Grid>
	);
}

export default ItemView;
