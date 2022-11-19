import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

export default function AddressForm() {
	return (
		<React.Fragment>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="firstName"
						name="firstName"
						label="First name"
						fullWidth
						autoComplete="given-name"
						variant="standard"
						value={props.nameOnCard}
						onChange={(event)=>{
							const input = event.target.value;
							if(input.length<25){
								props.setNameOnCard(event.target.value);
							}
						}}

					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="lastName"
						name="lastName"
						label="Last name"
						fullWidth
						autoComplete="family-name"
						variant="standard"
						value={props.nameOnCard}
						onChange={(event)=>{
							const input = event.target.value;
							if(input.length<25){
								props.setNameOnCard(event.target.value);
							}
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						id="address1"
						name="address1"
						label="Address line 1"
						fullWidth
						autoComplete="shipping address-line1"
						variant="standard"
						value={props.nameOnCard}
						onChange={(event)=>{
							const input = event.target.value;
							if(input.length<25){
								props.setNameOnCard(event.target.value);
							}
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="address2"
						name="address2"
						label="Address line 2"
						fullWidth
						autoComplete="shipping address-line2"
						variant="standard"
						value={props.nameOnCard}
						onChange={(event)=>{
							const input = event.target.value;
							if(input.length<25){
								props.setNameOnCard(event.target.value);
							}
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						required
						id="city"
						name="city"
						label="City"
						fullWidth
						autoComplete="shipping address-level2"
						variant="standard"
						value={props.nameOnCard}
						onChange={(event)=>{
							const input = event.target.value;
							if(input.length<25){
								props.setNameOnCard(event.target.value);
							}
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						id="state"
						name="state"
						label="State/Province/Region"
						fullWidth
						variant="standard"
						value={props.nameOnCard}
						onChange={(event)=>{
							const input = event.target.value;
							if(input.length<25){
								props.setNameOnCard(event.target.value);
							}
						}}
					/>
				</Grid>
				<Grid item xs={12} sm={6} >
					<TextField
						required
						id="zip"
						name="zip"
						label="Zip / Postal code"
						fullWidth
						autoComplete="shipping postal-code"
						variant="standard"
						value={props.nameOnCard}
						onChange={(event)=>{
							const input = event.target.value;
							if(input.length<25){
								props.setNameOnCard(event.target.value);
							}
						}}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}

AddressForm.propTypes = {
	firstname: PropTypes.string.isRequired,
	setFirstname: PropTypes.func.isRequired,
	lastname: PropTypes.string.isRequired,
	setLastname: PropTypes.func.isRequired,
	addressLn1: PropTypes.string.isRequired,
	setAddressLn1: PropTypes.func.isRequired,
	addressLn2: PropTypes.string,
	setAddressLn2: PropTypes.func.isRequired,
	city: PropTypes.string.isRequired,
	setCity: PropTypes.func.isRequired,
	district: PropTypes.string.isRequired,
	setDistrict: PropTypes.func.isRequired,
	zipCode: PropTypes.string.isRequired,
	setZipCode: PropTypes.func.isRequired
};
