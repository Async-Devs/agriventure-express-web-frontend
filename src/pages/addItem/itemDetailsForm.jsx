// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import {getCropTypes} from "../../services/croptypeServices";
import PropTypes from "prop-types";

function ItemDetailsForm(props){
	const [cropTypes, setCropTypes] = useState([]);
	const [cropType, setCropType] = useState("");
	const [quantity, setQuantity] = useState("");
	const [title, setTitle] = useState("");
	const [description, setdescription] = useState("");

	useEffect( () => {
		async function fetchData() {
			const {data} = await getCropTypes();
			setCropTypes(data);
		}
		fetchData();
	},[]);

	useEffect(()=>{
		const data = {
			title:title,
			cropType:cropType,
			quantity:quantity,
			description:description
		};
		props.getValues(data);
	},[props.onSubmit]);

	const handleChange = (event) => {
		setCropType(event.target.value);
	};

	const handleTitle = (event) => {
		const string = event.target.value;
		if(string.length <=50){
			setTitle(event.target.value);
		}
	};

	const handledescription = (event) => {
		const string = event.target.value;
		if(string.length <=10000){
			setdescription(event.target.value);
		}
	};

	const handleQuantity = (event) => {
		if(event.target.value==""){
			setQuantity(event.target.value);
		}else if(event.target.value>=0 && event.target.value<=100000000) {
			const value = Math.ceil(event.target.value);
			setQuantity(value);
		}
	};

	return(
		<Grid item container>
			<Grid container>
				<Grid item xs={12} container justifyContent={"center"}>
					<Grid item xs={12} container justifyContent={"center"} m={3}>
						<Grid item xs={12}>
							<Typography variant={"h5"} align={"left"}>
								Item Details
							</Typography>
						</Grid>
						<Grid item xs={12}>
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
							<TextField id="listing-title" label="Listing Title" variant="outlined" onChange={handleTitle} value={title}/>
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
								value={cropType}
								label="Crop Type"
								onChange={handleChange}
								MenuProps={{ PaperProps: { sx: { maxHeight: 150 } } }}
							>
								{cropTypes!=[]?cropTypes.map((element)=>{
									return(
										<MenuItem key={element._id} value={element.name}>{element.name}</MenuItem>
									);
								}):""}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<TextField id="quantity" label="Quantity" variant="outlined" type={"number"} onChange={handleQuantity} value={quantity}/>
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
								value={description}
								onChange={handledescription}
							/>
						</FormControl>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

ItemDetailsForm.propTypes={
	onSubmit: PropTypes.bool,
	getValues: PropTypes.func
};

export default ItemDetailsForm;
