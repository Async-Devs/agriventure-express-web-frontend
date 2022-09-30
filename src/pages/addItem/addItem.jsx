import React, {useState} from "react";
import {Alert, Grid, Paper} from "@mui/material";
import ItemDetailsForm from "./itemDetailsForm";
import SetBiddingCard from "./setBiddingCard";
import moment from "moment";
import {addItem} from "../../services/itemServices";

function AddItem(){
	const [Error, setError] = useState(false);

	const [cropName, setCropName] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [location, setLocation] = useState("");
	const [contactNumber, setContactNumber] = useState( "");
	const [description, setDescription] = useState("");
	const [value, setValue] = useState(moment());
	const [minimumBid, setMinimumBid] = useState(0);


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

	function handleBidChange(event){
		let newValue = event.target.value;
		if(event.target.name === "minBid" && newValue>=0 && newValue <= 1000000000) {
			setMinimumBid(newValue);
		}
	}

	const handleSubmit =async (event)=>{
		event.preventDefault();
		setError("Test");
		const dataObject = {

			cropName:cropName,
			quantity:quantity,
			location:location,
			contactNumber:contactNumber,
			description:description,
			endTime: value,
			minimumBid:minimumBid
		};
		const result = await addItem(dataObject);
		console.log(result);
	};

	return(
		<Grid container spacing={3} p={5}>
			{/*<Grid item md={12} maxHeight={50}>*/}
			{/*	<Breadcrumbs separator="›" aria-label="breadcrumb">*/}
			{/*		{breadcrumbs}*/}
			{/*	</Breadcrumbs>*/}
			{/*</Grid>*/}
			{Error!=false?(
				<Grid item xs={12}>
					<Alert severity="warning">{Error}</Alert>
				</Grid> ):
				null
			}

			<Grid item md={6} xs={12} minHeight={400} container>
				<Paper elevation={4}>
					<ItemDetailsForm
						onChange={handleItemDetailsChange}
						cropType={cropName}
						quantity={quantity}
						location={location}
						contact={contactNumber}
						description={description}
					/>
				</Paper>
			</Grid>
			<Grid item md={6} xs={12} minHeight={400} container>
				<Paper elevation={4}>
					<SetBiddingCard
						minimumBid={minimumBid}
						endTime={value}
						setTime={setValue}
						onChange={handleBidChange}
						onSubmit={handleSubmit}/>
				</Paper>
			</Grid>
		</Grid>
	);
}

export default AddItem;
