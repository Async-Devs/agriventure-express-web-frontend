import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumbs, Grid, Paper, Typography} from "@mui/material";




function ItemView(){

	const itemId = useParams().item_id;
	const breadcrumbs = [
		<Link to={"/marketplace"} key={1} style={{textDecoration: "none" ,color:"black"}}>
			MARKETPLACE
		</Link>,
		<Typography key="3" color="primary">
			ITEM VIEW
		</Typography>,
	];

	return(
		<Grid container spacing={1} m={5} p={5}>
			<Grid item xs={12} bgcolor={"pink"} maxHeight={50}>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
			</Grid>
			<Grid item xs={6}  minHeight={400} container>
				{itemId}
				<Grid item container>
					<Paper elevation={2}>
						<Grid container>
							<Grid item xs={12} container justifyContent={"center"}>
								<Grid item>
									<Typography variant={"h4"} fontFamily={"cursive"}>
										Crop Name
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={12}>
								Image Here
							</Grid>
							<Grid item xs={12}>
								Image Here
							</Grid>
							<Grid item xs={12}>
								Image Here
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
			<Grid item xs={6} border={1}>

			</Grid>
		</Grid>
	);
}

export default ItemView;