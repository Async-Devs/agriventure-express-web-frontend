import React from "react";
import { Divider, Grid, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";


function ProfileView(props){


	return(
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12} mt={2} align="center">
					<Paper elevation={3} sx={{backgroundColor: "#acc5a7"}}>
						<Grid item xs={12}>
							<Avatar
								alt="Profile picture"
								src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/57402301_2442775932439604_5030131054145437696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=zzDTAqXehJ0AX85Z8Bx&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT_PFF4lBDfe1k3PYYrNep5W-GdL0-UyIAiOyZiKSSv-iw&oe=6352AA3F"
								sx={{ width: 150, height: 150 }}
							/>
						</Grid>
						<Grid item xs={12}>
							<Paper elevation={2} sx={{backgroundColor: "#9cf192"}}>
								{/* eslint-disable-next-line react/prop-types */}
								<Typography mt={2}>{props.firstName + " " + props.lastName}</Typography>
								{/* eslint-disable-next-line react/prop-types */}
								<Typography mt={2}>{props.userType === 0 ? "Producer" : "Buyer"}</Typography>
							</Paper>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} mt={2}>
					<Paper elevation={3}>
						<List sx={{ width: "100%", bgcolor: "background.paper"}}>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<DnsRoundedIcon />
								</ListItemAvatar>
								<ListItemText
									primary="First Name"
									secondary={
										<React.Fragment>
											{/* eslint-disable-next-line react/prop-types */}
											{props.firstName}
										</React.Fragment>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />

							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<DnsRoundedIcon />
								</ListItemAvatar>
								<ListItemText
									primary="Last Name"
									secondary={
										<React.Fragment>
											{/* eslint-disable-next-line react/prop-types */}
											{props.lastName}
										</React.Fragment>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<BadgeRoundedIcon />
								</ListItemAvatar>
								<ListItemText
									primary="NIC"
									secondary={
										<React.Fragment>
											{/* eslint-disable-next-line react/prop-types */}
											{props.nic}
										</React.Fragment>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<MailRoundedIcon />
								</ListItemAvatar>
								<ListItemText
									primary="Email Address"
									secondary={
										<React.Fragment>
											{/* eslint-disable-next-line react/prop-types */}
											{props.email}
										</React.Fragment>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<PhoneRoundedIcon />
								</ListItemAvatar>
								<ListItemText
									primary="Telephone Number"
									secondary={
										<React.Fragment>
											{/* eslint-disable-next-line react/prop-types */}
											{props.telephoneNumber}
										</React.Fragment>
									}
								/>
							</ListItem>

							<Divider variant="inset" component="li" />
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<HomeRoundedIcon />
								</ListItemAvatar>
								<ListItemText
									primary="Postal Address"
									secondary={
										<React.Fragment>
											{/* eslint-disable-next-line react/prop-types */}
											{props.address}
										</React.Fragment>
									}
								/>
							</ListItem>

							{/* eslint-disable-next-line react/prop-types */}
							<div hidden={props.userType === 1}>
								<Divider variant="inset" component="li" />
								{/* eslint-disable-next-line react/prop-types */}
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<ShareLocationIcon />
									</ListItemAvatar>
									<ListItemText
										primary="Field Location"
										secondary={
											<React.Fragment>
												{/* eslint-disable-next-line react/prop-types */}
												{props.location}
											</React.Fragment>
										}
									/>
								</ListItem>
							</div>

						</List>
					</Paper>

				</Grid>
			</Grid>
		</Container>

	);

}

export default ProfileView;