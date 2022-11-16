import React, {useEffect, useState} from "react";
// import ProfileView from "./profileView/profileView";
import {
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {Link} from "react-router-dom";
import Axios from "axios";
import ProfileView from "./profileView/profileView";
import Container from "@mui/material/Container";
import {Alert} from "@mui/lab";
import authService from "../../services/auth.service";
// eslint-disable-next-line no-undef

function MyProfile(){

	const [open,setOpen] = useState(false);
	// const [username,setUsername]' = useState();
	const [userType,setUserType] = useState();
	const [isLoading,setIsLoading] = useState(true);
	const [firstName,setFirstName] = useState();
	const [lastName,setLastName] = useState();
	const [nic,setNic] = useState();
	const [email,setEmail] = useState();
	const [telNum,setTelNum] = useState();
	const [address,setAddress] = useState();
	const [location,setLocation] = useState();
	const [id,setId] = useState();
	const [isExsist,setIsExsist] = useState();

	useEffect(() => {

		async function getUser() {
			// eslint-disable-next-line no-undef
			const user = await Axios.get(`${process.env.REACT_APP_API_URL}/publicUsers/myProfile/`,
				{
					headers: { "x-auth-token": authService.getCurrentUser()
					}
				});
			if (user.data.success) {
				setUserType(user.data.user.login.userType);
				setId(user.data.user.login._id);
				setFirstName(user.data.user.firstName);
				setLastName(user.data.user.lastName);
				setNic(user.data.user.nic);
				setEmail(user.data.user.email);
				setTelNum(user.data.user.telNum);
				setAddress(user.data.user.address);
				if(user.data.user.login.userType === 0){
					setLocation(user.data.user.location.city);
				}
				setIsExsist(true);
			} else {
				setIsExsist(false);
				alert("Error occurred!");
			}
		}

		getUser();


		setIsLoading(false);
	},[]);

	function handleDelete(){
		//todo: check validity
		setOpen(true);
	}

	function handleClose(){
		setOpen(false);
	}

	function handleConDelete(){
		if(userType === 0){
			// eslint-disable-next-line no-undef
			Axios.delete(`${process.env.REACT_APP_API_URL}/producers/deleteById/${id}/${user_id}`).then( async (res ) => {
				if(!res.data.success){
					alert("Error occured!");
				}
			});
			window.location.assign("/");
		}else if(userType === 1){
			// eslint-disable-next-line no-undef
			Axios.delete(`${process.env.REACT_APP_API_URL}/buyers/deleteById/${id}/${user_id}`).then( async (res ) => {
				if(!res.data.success){
					alert("Error occured!");
				}
			});
			window.location.assign("/");
		}
		handleClose();
	}

	return(
		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			{isLoading ? (
				<Grid item align="center">
					<CircularProgress />
				</Grid>
			):(
				<Grid container justifyContent="center">

					<Grid item xs={12} hidden={isExsist}>
						<Alert severity="error" >User not found!</Alert>
					</Grid>

					<Grid item xs={12} hidden={!isExsist}>
						<ProfileView firstName = {firstName}
							lastName={lastName}
							email={email} nic={nic}
							address={address}
							telephoneNumber={telNum}
							location={location}
							userType={userType}/>
					</Grid>

					<Grid item xs={12} md={6} mt={2}  align="center" hidden={!isExsist}>
						<Paper elevation={3} sx={{width: "100%", p: "5px"}}>
							<Link to={"edit"}  style={{ textDecoration: "none" }}>
								<Button variant="outlined" color="primary" startIcon={<EditIcon />} sx={{m: "5px"}}>
									Edit
								</Button>
							</Link>
							<Button variant="outlined" onClick={handleDelete} color="error" startIcon={<DeleteIcon />}>
								Delete
							</Button>
						</Paper>
					</Grid>

					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">
							{"Are you sure?"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								Your profile will permanently delete from the system. you will not be
								able to recover your account!
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button onClick={handleConDelete} color="error" startIcon={<DeleteIcon />} autoFocus>
								Delete
							</Button>
						</DialogActions>
					</Dialog>

				</Grid>
			)}
		</Container>
	);
}

export default MyProfile;