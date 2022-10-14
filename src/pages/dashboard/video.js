import React from "react";
import Grid from "@mui/material/Grid";
import "./video.css";
import Back from "./backvideo.mp4";

function Video(){

	// states

	//data access from axios

	//function
	// eslint-disable-next-line no-mixed-spaces-and-tabs

	return(

		<div className="carousel">
			<Grid container>
				<Grid item xs={12} sx={{maxHeight:"100vh"}}>
					<video  id="videoBG" muted="true" loop="true" autoPlay="true">
						<source src= { Back } type="video/mp4" />
					</video>
				</Grid>
			</Grid>
		</div>
	);
}

export default Video;