import React from "react";
import {Grid, Typography} from "@mui/material";

function ErrorPage(){
	return(
		<Grid xs={12} container justifyContent={"center"} bgcolor={"lightyellow"}>
			<Grid xs={6}>
				<Typography variant={"h1"} color={"warning"}>
					Oops!
				</Typography>
				<Typography variant={"h5"} color={"warning"}>
					404 page not found
				</Typography>
				<Typography variant={"h6"} color={"warning"}>
					Umm...Are you Lost?
				</Typography>
				<img height={300} src={"404.png"}/>
			</Grid>
		</Grid>
	);
}

export default ErrorPage;
