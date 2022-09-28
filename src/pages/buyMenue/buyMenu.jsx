import React from "react";
import {Grid} from "@mui/material";
import BuyMenuTable from "./buyMenuTable";

function BuyMenu(){
	return(
		<Grid container justifyContent={"center"} p={5}>
			<Grid item container spacing={5} p={4} xs={12} >
				<BuyMenuTable/>
			</Grid>
		</Grid>
	);
}

export default BuyMenu;