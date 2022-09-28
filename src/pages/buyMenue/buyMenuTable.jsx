import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import CustomTable from "../../components/customTable/customTable";

function BuyMenuTable(){
	//Documentation => https://mui.com/x/react-data-grid/column-definition/
	const columns = [
		{ field: "id", headerName: "Order ID", width: 250 },
		{ field: "paymentStatus", headerName: "Payment Status", width: 150 },
		{ field: "deliveryStatus", headerName: "Delivery Status", width: 150 },
		{ field: "view",
			headerName: "View",
			sortable: false,
			filterable: false,
			align: "right",
			headerAlign: "center",
			renderCell: (params) => (
				<Link to={`${params.id}`} style={{ textDecoration: "none" }}>
					<Button
						color={"primary"}
						disableFocusRipple={true}
						variant="outlined"
						size="small"
						style={{ marginLeft: 10 }}
						tabIndex={params.hasFocus ? 0 : -1}
					>Open</Button>
				</Link>
			)
		}
	];


	// Back end API call here
	const orderArray = [
		{
			"id": "63321afd506d36a8791e7b6f",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd355afe87f98f80f5",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afdeae9e6c8d2859392",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd11bf98fc81d49af6",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd167bf1d3aa071985",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd85a08818f8cd7461",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afdd79c76d23e3c6ada",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd8f74679035db0170",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd347f2b128f236a1c",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd1c7ef7a179864a80",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd780e106de038760a",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afdcfde964ee99ad632",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd77ebdc4e299ec531",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afd954f05ec49e5e65e",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		},
		{
			"id": "63321afdecd09ca2806f2467",
			"paymentStatus": "PAID",
			"deliveryStatus": "DELIVERED"
		}
	];

	return(

		<CustomTable rows = {orderArray} columns = {columns} enableCheckBox={true}/>

	);
}

export default BuyMenuTable;