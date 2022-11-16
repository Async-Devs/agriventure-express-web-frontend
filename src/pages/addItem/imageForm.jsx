import React from "react";
import {Button, Grid, Typography} from "@mui/material";
import "react-image-crop/dist/ReactCrop.css";
// import {CropImage} from "../../components/cropImage/CropImage";

// eslint-disable-next-line no-unused-vars
function ImageForm(props){
	return(
		<Grid item container xs={12}>
			<Grid item container xs={12} mb={3}>
				<Grid item container xs={12}>
					<Grid item xs={12} container justifyContent={"center"} m={3}>
						<Grid item xs={12}>
							<Typography variant={"h5"} align={"left"}>
								Images
							</Typography>
						</Grid>
						<Grid xs={12}>
							<hr
								style={{
									color: "black",
									backgroundColor: "black",
									height: 0.1
								}}
							/>
						</Grid>
						<Grid xs={12}>
							<label htmlFor="upload-photo">
								<input
									style={{ display: "none" }}
									id="upload-photo"
									name="upload-photo"
									type="file"
								/>

								<Button color="secondary" variant="contained" component="span">
									Upload button
								</Button>
							</label>
						</Grid>
					</Grid>

				</Grid>
			</Grid>
		</Grid>
	);
}

ImageForm.propTypes = {
};

export default ImageForm;

