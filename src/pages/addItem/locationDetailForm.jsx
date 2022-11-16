import React, {useEffect, useState} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {getAllDistricts} from "../../services/districtServices";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

// eslint-disable-next-line no-unused-vars
function LocationForm(props){
	const [districtArray, setDistrictArray] = useState([]);
	const [district, setDistrict] = useState("");
	const [cityArray, setCityArray] = useState([]);
	const [city, setCity] = useState("");
	const [location, setLocation] = useState({lat: "x", lng: "x"});

	useEffect( () => {
		async function fetchData() {
			const {data} = await getAllDistricts();
			setDistrictArray(data);
		}
		fetchData();
	},[]);

	useEffect( () => {
		const currentDistrict = districtArray.filter((ele)=>{
			return ele._id === district;
		});
		try{
			setCityArray(currentDistrict[0].cities);
			setCity("");
		}catch (e){
			setCity("");
		}
	},[district, districtArray]);

	const handleChangeDistrict = (event) => {
		setDistrict(event.target.value);
	};
	const handleChangeCity = (event) => {
		setCity(event.target.value);
	};
	console.log(districtArray);
	return(
		<Grid item container>
			{/*<Paper elevation={4}>*/}
			<Grid container>
				<Grid item xs={12} container justifyContent={"center"}>
					<Grid item xs={12} container justifyContent={"center"} m={3}>
						<Grid item xs={12}>
							<Typography variant={"h5"} align={"left"}>
								Location Details
							</Typography>
						</Grid>
						<Grid xs={12}>
							<hr
								style={{
									color: "black",
									backgroundColor: "black",
									height: 0.1
								}}
							/>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} container justifyContent={"center"} ml={3} mr={3}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">District</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={district}
								label="Age"
								onChange={handleChangeDistrict}
								MenuProps={{ PaperProps: { sx: { maxHeight: 150 } } }}
							>
								{districtArray!=[]?districtArray.map((element)=>{
									return(
										<MenuItem key={element._id} value={element._id}>{element.name}</MenuItem>
									);
								}):""}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">City</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={city}
								label="Age"
								onChange={handleChangeCity}
								MenuProps={{ PaperProps: { sx: { maxHeight: 150} } }}
								disabled={cityArray.length==0?true:false}
							>
								{cityArray.length!=0?cityArray.map((element)=>{
									return(
										<MenuItem key={element} value={element}>{element}</MenuItem>
									);
								}):("")}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<GoogleMap locationPointer={location} setPointer={setLocation}/>
					</Grid>
				</Grid>

			</Grid>
			{/*</Paper>*/}
		</Grid>
	);
}

LocationForm.propTypes={
	onChange: PropTypes.func,
	cropType: PropTypes.string,
	quantity: PropTypes.number,
	location: PropTypes.string,
	contact: PropTypes.string,
	description: PropTypes.string
};

export default LocationForm;
