import React, {useState} from "react";
import {
	Alert,
	Breadcrumbs,
	Dialog, DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	Paper,
	Stack,
	Typography
} from "@mui/material";
import ItemDetailsForm from "./itemDetailsForm";
import SetBiddingCard from "./setBiddingCard";
import Container from "@mui/material/Container";
import ImageForm from "./imageForm";
import LocationForm from "./locationDetailForm";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import WarningIcon from "@mui/icons-material/Warning";

function AddItem(){
	const [Error, setError] = useState(false);

	const [cropName, setCropName] = useState("");
	const [quantity, setQuantity] = useState("");
	const [location, setLocation] = useState("");
	const [contactNumber, setContactNumber] = useState( "");
	const [description, setDescription] = useState("");
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setError(false);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// eslint-disable-next-line no-unused-vars
	const [isSubmit, setIsSubmit] = useState(false);


	const breadcrumbs = [
		<Link to={"/producer"} key={1} style={{textDecoration: "none" ,color:"black"}}>
			MY DASHBOARD
		</Link>,
		<Typography key="3" color="primary">
			ADD ITEM
		</Typography>,
	];

	// eslint-disable-next-line no-unused-vars
	const handleSubmit =async (event)=>{
		event.preventDefault();
		setError("Test");
		const dataObject = {

			cropName:cropName,
			quantity:quantity,
			location:location,
			contactNumber:contactNumber,
			description:description,
		};
		// const result = await addItem(dataObject);
		console.log(dataObject);
	};

	// eslint-disable-next-line no-unused-vars
	function handleItemDetailsChange(event){
		if(event.target.name === "cropType"){
			setCropName(event.target.value);
		}else if(event.target.name === "quantity"){
			setQuantity(parseInt( event.target.value ));
		}else if(event.target.name === "location"){
			setLocation(event.target.value);
		}else if(event.target.name === "contactNumber"){
			setContactNumber(event.target.value);
		}else if(event.target.name === "description") {
			setDescription(event.target.value);
		}
	}

	function getBidData(data){
		console.log(data);
	}
	function getItemData(data){
		console.log(data);
	}
	function getLocationData(data){
		console.log(data);
	}
	function getImageData(data){
		console.log(data);
	}

	function onConfim(){
		setIsSubmit(!isSubmit);
	}

	const bidConfirmPopup = ()=>{
		return(
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Confirm Bid Amount ?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						You are about to
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant={"contained"} sx={{color:"white"}}>Discard</Button>
					<Button onClick={onConfim} autoFocus color={"error"} variant={"contained"}>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		);
	};

	return(
		<Container>
			<Grid container spacing={3} p={5} maxWidth={1600}>
				<Grid item md={12} maxHeight={50}>
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						{breadcrumbs}
					</Breadcrumbs>
				</Grid>
				{Error!=false?(
					<Grid item xs={12}>
						<Alert severity="warning">{Error}</Alert>
					</Grid> ):
					null
				}

				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4}>
						<ItemDetailsForm onSubmit={isSubmit} getValues={getItemData}/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4}>
						<SetBiddingCard onSubmit={isSubmit} getValues={getBidData}/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4}>
						<LocationForm onSubmit={isSubmit} getValues={getLocationData}/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4} sx={{width:"100%"}}>
						<ImageForm onSubmit={isSubmit} getValues={getImageData}/>
					</Paper>
				</Grid>
				<Grid item xs={12} minHeight={200} container>
					<Paper elevation={4} sx={{width:"100%"}}>
						<Grid container>
							<Grid item container xs={12} mb={3}>
								<Grid item container xs={12}>
									<Grid item xs={12} container justifyContent={"center"} m={3}>
										<Grid item xs={12}>
											<Typography variant={"h5"} align={"left"}>
												Actions
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
										<Grid item container xs={12} mt={3} justifyContent={"center"} spacing={3}>
											<Grid item xs={12}>
												<Stack direction="row" alignItems="center" gap={1} p={3}>
													<WarningIcon color={"warning"}/>
													<Typography textAlign={"left"} variant={"body1"}>Please verify all details before confirming. You cannot undo this action</Typography>
												</Stack>
											</Grid>
											<Grid item>
												<Button variant={"contained"} color={"warning"}>Discard</Button>
											</Grid>
											<Grid item>
												<Button variant={"contained"} color={"error"} onClick={handleClickOpen}>Confirm</Button>
											</Grid>
										</Grid>
									</Grid>

								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				{bidConfirmPopup()}
			</Grid>
		</Container>
	);
}

export default AddItem;
