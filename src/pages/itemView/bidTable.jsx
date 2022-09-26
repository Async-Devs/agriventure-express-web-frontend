import React from "react";
import CustomTable from "../../components/customTable/customTable";
import {Grid} from "@mui/material";

function BidTable(){
	const columns = [
		{ field: "bidTime", headerName: "Timestamp", width: 200 },
		{ field: "bidderName", headerName: "Bidder", width: 200 },
		{ field: "bidAmount", headerName: "Bid Amount", width: 200}
	];
	const rows = [
		{
			"id": "633100ad32d9b946385ec3e6",
			"bidTime": "2022-10-26T14:23:50.236Z",
			"bidderName": "Chang Sloan",
			"bidAmount": 30324
		},
		{
			"id": "633100ad6f66ca57565cf79f",
			"bidTime": "2022-10-26T03:03:48.130Z",
			"bidderName": "Levy Richmond",
			"bidAmount": 339258
		},
		{
			"id": "633100ad094c1823e04e067f",
			"bidTime": "2022-10-26T09:34:10.626Z",
			"bidderName": "Donna Wynn",
			"bidAmount": 169014
		},
		{
			"id": "633100ad9df71d008c918edc",
			"bidTime": "2022-10-26T07:17:18.298Z",
			"bidderName": "Joan Randolph",
			"bidAmount": 71871
		},
		{
			"id": "633100ade4d259164b252e5a",
			"bidTime": "2022-10-26T16:03:20.078Z",
			"bidderName": "Lewis Bolton",
			"bidAmount": 270409
		},
		{
			"id": "633100ad8d5922ac5166ffd7",
			"bidTime": "2022-10-26T16:58:08.767Z",
			"bidderName": "Flossie Hancock",
			"bidAmount": 84036
		},
		{
			"id": "633100ad3b529b2b716c6d9e",
			"bidTime": "2022-10-26T17:44:57.663Z",
			"bidderName": "Marcie Cherry",
			"bidAmount": 79478
		},
		{
			"id": "633100ad90083a140ea7ed20",
			"bidTime": "2022-10-26T16:14:29.415Z",
			"bidderName": "Weiss Schmidt",
			"bidAmount": 236482
		},
		{
			"id": "633100ad6e16d72f831e72e6",
			"bidTime": "2022-10-26T11:15:55.504Z",
			"bidderName": "Letha Rowe",
			"bidAmount": 369664
		},
		{
			"id": "633100ad742dfad2e4a61b1d",
			"bidTime": "2022-10-26T01:44:25.973Z",
			"bidderName": "Mayer Gallegos",
			"bidAmount": 62778
		}
	];
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

export default BidTable;