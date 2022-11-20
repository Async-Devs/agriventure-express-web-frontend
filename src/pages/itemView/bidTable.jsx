import React from "react";
import CustomTable from "../../components/customTable/customTable";
import {Grid, Typography} from "@mui/material";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";

function BidTable(props){
	const bidderArray  = props.bidderArray;
	const columns = [
		{ field: "bidTime", headerName: "Timestamp", width: 200 },
		{ field: "bidderName", headerName: "Bidder", width: 200 },
		{ field: "bidAmount", headerName: "Bid Amount", width: 200}
	];

	const rows = bidderArray.map((item)=>{
		return {
			"id": item._id,
			"bidTime": item.time_stamp,
			"bidderName": item.bidder_name,
			"bidAmount": item.bid_amount
		};
	});

	const noItemOverlay = ()=>{
		return(
			<Grid item align="center"  xs={12} minHeight={1200}>
				<Typography variant={"h5"}>
					No Biddings Available
				</Typography>
				<img height={250} src={"https://www.creativefabrica.com/wp-content/uploads/2021/01/04/Mustard-Sad-Vegetable-Cute-Kawaii-Graphics-7557389-1.jpg"}/>
			</Grid>
		);
	};

	return(
		<Grid>
			<Paper>
				<CustomTable
					rows={rows}
					columns={columns}
					disableToolBar={true}
					preSortUsing={
						{field:"bidTime", sort:"desc"}
					}
					customNoRowsOverlay={noItemOverlay()}
				/>
			</Paper>
		</Grid>
	);
}

BidTable.propTypes = {
	bidderArray: PropTypes.array.isRequired,
	user: PropTypes.number.isRequired
};

export default BidTable;
