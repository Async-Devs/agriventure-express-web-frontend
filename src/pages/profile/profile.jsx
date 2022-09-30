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
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {Link, useParams} from "react-router-dom";
import Axios from "axios";
import ProfileView from "./profileView/profileView";
import Container from "@mui/material/Container";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import {Alert} from "@mui/lab";

function Profile(){

	const {user_id} = useParams();


	const [open,setOpen] = useState(false);
	// const [username,setUsername] = useState();
	const [userType,setUserType] = useState();
	const [isLoading,setIsLoading] = useState(true);
	const [firstName,setFirstName] = useState();
	const [lastName,setLastName] = useState();
	const [nic,setNic] = useState();
	const [email,setEmail] = useState();
	const [telNum,setTelNum] = useState();
	const [address,setAddress] = useState();
	const [cropTypes,setCropTypes] = useState([]);
	const [location,setLocation] = useState();
	const [id,setId] = useState();
	const [isExsist,setIsExsist] = useState();
	const [isActive,setIsActive] = useState();

	useEffect(() => {

		async function isUser(){
			// eslint-disable-next-line no-undef
			const isExist = await Axios.get(`${process.env.REACT_APP_API_URL}/users/isExist/${user_id}`);
			setIsExsist(isExist.data.success);
		}

		isUser();


		async function getUser() {
			// eslint-disable-next-line no-undef
			const user = await Axios.get(`${process.env.REACT_APP_API_URL}/users/getById/`,{params: {id: user_id}});
			if (user.data.success) {
				setUserType(user.data.user.userType);
				setIsActive(user.data.user.isActive);
				setId(user.data.typeDetails._id);
				setFirstName(user.data.typeDetails.firstName);
				setLastName(user.data.typeDetails.lastName);
				setNic(user.data.typeDetails.nic);
				setEmail(user.data.typeDetails.email);
				setTelNum(user.data.typeDetails.telNum);
				setAddress(user.data.typeDetails.address);
				if(user.data.user.userType === 0){
					setCropTypes(user.data.typeDetails.cropTypes);
					setLocation(user.data.typeDetails.location.name);
				}

				// setUsername(user.data.typeDetails.userName);
			} else {
				alert("Error occurred!");
			}
		}

		getUser();


		setIsLoading(false);
	},[]);


	function handleEdit(){
		window.location.assign("/profile/edit");
	}

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
							cropTypes={cropTypes}
							userType={userType}/>
					</Grid>

					<Grid item xs={12} md={6} mt={2}  align="center" hidden={!isExsist}>
						<Paper elevation={3} sx={{width: "100%", p: "5px"}}>
							<div hidden={!isActive}>
								<Link to={"edit/"}  style={{ textDecoration: "none" }}>
									<Button variant="outlined" color="primary" startIcon={<EditIcon />} sx={{m: "5px"}}>
										Edit
									</Button>
								</Link>
								<Button variant="outlined" onClick={handleDelete} color="error" startIcon={<DeleteIcon />}>
									Delete
								</Button>
							</div>
							<div hidden={isActive}>
								<Button variant="outlined" onClick={handleEdit} color="primary" startIcon={<HowToRegIcon />} sx={{m: "5px"}}>
									Approve
								</Button>
								<Button variant="outlined" onClick={handleEdit} color="warning" startIcon={<ThumbDownAltIcon />} sx={{m: "5px"}}>
									Reject
								</Button>
							</div>


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

export default Profile;