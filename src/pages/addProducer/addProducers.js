import React, {useState} from "react";
import {Divider, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextInput from "../../components/textInput/textInput";
import SelectInput from "../../components/selectInput/selectInput";
import Button from "@mui/material/Button";
import {Alert} from "@mui/lab";

function AddProducers(){

	const [firstName,setFirstName] = useState();
	const [lastName,setLastName] = useState();
	const [email,setEmail] = useState();
	const [telephoneNumber,setTelephoneNumber] = useState();
	const [nic,setNic] = useState();
	const [address,setAddress] = useState();
	const [fieldLocation,setFieldLocation] = useState();
	const [cropTypes,setCropTypes] = useState([]);
	const [username,setUsername] = useState();
	const [password,setPassword] = useState();
	const [confirmPassword,setConfirmPassword] = useState();
	const [error,setError] = useState();
	const [hidden,setHidden] = useState(true);

	function onChange(event){
		if(event.target.name === "firstName"){
			setFirstName(event.target.value);
		}else if(event.target.name === "lastName"){
			setLastName(event.target.value);
		}else if(event.target.name === "email"){
			setEmail(event.target.value);
		}else if(event.target.name === "telephone"){
			setTelephoneNumber(event.target.value);
		}else if(event.target.name === "nic"){
			setNic(event.target.value);
		}else if(event.target.name === "address"){
			setAddress(event.target.value);
		}else if(event.target.name === "location"){
			setFieldLocation(event.target.value);
		}else if(event.target.name === "cropTypes"){
			setCropTypes(event.target.value);
		}else if(event.target.name === "username"){
			setUsername(event.target.value);
		}else if(event.target.name === "password"){
			setPassword(event.target.value);
		}else if(event.target.name === "conPassword"){
			setConfirmPassword(event.target.value);
		}

		setHidden(true);
	}

	function validateEmail(email)
	{
		if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
		{
			return (true);
		}
		return (false);
	}

	function validateNonEmpty(text){
		return text !== undefined && text !== "";
	}

	function validateNonEmptyArray(list){
		return list.length !== 0;
	}

	function validatePhoneNumber(num)
	{
		if(/^\d{10}$/.test(num))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	function validateUsername(){
		//todo: need to check uniquness
		return (username !== undefined && username !== "");
	}

	function validatePassword(){
		return (password === confirmPassword);
	}

	function handleSubmit(){
		if(validateNonEmpty(firstName) && validateNonEmpty(lastName)
		&& validateNonEmpty(email) && validateNonEmpty(telephoneNumber)
		&& validateNonEmpty(nic) && validateNonEmpty(address)
		&& validateNonEmptyArray(fieldLocation) && validateNonEmptyArray(cropTypes)
		&& validateNonEmpty(username) && validateNonEmpty(password) && validateNonEmpty(confirmPassword)){
			if(!validateEmail(email)){
				setError("Invalid Email!");
				setHidden(false);
			}else if(!validatePhoneNumber(telephoneNumber)){
				setError("Invalid Telephone Number!");
				setHidden(false);
			}else if(!validateUsername(username)){
				setError("Username already exists!");
				setHidden(false);
			}else if(!validatePassword()){
				setError("Passwords are not match!");
				setHidden(false);
			}else if(password.length < 8){
				setError("Passwords is too short!");
				setHidden(false);
			}else{
				window.location.assign("/profile");
			}
		}else{
			setError("Fill all fields!");
			setHidden(false);
		}
	}

	return(
		<Container>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h2"><span style={{color: "green"}}>Producer</span> Form</Typography>
					<hr />
				</Grid>

				<Grid item xs={12} hidden={hidden}>
					<Alert severity="error">{error}</Alert>
				</Grid>

				<Grid item xs={12}>
					<Typography variant="h5" m={1}>Producer Details</Typography>
					<Divider />
					<Paper variant="elevation" elevation={3}>
						<Grid container mt={2} spacing={1} padding={1}>
							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="firstName" label="First Name" value={firstName} onChange={onChange} required={true}/>
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="lastName" label="Last Name" value={lastName} onChange={onChange} required={true}/>
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="email" label="Email" value={email} onChange={onChange} required={true} type="email"/>
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="telephone" label="Telephone Number" value={telephoneNumber} onChange={onChange} required={true} type="tel"/>
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="nic" label="NIC Number" value={nic} onChange={onChange} required={true}/>
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="address" label="Address" value={address} onChange={onChange} required={true} />
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="location" label="Field Location" value={fieldLocation} onChange={onChange} required={true} options={[{value :0,name:"seeduwa"}, {value :1,name:"katubedda"}]} multi={false}/>
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<SelectInput name="cropTypes" label="Crop Types" value={cropTypes} onChange={onChange} required={true} options={[{value :0,name:"carrot"}, {value :1,name:"rice"}]} multi={true}/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>

				<Grid item xs={12} mt={2}>
					<Typography variant="h5" m={1}>Logging Details</Typography>
					<Divider />
					<Paper variant="elevation" elevation={3}>
						<Grid container mt={2} spacing={1} padding={1}>
							<Grid item xs={12} >
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="username" label="User Name" value={username} onChange={onChange} required={true}/>
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="password" label="Password" value={password} onChange={onChange} required={true} type="password"/>
							</Grid>

							<Grid item xs={12} md={6}>
								{/* eslint-disable-next-line react/prop-types */}
								<TextInput name="conPassword" label="Confirm Password" value={confirmPassword} onChange={onChange} required={true} type="password"/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>

				<Grid item xs={12} mt={1} align="right">
					<Button type="submit" sx={{m:1}} variant="contained">Cancel</Button>
					<Button type="submit" sx={{m:1}} variant="contained" onClick={handleSubmit}>Submit</Button>
				</Grid>

			</Grid>
		</Container>

	);
}

export default AddProducers;