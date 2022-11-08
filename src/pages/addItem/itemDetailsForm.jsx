import React from "react";
import {Grid, TextField, Typography} from "@mui/material";
import TextInput from "../../components/textInput/textInput";
import PropTypes from "prop-types";

function ItemDetailsForm(props){

	return(
		<Grid item container>
			{/*<Paper elevation={4}>*/}
			<Grid container p={1} >
				<Grid item xs={12} container justifyContent={"center"}>
					<Grid item>
						<Typography variant={"h4"}>
								Add Item Details
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<TextInput name="cropType" label="Crop Type" required={true} value={props.cropType} onChange={props.onChange}/>
					</Grid>
				</Grid>
				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<TextInput name="quantity" label="Quantity" type={"number"} required={true} value={props.quantity} onChange={props.onChange}/>
					</Grid>
				</Grid>
				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<TextInput name="location" label="Location" required={true} value={props.location} onChange={props.onChange}/>
					</Grid>
				</Grid>
				<Grid item xs={12} container justifyContent={"center"} mt={3} ml={3} mr={3}>
					<Grid item xs={12}>
						<TextInput name="contactNumber" label="Contact Number" required={true} value={props.contact} onChange={props.onChange}/>
					</Grid>
				</Grid>
				<Grid item xs={12} container justifyContent={"center"} m={3} >
					<Grid item xs={12}>
						<TextField
							name="description"
							id="outlined-multiline-flexible"
							label="Description"
							multiline
							maxRows={6}
							value={props.description}
							onChange={props.onChange}
							required={true}
							fullWidth={true}
						/>
					</Grid>
				</Grid>
			</Grid>
			{/*</Paper>*/}
		</Grid>
	);
}

ItemDetailsForm.propTypes={
	onChange: PropTypes.func,
	cropType: PropTypes.string,
	quantity: PropTypes.number,
	location: PropTypes.string,
	contact: PropTypes.string,
	description: PropTypes.string
};

export default ItemDetailsForm;
