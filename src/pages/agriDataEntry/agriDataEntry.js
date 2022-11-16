/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useEffect, useState} from "react";
import "./agridataentry.module.css";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import {Divider} from "@mui/material";
import SelectInput from "../../components/selectInput/selectInput";
import TextInput from "../../components/textInput/textInput";
import {getAllDistricts, getDistrictById} from "../../services/districtServices";
import {getCropTypes} from "../../services/croptypeServices";
import {addData} from "../../services/agridataServices";

function AgriDataEntry(){

	// states
	const [fieldDistrict,setFieldDistrict] = useState();
	const [districts,setDistricts] = useState([]);
	const [fieldCity,setFieldCity] = useState();
	const [f_City,setF_City] = useState();
	const [cropTypes,setCropTypes] = useState([]);
	const [croptype,setCroptype] = useState();
	const [cropAmount,setCropAmount] = useState();
	const [year,setYear] = useState();
	const [error,setError] = useState();
	const [success,setSuccess] = useState();
	const [errhidden,setErrHidden] = useState(true);
	const [suchidden,setSucHidden] = useState(true);

	const [cityList,setCityList]=useState([]);


	//data access from axios
	useEffect(()=>{
		async function getDistrictList(){
			const district_names = await getAllDistricts();
			setDistricts(district_names.data.districtList);
		}

		getDistrictList();
		async function getCrops(){
			const crop_names = await getCropTypes();
			setCropTypes(crop_names.data);
		}
		getCrops();

	},[]);

	//function
	async function onChange(event) {
		if (event.target.name === "cropAmount") {
			setCropAmount(event.target.value);
		} else if (event.target.name === "fieldDistrict") {
			setFieldDistrict(event.target.value);
			const cities = await getDistrictById(event.target.value);
			const city_list = cities.data.cities.map((city,index) => ({
				_id: index,
				name: city,
			}));
			setCityList(city_list);

		} else if (event.target.name === "fieldCity") {
			setFieldCity(event.target.value);
			setF_City(cityList[event.target.value].name);
			console.log(cityList[event.target.value].name);
		} else if (event.target.name === "cropTypes") {
			setCroptype(event.target.value);
		} else if (event.target.name === "year") {
			setYear(event.target.value);
		}
		setErrHidden(true);
	}

	function validateNonEmpty(text){
		return text !== undefined && text !== "";
	}

	function validateNonEmptyArray(list){
		return list.length !== 0;
	}
	function handleCancel(){
		window.location.assign("/officer/agridatamanage");
	}
	async function postData(data){
		const agriData = await addData(data);
		return agriData;
	}

	function handleSubmit(){
		if (!validateNonEmptyArray(cropTypes) || !validateNonEmptyArray(fieldDistrict) || !validateNonEmptyArray(fieldCity) || !validateNonEmpty(cropAmount) || !validateNonEmpty(year) ){
			setError("Fill all fields!");
			setErrHidden(false);
		}
		else{
			const agriDataBody = {
				year:year,
				cropType: croptype,
				district: fieldDistrict,
				city: f_City,
				cropAmount: cropAmount
			};
			// eslint-disable-next-line no-undef
			postData(agriDataBody);
			setSuccess("Data added successfully!");
			setSucHidden(false);

			setCropAmount([]);
			setYear([]);

			setFieldDistrict(null);
			setFieldCity(null);
			setCroptype(null);

		}

	}

	return(
		<Container>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h2"><span style={{color: "green"}}>Add Agriculture</span> Data</Typography>
					<hr />
				</Grid>

				<Grid item xs={12} hidden={errhidden}>
					<Alert severity="error" >{error}</Alert>
				</Grid>
				<Grid item xs={12} hidden={suchidden}>
					<Alert severity="success">{success}</Alert>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="h5" m={1}>Crop Details</Typography>
					<Divider />
					<Paper variant="elevation" elevation={3}>
						<Grid container mt={2} spacing={2} padding={2}>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}

								<SelectInput name="fieldDistrict" label="Field District" value={fieldDistrict} onChange={onChange} required={true} options={districts} multi={false}/>
							</Grid>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="fieldCity" label="Field City" value={fieldCity} onChange={onChange} required={true} options={cityList} multi={false}/>
							</Grid>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="cropTypes" label="Crop Type" value={croptype} onChange={onChange} required={true} options={cropTypes} multi={false}/>
							</Grid>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="cropAmount" label="Crop Amount" value={cropAmount} onChange={onChange} required={true}/>
							</Grid>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="year" label="Year" value={year} onChange={onChange} required={true}/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} mt={1} align="right">
					<Button type="submit" sx={{m:1}} variant="contained" onClick={handleCancel}>Cancel</Button>
					<Button type="submit" sx={{m:1}} variant="contained" onClick={handleSubmit}>Submit</Button>
				</Grid>
			</Grid>
		</Container>

	);
}
export default AgriDataEntry;
