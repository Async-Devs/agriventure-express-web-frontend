import React from "react";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextInput from "../../../components/textInput/textInput";
import SelectInput from "../../../components/selectInput/selectInput";

function ProducerDetails(props){

	return(
		<Grid container spacing={2} alignItems="flex-start">
			<Grid item xs={12}>
				<Typography variant="h5">Producer Details</Typography>
				<hr />
			</Grid>

			<Grid item xs={12} md={6}>
				{/* eslint-disable-next-line react/prop-types */}
				<TextInput name="firstName" label="First Name" value={props.firstName} onChange={props.handleChange} required={true}/>
			</Grid>

			<Grid item xs={12} md={6}>
				{/* eslint-disable-next-line react/prop-types */}
				<TextInput name="lastName" label="Last Name" value={props.lastName} onChange={props.handleChange} required={true}/>
			</Grid>

			<Grid item xs={12} md={6}>
				{/* eslint-disable-next-line react/prop-types */}
				<TextInput name="email" label="Email" value={props.email} onChange={props.handleChange} required={true} type="email"/>
			</Grid>

			<Grid item xs={12} md={6}>
				{/* eslint-disable-next-line react/prop-types */}
				<TextInput name="telephone" label="Telephone Number" value={props.telephone} onChange={props.handleChange} required={true} type="tel"/>
			</Grid>

			<Grid item xs={12} md={6}>
				{/* eslint-disable-next-line react/prop-types */}
				<TextInput name="nic" label="NIC Number" value={props.nic} onChange={props.handleChange} required={true}/>
			</Grid>

			<Grid item xs={12} md={6}>
				{/* eslint-disable-next-line react/prop-types */}
				<TextInput name="address" label="Address" value={props.address} onChange={props.handleChange} required={true} />
			</Grid>

			<Grid item xs={12} md={6}>
				{/* eslint-disable-next-line react/prop-types */}
				<SelectInput name="location" label="Field Location" value={props.location} onChange={props.handleChange} required={true} options={props.locationList} multi={false}/>
			</Grid>

			<Grid item xs={12} md={6}>
				{/* eslint-disable-next-line react/prop-types */}
				<SelectInput name="cropTypes" label="Crop Types" value={props.cropTypes} onChange={props.handleChange} required={true} options={props.cropList} multi={true}/>
				{/* eslint-disable-next-line react/prop-types */}
			</Grid>

		</Grid>


	);
}

export default ProducerDetails;