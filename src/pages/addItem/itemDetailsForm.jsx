// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import {getCropTypes} from "../../services/croptypeServices";

// eslint-disable-next-line no-unused-vars
function ItemDetailsForm(props){
	const [cropTypes, setCropTypes] = useState([]);
	const [age, setAge] = useState("");

	useEffect( () => {
		async function fetchData() {
			const {data} = await getCropTypes();
			setCropTypes(data);
		}
		fetchData();
	},[]);

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	console.log(cropTypes);

	return(
		<Grid item container>
			{/*<Paper elevation={4}>*/}
			<Grid container>
				<Grid item xs={12} container justifyContent={"center"}>
					<Grid item xs={12} container justifyContent={"center"} m={3}>
						<Grid item xs={12}>
							<Typography variant={"h5"} align={"left"}>
								Item Details
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
							<TextField id="listing-title" label="Listing Title" variant="outlined" />
						</FormControl>
					</Grid>
				</Grid>

				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Crop Type</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
								MenuProps={{ PaperProps: { sx: { maxHeight: 150 } } }}
							>
								{cropTypes!=[]?cropTypes.map((element)=>{
									return(
										<MenuItem key={element} value={element.name}>{element.name}</MenuItem>
									);
								}):""}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<TextField id="quantity" label="Quantity" variant="outlined" type={"number"}/>
						</FormControl>
					</Grid>
				</Grid>

				<Grid item xs={12} container justifyContent={"center"} m={3} >
					<Grid item xs={12}>
						<FormControl fullWidth>
							<TextField
								id="description"
								label="Description"
								variant="outlined"
								multiline
								maxRows={6}
							/>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
			{/*</Paper>*/}
		</Grid>
	);
}

export default ItemDetailsForm;
