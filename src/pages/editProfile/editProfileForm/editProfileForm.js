import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import { Card, CardContent, CircularProgress, Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextInput from "../../../components/textInput/textInput";
import SelectInput from "../../../components/selectInput/selectInput";
import SaveIcon from "@mui/icons-material/Save";
import Axios from "axios";
import {Link, useParams} from "react-router-dom";
import {Alert} from "@mui/lab";

function EditProfileForm(){

	const {user_id} = useParams();
	const [email,setEmail] = useState();
	const [telNo,setTelNo] = useState();
	const [address,setAddress] = useState();
	const [userType,setUserType] = useState(1);
	const [emailOrg,setEmailOrg] = useState();
	const [telNoOrg,setTelNoOrg] = useState();
	const [cropTypesOrg,setCropTypesOrg] =useState();
	const [error,setError] = useState();
	const [errorHidden,setErrorHidden] = useState(true);
	const [firstName,setFirstName] = useState();
	const [lastName,setLastName] = useState();
	const [nic,setNic] = useState();
	const [location,setLocation] = useState();
	const [addressOrg,setAddressOrg] = useState();
	const [isLoading,setIsLoading] = useState(true);
	const [userName,setUserName] = useState();
	const [cropList,setCropList] = useState([]);
	const [allCropList,setAllCropList] = useState([]);
	const [id,setId] = useState();


	useEffect(()=> {
		async function getUser() {
			// eslint-disable-next-line no-undef
			const user = await Axios.get(`${process.env.REACT_APP_API_URL}/users/getById/`,{params: {id: user_id}});
			if (user.data.success) {
				console.log(user.data.typeDetails);
				setUserType(user.data.user.userType);
				setId(user.data.typeDetails._id);
				setUserName(user.data.user.userName);
				setFirstName(user.data.typeDetails.firstName);
				setLastName(user.data.typeDetails.lastName);
				setNic(user.data.typeDetails.nic);
				setEmail(user.data.typeDetails.email);
				setEmailOrg(user.data.typeDetails.email);
				setTelNoOrg(user.data.typeDetails.telNum);
				setTelNo(user.data.typeDetails.telNum);
				setAddress(user.data.typeDetails.address);
				setAddressOrg(user.data.typeDetails.address);
				if(user.data.user.userType === 0){
					setLocation(user.data.typeDetails.location.name);
					setCropList(user.data.typeDetails.cropTypes.map(a => a._id));
					setCropTypesOrg(user.data.typeDetails.cropTypes.map(a => a._id));
				}
			} else {
				alert("Error occurred!");
			}
		}

		getUser();

		async function getCropList(){
			// eslint-disable-next-line no-undef
			const crops = await Axios.get(`${process.env.REACT_APP_API_URL}/cropTypes`);
			setAllCropList(crops.data);
		}
		getCropList();


		setIsLoading(false);
	},[]);

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
		return (email === emailOrg && telNo === telNoOrg && address === addressOrg && JSON.stringify(cropList) === JSON.stringify(cropTypesOrg));
	}

	function handleSubmit(event){
		event.preventDefault();
		if(validateNonEmpty(email) && validateNonEmpty(telNo) && validateNonEmpty(address) && (validateNonEmptyArray(cropList) || userType === 1)){
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
				if(userType === 0){
					const editValues = {
						id: id,
						email: email,
						telNum: telNo,
						address: address,
						cropTypes: cropList
					};
					// eslint-disable-next-line no-undef
					Axios.put(`${process.env.REACT_APP_API_URL}/producers/updateMyProfile`,editValues).then( async (res)=>{
						if(!res.data.success){
							alert("Error occured!");
						}
					});
				}else if(userType === 1){
					const editValues = {
						id: id,
						email: email,
						telNum: telNo,
						address: address
					};
					// eslint-disable-next-line no-undef
					Axios.put(`${process.env.REACT_APP_API_URL}/buyers/updateMyProfile`,editValues).then( async (res)=>{
						if(!res.data.success){
							alert("Error occured!");
						}
					});
				}
				window.location.assign("/profile/"+user_id);
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
			setCropList(event.target.value);
		}
	}

	return(
		<Container maxWidth={"sm"}>
			{isLoading ? (
				<Grid item align="center">
					<CircularProgress />
				</Grid>
			):(
				<div>
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
								<Typography variant="h6">{firstName + " " + lastName}</Typography>
								<Typography variant="h6">@{userName}</Typography>
							</Grid>
							<Grid item xs={12} sm={6} align="center">
								<Card variant="elevation" elevation={3} >
									<CardContent>
										<Typography variant="h6">NIC</Typography>
										<Typography variant="body2">{nic}</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} sm={6} align="center" hidden={userType === 1}>
								<Card variant="elevation" elevation={3}>
									<CardContent>
										<Typography variant="h6">Location</Typography>
										<Typography variant="body2">{location}</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Paper>

					<Paper variant="outlined" sx={{mt:"5pt", mb: "5pt"}}>
						<Grid container spacing={1} mt={1} padding={1}>

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
								<SelectInput name="cropTypes" label="Crop Types" value={cropList} onChange={handleChange} required={true} options={allCropList} multi={true}/>
							</Grid>

							<Grid item xs={12} align="center">
								<Link to={"/profile/"+ user_id} style={{ textDecoration: "none" }}>
									<Button type="button" variant="outlined" sx={{m:"2pt"}}>Cancel</Button>
								</Link>
								<Button type="submit" variant="outlined" onClick={handleSubmit} sx={{m:"2pt"}} startIcon={<SaveIcon />}>Update Profile</Button>
							</Grid>
						</Grid>
					</Paper>
				</div>
			)}
		</Container>
	);
}

export default EditProfileForm;