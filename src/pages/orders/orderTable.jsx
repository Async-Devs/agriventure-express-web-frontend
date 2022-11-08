import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import CustomTable from "../../components/customTable/customTable";

function OrderTable(){
	//Documentation => https://mui.com/x/react-data-grid/column-definition/
	const columns = [
		{ field: "id", headerName: "Order ID", width: 150 },
		{ field: "date", headerName: "Date", width: 250 },
		{ field: "orderName", headerName: "Order name", width: 150 },
		{ field: "paymentStatus", headerName: "Payment Status", width: 150 },
		{ field: "deliveryStatus", headerName: "Delivery Status", width: 200 },
		{ field: "price", headerName: "Price(LKR)", width: 90},
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
		{ id: 1, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 2, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 3, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 4, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 5, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 6, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "OUT-FOR-DELIVERY",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 7, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 8, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 9, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 10, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 11, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 12, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
		{ id: 13, orderName: "Order Name", paymentStatus: "PROCESSING", deliveryStatus: "PROCESSING",  price: 35000, date: "2022-09-30T22:25:43.511+00:00"},
	];

	return(

		<CustomTable rows = {orderArray} columns = {columns} enableCheckBox={true}/>

	);
}

export default OrderTable;
