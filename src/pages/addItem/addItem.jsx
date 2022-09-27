import React from "react";
import {Grid} from "@mui/material";
import ItemDetailsForm from "./itemDetailsForm";
import SetBiddingCard from "./setBiddingCard";

function AddItem(){
	return(
		<Grid container spacing={3} p={5}>
			{/*<Grid item md={12} maxHeight={50}>*/}
			{/*	<Breadcrumbs separator="›" aria-label="breadcrumb">*/}
			{/*		{breadcrumbs}*/}
			{/*	</Breadcrumbs>*/}
			{/*</Grid>*/}
			<Grid item md={6} xs={12}  minHeight={400} container>
				<ItemDetailsForm/>
			</Grid>
			<Grid item md={6} xs={12} container>
				<SetBiddingCard/>
			</Grid>
		</Grid>
	);
}

export default AddItem;