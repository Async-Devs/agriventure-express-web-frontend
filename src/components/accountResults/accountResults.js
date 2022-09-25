import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Link from "@mui/material/Link";

const columns = [
	{ field: "id", headerName: "ID", width: 30 , renderCell: (params) => <Link href="/profile" color="inherit" underline="none">{params.row.id}</Link>},
	{
		field: "name",
		headerName: "Name",
		width: 200,
		editable: false,
		renderCell: (params) => <Link href="/profile" color="inherit" underline="none">{params.row.firstName + " " + params.row.lastName}</Link>
	},
	{
		field: "userName",
		headerName: "Username",
		type: "text",
		width: 200,
		editable: false,
		renderCell: (params) => <Link href="/profile" color="inherit" underline="none">{params.row.userName}</Link>
	},
	{
		field: "email",
		headerName: "Email",
		sortable: false,
		width: 200,
		renderCell: (params) => <Link href="/profile" color="inherit" underline="none">{params.row.email}</Link>
	}
];

const rows = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35, userName: "king of the north", email: "winterfell@gmail.com" },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, userName: "queen", email: "kingslanding@gmail.com"},
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, userName: "he he", email: "kingslanding@gmail.com" },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16, userName: "many face", email: "winterfell@gmail.com" },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, userName: "Mother of dragons", email: "dragonstone@gmail.com" },
	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
	{ id: 10, lastName: "Targaryen", firstName: "Daenerys", age: null, userName: "Mother of dragons", fieldLocation: "dragonstone" },
];

function AccountResults() {
	return (
		<Box sx={{ height: 650, width: "100%" }} align="center">
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[10]}

				disableSelectionOnClick
				experimentalFeatures={{ newEditingApi: true }}
			/>
		</Box>
	);
}

export default AccountResults;