import React, {useState} from "react";
import Container from "@mui/material/Container";
import {Alert, Card, CardContent, Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextInput from "../../../components/textInput/textInput";
import SelectInput from "../../../components/selectInput/selectInput";
import SaveIcon from "@mui/icons-material/Save";

function EditProfileForm(){

	const [email,setEmail] = useState("gmail@achira.com");
	const [telNo,setTelNo] = useState("0771391999");
	const [address,setAddress] = useState("No 404, Nugegoda");
	const [userType] = useState(0);
	const [cropTypes,setCropTypes] = useState([0]);
	const [emailOrg] = useState("gmail@achira.com");
	const [telNoOrg] = useState("0771391999");
	const [addressOrg] = useState("No 404, Nugegoda");
	const [cropTypesOrg] = useState([0]);
	const [error,setError] = useState();
	const [errorHidden,setErrorHidden] = useState(true);

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

	function validateNonEmptyArray(list){
		return list.length !== 0;
	}

	function validateUnchanged(){
		return (email === emailOrg && telNo === telNoOrg && address === addressOrg && JSON.stringify(cropTypes) === JSON.stringify(cropTypesOrg));
	}

	function handleCancel(){
		window.location.assign("/profile");
	}

	function handleSubmit(event){
		event.preventDefault();
		if(validateNonEmpty(email) && validateNonEmpty(telNo) && validateNonEmpty(address) && (validateNonEmptyArray(cropTypes) || userType === 1)){
			if(!validateEmail(email)){
				setError("Invalid Email Address!");
				setErrorHidden(false);
			}else if(!validatePhoneNumber(telNo)){
				setError("Invalid Telephone number!");
				setErrorHidden(false);
			}else if(validateUnchanged()){
				setError("Profile is already updated!");
				setErrorHidden(false);
			}else{
				//todo: update profile
				window.location.assign("/profile");
			}
		}else{
			setError("All fields should be completed!");
			setErrorHidden(false);
		}

	}

	function handleChange(event){
		if(event.target.name === "email"){
			setEmail(event.target.value);
		}else if(event.target.name === "telNo"){
			setTelNo(event.target.value);
		}else if(event.target.name === "address"){
			setAddress(event.target.value);
		}else if(event.target.name === "cropTypes"){
			setCropTypes(event.target.value);
		}
	}

	return(
		<Container maxWidth={"sm"}>
			<Paper variant="outlined" sx={{mt:"5pt", mb: "5pt"}}>
				<Grid container justifyContent="center" spacing={1}>
					<Grid item xs={12} justifyContent="center">
						<Typography variant="h5" align="center">Edit Profile</Typography>
					</Grid>
					<Grid item xs={12} align="center" justifyContent="center">
						<Avatar
							alt="Sample User"
							src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/57402301_2442775932439604_5030131054145437696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=zzDTAqXehJ0AX85Z8Bx&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT_PFF4lBDfe1k3PYYrNep5W-GdL0-UyIAiOyZiKSSv-iw&oe=6352AA3F"
							sx={{ width: 150, height: 150 }}
						/>
						<Button variant="outlined" component="label" sx={{mt:"5px"}}>
							Edit
							<input hidden accept="image/*" multiple type="file" />
						</Button>
						<Typography variant="h6">Achira Dias</Typography>
						<Typography variant="h6">@Invader99</Typography>
					</Grid>
					<Grid item xs={12} sm={6} align="center">
						<Card variant="elevation" elevation={3} >
							<CardContent>
								<Typography variant="h6">NIC</Typography>
								<Typography variant="body2">991391475J</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} align="center" hidden={userType === 1}>
						<Card variant="elevation" elevation={3}>
							<CardContent>
								<Typography variant="h6">Location</Typography>
								<Typography variant="body2">Nugegoda</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Paper>

			<Paper variant="outlined" sx={{mt:"5pt", mb: "5pt"}}>
				<Grid container spacing={1} mt={1}>

					<Grid item xs={12} hidden={errorHidden}>
						<Alert severity="error">{error}</Alert>
					</Grid>

					<Grid item xs={12} sm={6} justifyContent="center">
						<TextInput name="email" label="Email Address" value={email} onChange={handleChange} required={true}/>
					</Grid>

					<Grid item xs={12} sm={6} justifyContent="center">
						<TextInput name="telNo" label="Telephone Number" value={telNo} onChange={handleChange} required={true}/>
					</Grid>

					<Grid item xs={12} sm={6} justifyContent="center">
						<TextInput name="address" label="Address" value={address} onChange={handleChange} required={true}/>
					</Grid>

					<Grid item xs={12} sm={6} justifyContent="center" hidden={userType===1} >
						<SelectInput name="cropTypes" label="Crop Types" value={cropTypes} onChange={handleChange} required={true} options={[{value :0,name:"carrot"}, {value :1,name:"rice"}]} multi={true}/>
					</Grid>

					<Grid item xs={12} align="center">
						<Button type="button" variant="outlined" onClick={handleCancel} sx={{m:"2pt"}}>Cancel</Button>
						<Button type="submit" variant="outlined" onClick={handleSubmit} sx={{m:"2pt"}} startIcon={<SaveIcon />}>Update Profile</Button>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
}

export default EditProfileForm;