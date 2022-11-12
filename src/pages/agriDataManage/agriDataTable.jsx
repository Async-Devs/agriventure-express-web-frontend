import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import CustomTable from "../../components/customTable/customTable";

import {CircularProgress} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useEffect, useState} from "react";
import {deleteData, getAgriData} from "../../services/agridataServices";

function deleteAgriData(id) {
	deleteData(id);
}

function agriDataTable(){
	//Documentation => https://mui.com/x/react-data-grid/column-definition/

	const [agriDataList,setAgriDataList] = useState([]);
	const [isLoading,setIsLoading] = useState(true);

	useEffect(()=>{
		async function getAgriDataList(){
			// eslint-disable-next-line no-undef
			const agriData = await getAgriData();
			setAgriDataList(agriData.data);
		}
		getAgriDataList();

		setIsLoading(false);
	},[]);

	const columns = [
		{ field: "id", headerName: "ID", width: 150 },
		{ field: "cropType", headerName: "Crop type", width: 150 },
		{ field: "fieldDistrict", headerName: "District", width: 150 },
		{ field: "fieldCity", headerName: "City", width: 150 },
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
				<Button onClick={()=>{deleteAgriData(params.id);}}
					color={"primary"}
					disableFocusRipple={true}
					variant="outlined"
					size="small"
					style={{ marginLeft: 10 }}
					tabIndex={params.hasFocus ? 0 : -1}
				>Delete</Button>
			)
		}

	];

	const agriData = agriDataList.map((agriData) => {
		return {id:agriData._id, cropType:agriData.cropType.name, fieldDistrict:agriData.district.name, fieldCity:agriData.city, amount:agriData.cropAmount, year:agriData.year};});

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
