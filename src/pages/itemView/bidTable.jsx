import React from "react";
import CustomTable from "../../components/customTable/customTable";
import {Grid} from "@mui/material";
import PropTypes from "prop-types";

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
			"bidderName": props.user!=3?"bidders' identities protected": item.bidder_name,
			"bidAmount": item.bid_amount
		};
	});

	return(
		<Grid>
			<CustomTable
				rows={rows}
				columns={columns}
				disableToolBar={true}
				preSortUsing={
					{field:"bidTime", sort:"desc"}
				}/>
		</Grid>
	);
}

BidTable.propTypes = {
	bidderArray: PropTypes.array.isRequired,
	user: PropTypes.number.isRequired
};

export default BidTable;
