import React, {useEffect, useState} from "react";
import { Grid, Typography} from "@mui/material";
import "react-image-crop/dist/ReactCrop.css";
import FileUpload2 from "../../components/fileUpload/fileUpload2";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
function ImageForm(props){
	const [images, setImages] = useState([]);

	useEffect(()=>{
		const data = {
			images:images
		};
		props.getValues(data);
	},[props.onSubmit]);

	return(
		<Grid container xs={12}>
			<Grid item container xs={12} mb={3}>
				<Grid item container xs={12}>
					<Grid item xs={12} container justifyContent={"center"} m={3}>
						<Grid item xs={12}>
							<Typography variant={"h5"} align={"left"}>
								Images
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
						<Grid item xs={12} mt={3}  >
							<Grid bgcolor={"lightgray"} >
								{/*<FileUpload/>*/}
								<FileUpload2 images={images} setImages={setImages}/>
							</Grid>
						</Grid>
					</Grid>

				</Grid>
			</Grid>
		</Grid>
	);
}

ImageForm.propTypes = {
	onSubmit: PropTypes.bool,
	getValues: PropTypes.func
};

export default ImageForm;

