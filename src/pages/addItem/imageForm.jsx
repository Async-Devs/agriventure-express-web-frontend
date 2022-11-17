import React from "react";
import { Grid, Typography} from "@mui/material";
import "react-image-crop/dist/ReactCrop.css";
import FileUpload2 from "../../components/fileUpload/fileUpload2";

// eslint-disable-next-line no-unused-vars
function ImageForm(props){
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
						<Grid xs={12}>
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
								<FileUpload2/>
							</Grid>
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

