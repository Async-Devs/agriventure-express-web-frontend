import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import CustomTable from "../../components/customTable/customTable";

import {CircularProgress} from "@mui/material";
import Grid from "@mui/material/Grid";
import Axios from "axios";
import {useEffect, useState} from "react";

function agriDataTable(){
	//Documentation => https://mui.com/x/react-data-grid/column-definition/

	const [agriDataList,setAgriDataList] = useState([]);
	const [isLoading,setIsLoading] = useState(true);

	useEffect(()=>{
		async function getAgriDataList(){
			// eslint-disable-next-line no-undef
			const agriData = await Axios.get(`${process.env.REACT_APP_API_URL}/dataEntry`);
			setAgriDataList(agriData.data);
		}
		getAgriDataList();

		setIsLoading(false);
	},[]);

	const columns = [
		{ field: "id", headerName: "Order ID", width: 150 },
		{ field: "cropName", headerName: "Crop name", width: 150 },
		{ field: "fieldLocation", headerName: "Field Location", width: 150 },
		{ field: "amount", headerName: "Amount", width: 90},
		{ field: "year", headerName: "Year", width: 90},
		{ field: "edit",
			headerName: "",
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
					>Edit</Button>
				</Link>
			)
		},
		{ field: "Delete",
			headerName: "",
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
					>Delete</Button>
				</Link>
			)
		}

	];


	// Back end API call here
	// const orderArray = [
	// 	{ cropName: "Beet", fieldLocation: "Mahanuwara", amount: 35, year:"2022" },
	// 	{ cropName: "Carrot", fieldLocation: "Kolonnawa", amount: 42 , year:"2022"},
	// 	{ cropName: "Leeks", fieldLocation: "Mahiyanganaya", amount: 45, year:"2022" },
	// 	{ cropName: "Tomato", fieldLocation: "Nuwara eliya", amount: 16 , year:"2022"},
	// 	{ cropName: "Rice", fieldLocation: "Panadura", amount: 88, year:"2022" },
	// 	{ cropName: "Beet", fieldLocation: "Jaffna", amount: 150 , year:"2022"}
	// ];
	const agriData = agriDataList.map((agriData) => {
		console.log(agriData);
		return {id:agriData._id, cropName:agriData.cropType.name, fieldLocation:agriData.location.name, amount:agriData.cropAmount, year:agriData.year};});
	console.log(agriData);

	return(
		<div>
			{isLoading ? (
				<Grid item align="center">
					<CircularProgress />
				</Grid>
			):(
				<div>

					<CustomTable rows = {agriData} columns = {columns} enableCheckBox={true}/>
				</div>
			)}
		</div>

	);
}

export default agriDataTable;
