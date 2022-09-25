import React from "react";
import {useParams} from "react-router-dom";
import {Grid} from "@mui/material";

function ItemView(){

	const itemId = useParams().item_id;

	return(
		<Grid>
			
			<div>item view of item - {itemId}</div>
		</Grid>
	);
}

export default ItemView;