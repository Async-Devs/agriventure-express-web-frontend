import React from "react";
import {Chip, Grid} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

function ProfileView(){

	return(
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12} mt={2} align="center">
					<Paper elevation={3} sx={{backgroundColor: "#acc5a7"}}>
						<Grid item xs={12}>
							<Avatar
								alt="Sample User"
								src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/57402301_2442775932439604_5030131054145437696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=zzDTAqXehJ0AX85Z8Bx&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT_PFF4lBDfe1k3PYYrNep5W-GdL0-UyIAiOyZiKSSv-iw&oe=6352AA3F"
								sx={{ width: 150, height: 150 }}
							/>
						</Grid>
						<Grid item xs={12}>
							<Paper elevation={2} sx={{backgroundColor: "#9cf192"}}>
								<Typography mt={2}>Sample User</Typography>
								<Typography mt={2}>Buyer</Typography>
							</Paper>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} mt={2}>
					<Paper elevation={3}>
						<Grid container xs={12} p={1}>
							<Grid item xs={4}  ml={1}>
								<Typography >First Name: </Typography>
								<hr/>
							</Grid>
							<Grid item xs={7} >
								<Typography>Sample</Typography>
								<hr/>
							</Grid>
							<Grid item xs={4}  ml={1}>
								<Typography>Last Name: </Typography>
								<hr/>
							</Grid>
							<Grid item xs={7} >
								<Typography>User</Typography>
								<hr/>
							</Grid>

							<Grid item xs={4}  ml={1}>
								<Typography>Address: </Typography>
								<hr/>
							</Grid>
							<Grid item xs={7} >
								<Typography>No 404, Temple road, Nugegoda</Typography>
								<hr/>
							</Grid>

							<Grid item xs={4}  ml={1}>
								<Typography>NIC: </Typography>
								<hr/>
							</Grid>
							<Grid item xs={7} >
								<Typography>991394567J</Typography>
								<hr/>
							</Grid>

							<Grid item xs={4} ml={1}>
								<Typography>Telephone Number: </Typography>
								<hr/>
							</Grid>
							<Grid item xs={7}>
								<Typography>0111234567</Typography>
								<hr/>
							</Grid>

							<Grid item xs={4} ml={1}>
								<Typography>Field Location: </Typography>
								<hr/>
							</Grid>
							<Grid item xs={7}>
								<Typography>Nugegoda</Typography>
								<hr/>
							</Grid>

							<Grid item xs={4} ml={1}>
								<Typography>Crop Types: </Typography>
							</Grid>
							<Grid item xs={7}>
								<Chip label="Carrot" sx={{mr: "3px"}}/>
								<Chip label="Mango" />
							</Grid>

						</Grid>
					</Paper>

				</Grid>
			</Grid>
		</Container>

	);

}

export default ProfileView;