import React, {useEffect, useState} from "react";
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
import moment from "moment";

function AddItem(){
	const [Error, setError] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);
	const [isPost, setIsPost] = useState(false);

	const [open, setOpen] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [submissionDataBundle, setSubmissionDataBundle] = useState(
		{
			itemParams: null,
			biddingParams: null,
			locationParams: null,
			imageParams: null
		}
	);

	// eslint-disable-next-line no-unused-vars
	const [itemDetails, setItemDetails] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [biddingDetails, setBiddingDetails] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [locationDetails, setLocationDetails] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [imageDetails, setImageDetails] = useState(null);

	const [cropType, setCropType] = useState("");
	const [quantity, setQuantity] = useState("");
	const [title, setTitle] = useState("");
	const [description, setdescription] = useState("");

	const [minimumBid, setMinimumBid] = useState("");
	const [minimumBidStep, setMinimumBidStep] = useState("");
	const [endTime, setEndTime] = useState(moment());

	const [district, setDistrict] = useState("");
	const [city, setCity] = useState("");
	const [location, setLocation] = useState({lat: "x", lng: "x"});

	const [images, setImages] = useState([]);

	useEffect(()=>{
		console.log(submissionDataBundle);
	}, [isPost]);

	useEffect(()=>{
		const isReady = validateData();
		if(isReady){
			setOpen(true);
		}
	},[isSubmit]);

	const handleClickOpen = () => {
		onDataPrep();
		setError(false);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function validateData(){
		try{
			if(itemDetails.title === "" ||itemDetails.cropType === "" || itemDetails.quantity === ""){
				setError("Invalid Item Details");
				return false;
			}else if(biddingDetails.minimumBid === "" || biddingDetails.endTime === "" ){
				setError("Invalid Bidding Setup");
				return false;
			}else if(locationDetails.district === "" || locationDetails.city === "" || locationDetails.district === null || locationDetails.city === null ){
				setError("Invalid Location Details");
				return false;
			}else if(imageDetails.images <=0 ){
				setError("At least One image is required");
				return false;
			}
		}catch (e){
			setError("Empty Field");
			return false;
		}
		return true;
	}

	const breadcrumbs = [
		<Link to={"/producer"} key={1} style={{textDecoration: "none" ,color:"black"}}>
			MY DASHBOARD
		</Link>,
		<Typography key="3" color="primary">
			ADD ITEM
		</Typography>,
	];

	// function getItemData(data){
	// 	console.log(data);
	// 	setItemDetails(data);
	// }

	// function getBidData(data){
	// 	console.log(data);
	// 	setBiddingDetails(data);
	// }

	// function getLocationData(data){
	// 	console.log(data);
	// 	setLocationDetails(data);
	// }

	// function getImageData(data){
	// 	console.log(data);
	// 	setImageDetails(data);
	// }

	function onDataPrep(){
		setIsSubmit(!isSubmit);
	}

	function onConfim(){
		setIsPost(!isPost);
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
						<ItemDetailsForm
							title={title}
							cropType={cropType}
							quantity={quantity}
							description={description}
							setTitle={setTitle}
							setCropType={setCropType}
							setQuantity={setQuantity}
							setDescription={setdescription}
						/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4}>
						<SetBiddingCard
							setMinimumBid={setMinimumBid}
							setMinimumBidStep={setMinimumBidStep}
							setBidEndTime={setEndTime}
							minimumBid={minimumBid}
							minimumBidStep={minimumBidStep}
							bidEndTime={endTime}
						/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4}>
						<LocationForm
							setDistrict={setDistrict}
							setCity={setCity}
							setLocation={setLocation}
							district={district}
							city={city}
							location={location}
						/>
					</Paper>
				</Grid>
				<Grid item md={6} xs={12} minHeight={400} container>
					<Paper elevation={4} sx={{width:"100%"}}>
						<ImageForm
							images={images}
							setImages={setImages}
						/>
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
											{Error!=false?(
												<Grid item xs={12}>
													<Alert severity="warning">{Error}</Alert>
												</Grid> ):
												null
											}
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
