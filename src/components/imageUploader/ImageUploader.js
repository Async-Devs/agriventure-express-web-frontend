import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import {Card, Grid, LinearProgress} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Axios from "axios";
import authService from "../../services/auth.service";
import CardMedia from "@mui/material/CardMedia";

function ImageUploader(props){
	const [picture,setPicture] = useState();
	const [url,setUrl] = useState(props.imageURL);
	const [isChanged,setIsChanged] = useState(false);
	// const [uploading,setUploading] = useState(false);
	const [showProgress,setShowProgress] = useState(false);

	useEffect(()=>{
		setUrl(props.imageURL);
	},[props.imageURL]);

	function setFileToBase(file){
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => (setPicture(reader.result));
	}

	function hanldeChange(event){
		const file  = event.target.files[0];
		setFileToBase(file);
		setUrl(URL.createObjectURL(file));
		setIsChanged(true);
	}

	async function handleUpload() {
		await setShowProgress(true);
		const form = {
			picture: picture,
			folder: props.folderName,
			fileName: props.fileName
		};
		// eslint-disable-next-line no-undef
		Axios.post(`${process.env.REACT_APP_API_URL}/allUsers/uploadFile`, form, {
			headers: {"x-auth-token": authService.getCurrentUser()}
		}).then(async (res) => {
			if (!res.data.success) {
				alert("Error occured!");
				await setShowProgress(false);
			}
			setUrl(res.data.url);
			props.setImageURL(res.data.url);
			console.log(res.data.url);
			setIsChanged(false);
			await setShowProgress(false);
		});

	}



	return(
		<Grid container xs={12} spacing={2} justifyContent="center">
			<Grid item xs={12} hidden={!props.isCircular}>
				<Avatar
					alt="Sample User"
					src={url}
					sx={{ width: props.width, height: props.height }}
				/>
			</Grid>

			<Grid item xs={12} hidden={props.isCircular}>
				<Card >
					<CardMedia
						component="img"
						height={props.height}
						width={props.width}
						image={url}
						alt="green iguana"
					/>
				</Card>
			</Grid>

			<Grid item xs={12} md={5} hidden={showProgress}>
				<Button variant="outlined" component="label" sx={{mt:"5px"}} startIcon={<CameraAltIcon />}>
					Edit
					<input onChange={hanldeChange}  hidden accept="image/*" multiple type="file" />
				</Button>
			</Grid>
			<Grid item xs={12} md={5} hidden={!isChanged || showProgress}>
				<Button onClick={handleUpload} variant="outlined"  sx={{mt:"5px"}} startIcon={< UploadFileIcon/>}>
					Update Picture
				</Button>
			</Grid>

			<Grid item xs={12} hidden={!showProgress}>
				<LinearProgress color="success" />
			</Grid>



		</Grid>


	);
}

ImageUploader.propTypes ={
	profilePhoto: PropTypes.any,
	fileName: PropTypes.string,
	folderName: PropTypes.string,
	isCircular: PropTypes.bool,
	width: PropTypes.number,
	height: PropTypes.number,
	setImageURL: PropTypes.func,
	imageURL: PropTypes.string
};

export default ImageUploader;