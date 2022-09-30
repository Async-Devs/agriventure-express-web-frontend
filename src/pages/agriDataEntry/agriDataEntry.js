/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from "react";
import "./agridataentry.module.css";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import {Alert} from "@mui/lab";
import {Divider} from "@mui/material";
import SelectInput from "../../components/selectInput/selectInput";
import Location from "../../components/Location/location.json";
import TextInput from "../../components/textInput/textInput";
import Axios from "axios";

function AgriDataEntry(){

	// states
	const [fieldDistrict,setFieldDistrict] = useState([]);
	const [fieldCity,setFieldCity] = useState([]);
	const [cropTypes,setCropTypes] = useState([]);
	const [cropAmount,setCropAmount] = useState();
	const [year,setYear] = useState();
	const [error,setError] = useState();
	const [hidden,setHidden] = useState(true);
	const district = Object.keys(Location);

	const [success,setSuccess] = useState(false);
	const [fail,setFail] = useState(false);

	const [cityList,setCityList]=useState([]);

	//data access from axios

	//function
	function onChange(event){
		if(event.target.name === "cropAmount"){
			setCropAmount(event.target.value);
		}else if(event.target.name === "fieldDistrict"){
			setFieldDistrict(event.target.value);
			const list = [];
			for (let i =0; i<=Location[event.target.value].cities.length;i++){
				list.push({
					value:Location[event.target.value].cities[i],
					name: Location[event.target.value].cities[i]
				});
			}
			setCityList(list);
		}else if(event.target.name === "fieldCity"){
			setFieldCity(event.target.value);
		}else if(event.target.name === "cropTypes"){
			setCropTypes(event.target.value);
		}
		else if(event.target.name === "year"){
			setYear(event.target.value);
		}
		setHidden(true);
	}

	function generateDistrict(){
		const list=[];
		for (let i =0; i<=district.length;i++){
			list.push({
				value:district[i],
				name: district[i]
			});
		}
		return list;
	}

	function validateNonEmpty(text){
		return text !== undefined && text !== "";
	}

	function validateNonEmptyArray(list){
		return list.length !== 0;
	}
	function handleCancel(){
		window.location.assign("/agridatamanage");
	}

	function handleSubmit(){
		if (!validateNonEmptyArray(cropTypes) || !validateNonEmptyArray(fieldDistrict) || !validateNonEmptyArray(fieldCity) || !validateNonEmpty(cropAmount) || !validateNonEmpty(year) ){
			setError("Fill all fields!");
			setHidden(false);
		}
		else{
			const agriDataBody = {
				cropType: cropTypes,
				cropAmount: cropAmount,
				location: fieldCity,
				year:year
			};
			// eslint-disable-next-line no-undef
			Axios.post(`${process.env.REACT_APP_API_URL}/producers`,agriDataBody).then(async (res)=>{
				if(!res.data.success){
					alert("Error occured!");
				}else{
					setSuccess(true);
					setFail(false);
				}
			});
		}

	}

	return(
		<Container>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h2"><span style={{color: "green"}}>Add Agriculture</span> Data</Typography>
					<hr />
				</Grid>

				<Grid item xs={12} hidden={hidden}>
					<Alert severity="error">{error}</Alert>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="h5" m={1}>Crop Details</Typography>
					<Divider />
					<Paper variant="elevation" elevation={3}>
						<Grid container mt={2} spacing={2} padding={2}>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}

								<SelectInput name="fieldDistrict" label="Field District" value={fieldDistrict} onChange={onChange} required={true} options={generateDistrict()} multi={false}/>
							</Grid>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="fieldCity" label="Field City" value={fieldCity} onChange={onChange} required={true} options={cityList} multi={false}/>
							</Grid>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="cropTypes" label="Crop Type" value={cropTypes} onChange={onChange} required={true} options={[{value :0,name:"carrot"}, {value :1,name:"rice"}]} multi={false}/>
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
					<Button type="submit" sx={{m:1}} variant="contained" onClick={handleSubmit} success={success} fail={fail}>Submit</Button>
				</Grid>
			</Grid>
		</Container>

	);
}
export default AgriDataEntry;
