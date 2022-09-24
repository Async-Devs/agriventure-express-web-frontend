import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import CustomTable from "../../components/table/customTable";

function OrderTable(){
	//Documentation => https://mui.com/x/react-data-grid/column-definition/
	const columns = [
		{ field: "id", headerName: "Order ID", width: 150 },
		{ field: "firstName", headerName: "First name", width: 150 },
		{ field: "lastName", headerName: "Last name", width: 150 },
		{ field: "age", headerName: "Age", width: 90},
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
		{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
		{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
		{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
		{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
		{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
		{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
		{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
		{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
		{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 18, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 20, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 21, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 22, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 23, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 24, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 25, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 26, lastName: "Roxie", firstName: "Harvey", age: 65 },
	];

	return(
		
		<CustomTable rows = {orderArray} columns = {columns} enableCheckBox={true}/>

	);
}

export default OrderTable;