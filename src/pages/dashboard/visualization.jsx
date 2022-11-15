import React, {useEffect, useState} from "react";
import "./dashboard.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Map from "../../components/map/map";
import Bargraph from "../../components/Charts/Bargraph";
import Linegraph from "../../components/Charts/Linegraph";
import Donutgraph from "../../components/Charts/Donutgraph";
import {getDistrictData} from "../../services/districtData";
import "@fontsource/montserrat";
import "./visualization.css";
import {getCropTypes} from "../../services/croptypeServices";
import SelectInput from "../../components/selectInput/selectInput";
import {getDistrictById} from "../../services/districtServices";
import {getAgriData} from "../../services/agridataServices";

function Visualization(){

	// states
	const [cropTypes, setCropTypes] = useState([]);
	const [clickedDistrict, setClickedDistrict] = useState("District name");
	const [state, setState] = useState({

		labels: ["Total Income", "Expenses", "Current Balance"],
		datasets: [{
			label: "Crop amounts around the country",
			backgroundColor: "rgba(54,255,0,0.71)",
			borderColor: "rgb(22,96,0)",
			borderWidth: 2,
			data: [0, 0, 0]

		}]
	});
	const [crop, setCrop] = React.useState("");

	const handleChange = (event) => {
		setCrop(event.target.value);
		console.log(crop);
	};

	// function showDistrictData(id){
	// 	setDistrictData(id);
	// }

	async function showoverallData() {
		const agridata = await getDistrictData();
		const data_list = agridata.data.map((agri_data) => ({
			crop_Type: agri_data.cropType,
			crop_Amount: agri_data.totalCropAmount
		}));
		const labels = [];
		const data = [];
		for (let i = 0; i < data_list.length; i++) {
			labels.push(data_list[i].crop_Type.name);
			data.push(data_list[i].crop_Amount);
		}

		setState({
			labels: labels,
			datasets: [{
				label: "Crop amounts around the country",
				backgroundColor: "rgba(54,255,0,0.71)",
				borderColor: "rgb(22,96,0)",
				borderWidth: 2,
				data: data

			}]
		});

	}

	async function updateData() {
		const agridata = await getAgriData();
		const data_list = agridata.data.map((agri_data) => ({
			crop_Type: agri_data.cropType,
			crop_Amount: agri_data.cropAmount
		}));
		const labels = [];
		const data = [];
		for (let i = 0; i < data_list.length; i++) {
			labels.push(data_list[i].crop_Type.name);
			data.push(data_list[i].crop_Amount);
		}

		setState({
			labels: labels,
			datasets: [{
				label: "Crop amounts around the country",
				backgroundColor: "rgba(54,255,0,0.71)",
				borderColor: "rgb(22,96,0)",
				borderWidth: 2,
				data: data

			}]
		});
	}

	useEffect( () => {
		showoverallData();
		async function getCrops(){
			const crop_names = await getCropTypes();
			setCropTypes(crop_names.data);
		}
		getCrops();

	}, []);
	// const [districtData, setDistrictData] = useState();

	//data access from axios


	//function
	// eslint-disable-next-line no-mixed-spaces-and-tabs
	async function showDistrictData(ditrictObj) {
		// console.log(ditrictObj.id);
		const dist = await getDistrictById(ditrictObj.id);
		setClickedDistrict(dist.data.name);
	}

	return(
		<div> <button onClick={updateData}>Click me</button>
			<Grid container spacing={5} justifyContent="center" sx={{marginTop:5}}>
				<Grid item xs={10} md={10} textAlign={"center"}>
					<Paper sx={{boxShadow: 5, padding:"25px"}}>
						<h2 style={{fontSize:"20px",fontFamily: "Montserrat", marginTop:"0px",marginBottom:"20px" }}>Overall Crop data in the country</h2>
						<Bargraph handleData={state} />
					</Paper>
				</Grid>
				<Grid item xs={10} md={10} textAlign={"center"}>
					<Paper sx={{boxShadow: 5, padding:"25px"}}>
						<div style={{display:"flex", justifyContent:"space-evenly"}}>
							<div><h2 style={{fontSize:"20px",fontFamily: "Montserrat", marginTop:"10px",marginBottom:"20px" }}>Crop sale data</h2></div>
							<div style={{minWidth:"150px"}}><SelectInput name="crop" label="crop" value={crop} onChange={handleChange} options={cropTypes} multi={false}/></div>
						</div>
						<Linegraph handleData={state} />
					</Paper>
				</Grid>
			</Grid>
			<div>
				<Grid container spacing={5} justifyContent="center" sx={{marginTop:5, boxShadow:10, padding:5, backgroundColor:"rgb(245,245,245)"}}>
					<Grid item xs={12}textAlign={"center"} align={"center"} marginTop={0}>
						<div><h1 style={{fontSize:40,fontFamily: "Montserrat", marginTop:"0px",marginBottom:"20px" }}>District Data</h1>
							<span style={{fontSize:30,fontFamily: "Montserrat", marginTop:"0px",marginBottom:"0px", color:"white", backgroundColor:"rgb(13,171,13)", padding:10, borderRadius:10 }}>{clickedDistrict}</span>
							<p style={{marginTop:20,marginBottom:"2px" }}>Select a district from map to view district data</p>
						</div>
					</Grid>
					<Grid item xs={10} md={7.44} textAlign={"center"}>
						<Paper sx={{boxShadow: 5, padding:"25px"}}>
							<h2 style={{fontSize:"20px",fontFamily: "Montserrat", marginTop:"0px",marginBottom:"0px" }}>Crop types and amount details in District</h2>
							<Bargraph handleData={state} />
						</Paper>
					</Grid>
					<Grid item xs={10} md={3} textAlign={"center"}>
						<Paper className="map-background" sx={{boxShadow: 5}}>
							<Map handleDistrictClick={showDistrictData}/>
						</Paper>
					</Grid>
					<Grid item xs={10} md={7.44} textAlign={"center"}>
						<Paper sx={{boxShadow: 5, padding:"25px"}}>
							<Linegraph handleData={state} />
						</Paper>
					</Grid>
					<Grid item xs={10} md={3} textAlign={"center"}>
						<Paper sx={{boxShadow: 5, padding:"25px"}}>
							<h2 style={{fontSize:"20px",fontFamily: "Montserrat", marginTop:"0px",marginBottom:"20px" }}>Crop type comparison</h2>
							<Donutgraph handleData={state} />
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}


export default Visualization;
