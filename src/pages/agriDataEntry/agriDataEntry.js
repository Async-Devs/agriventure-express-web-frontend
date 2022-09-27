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
// import Location from "../../components/Location/location.json";

function AgriDataEntry(){

	// states
	const [fieldDistrict,setfieldDistrict] = useState();
	const [fieldCity,setfieldCity] = useState();
	const [cropTypes,setCropTypes] = useState();
	const [cropAmount,setCropAmount] = useState();
	const [error,setError] = useState();
	const [hidden,setHidden] = useState(true);

	//data access from axios

	//function
	function onChange(event){
		if(event.target.name === "cropAmount"){
			setCropAmount(event.target.value);
		}else if(event.target.name === "fieldDistrict"){
			setfieldDistrict(event.target.value);
		}else if(event.target.name === "fieldCity"){
			setfieldCity(event.target.value);
		}else if(event.target.name === "cropTypes"){
			setCropTypes(event.target.value);
		}

		setHidden(true);
	}

	function validateNonEmptyArray(list){
		return list.length !== 0;
	}
	function handleSubmit(){
		if (validateNonEmptyArray(cropTypes) && validateNonEmptyArray(fieldDistrict) && validateNonEmptyArray(cropAmount) && validateNonEmptyArray(fieldCity) ){
			setError("Fill all fields!");
			setHidden(false);
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
							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="fieldDistrict" label="Field District" value={fieldDistrict} onChange={onChange} required={true} options={[{value :0,name:"seeduwa"}, {value :1,name:"katubedda"}]} multi={false}/>
							</Grid>
							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="fieldCity" label="Field City" value={fieldCity} onChange={onChange} required={true} options={[{value :0,name:"seeduwa"}, {value :1,name:"katubedda"}]} multi={false}/>
							</Grid>
							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="cropTypes" label="Crop Type" value={cropTypes} onChange={onChange} required={true} options={[{value :0,name:"carrot"}, {value :1,name:"rice"}]} multi={false}/>
							</Grid>
							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="cropAmount" label="Crop Amount" value={cropAmount} onChange={onChange} required={true} options={[{value :0,name:"100"}, {value :1,name:"200"}]} multi={false}/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} mt={1} align="right">
					<Button type="submit" sx={{m:1}} variant="contained">Cancel</Button>
					<Button type="submit" sx={{m:1}} variant="contained" onClick={handleSubmit} >Submit</Button>
				</Grid>
			</Grid>
		</Container>

	);
}
export default AgriDataEntry;