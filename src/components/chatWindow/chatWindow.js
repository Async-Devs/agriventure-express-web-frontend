import React, {useState} from "react";
import {
	Dialog, DialogActions, DialogContent, DialogContentText,
	DialogTitle,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText, TextField
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function RefundRequestList(props){

	const [activeRequest,setActiveRequest] = useState();
	const [open,setOpen] = useState(false);
	const [reply,setReply] = useState();
	const [newValue,setNewValue] = useState();

	function onClickRequest(event){
		setActiveRequest(event.target.id);
		setOpen(true);

	}

	function handleChange(event){
		if(event.target.name === "reply"){
			setReply(event.target.value);
		}else if(event.target.name === "newValue"){
			setNewValue(event.target.value);
		}
	}

	function handleClose(){
		setActiveRequest(undefined);
		setReply(undefined);
		setNewValue(undefined);
		setOpen(false);
	}

	//todo:
	function handleSendReply(){
		alert(newValue);
		setActiveRequest(undefined);
		setReply(undefined);
		setNewValue(undefined);
		setOpen(false);
	}

	function closeRequest(){
		//todo: implement
		alert("Close request");
	}


	return (
		<Grid container>

			<Grid item xs={12}>
				<Dialog open={open} onClose={handleClose}>
					<DialogTitle>Refund Request - {activeRequest}</DialogTitle>
					<DialogContent>
						<DialogContentText>
							<List sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}>
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="Remy Sharp" src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/57402301_2442775932439604_5030131054145437696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=zzDTAqXehJ0AX85Z8Bx&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT_PFF4lBDfe1k3PYYrNep5W-GdL0-UyIAiOyZiKSSv-iw&oe=6352AA3F" />
									</ListItemAvatar>
									<ListItemText
										primary="05/09/2022"
										secondary={
											<React.Fragment>
												<Typography
													sx={{ display: "inline" }}
													component="span"
													variant="body2"
													color="text.primary"
												>Achira Dias <br/>
												</Typography>
												{"Sample Chat Message.blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
												<br/>
											</React.Fragment>
										}
									/>
								</ListItem>
								<Divider variant="inset" component="li" />
								<ListItem alignItems="flex-start">
									<ListItemAvatar>
										<Avatar alt="Remy Sharp" src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/305652696_2017821475071738_1772119493642692274_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VyggVEEtIPYAX_i6OtN&_nc_oc=AQkFP1RgAfzw6BF30IuXIxnfQEjYUTXbIowJPQKssFlx5icdRFPM4yerIo3ucjJ3kM7RN77MV89GzK6Rt-nwf7Z3&_nc_ht=scontent.fcmb1-2.fna&oh=00_AT9EbQR5mHbaMF2qvPB1lvXgh_ZfGjHse90t0m6fnMTQyw&oe=6334D685" />
									</ListItemAvatar>
									<ListItemText
										primary="12/09/2022"
										secondary={
											<React.Fragment>
												<Typography
													sx={{ display: "inline" }}
													component="span"
													variant="body2"
													color="text.primary"
												>Toxic Nipun <br/>
												</Typography>
												{"Sample Chat Message.blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}
												<br/>
											</React.Fragment>
										}
									/>
								</ListItem>
							</List>
						</DialogContentText>
						{/* eslint-disable-next-line react/prop-types */}
						<div hidden={props.mode === "3"}>
							<TextField
								autoFocus
								margin="dense"
								id="reply"
								name="reply"
								onChange={handleChange}
								value={reply}
								label="Reply"
								type="text"
								fullWidth
								variant="standard"
								multiline
							/>
						</div>
						{/* eslint-disable-next-line react/prop-types */}
						<div hidden={props.mode !== "2"}	>
							<TextField
								autoFocus
								margin="dense"
								id="newValue"
								onChange={handleChange}
								value={newValue}
								name="newValue"
								label="Suggesting Refund Value"
								type="number"
								fullWidth
								variant="standard"
							/>
						</div>
					</DialogContent>
					<DialogActions>
						<Button variant="contained" sx={{m:1}} color="primary" onClick={handleClose}>Cancel</Button>
						{/* eslint-disable-next-line react/prop-types */}
						<div hidden={props.mode === "3"}>
							<Button variant="contained" sx={{m:1}} color="primary" onClick={handleSendReply}>Send Your Reply</Button>
						</div>
						{/* eslint-disable-next-line react/prop-types */}
						<div hidden={props.mode === "3" || props.userType !== 3}>
							<Button variant="contained" sx={{m:1}} color="warning" onClick={closeRequest}>Close Request</Button>
						</div>

					</DialogActions>
				</Dialog>
			</Grid>

			<Grid item xs={12}>
				<List sx={{ width: "100%", bgcolor: "background.paper" }}>

					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/57402301_2442775932439604_5030131054145437696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=zzDTAqXehJ0AX85Z8Bx&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT_PFF4lBDfe1k3PYYrNep5W-GdL0-UyIAiOyZiKSSv-iw&oe=6352AA3F" />
						</ListItemAvatar>
						<ListItemText
							primary="Order ID: #001475686"
							secondary={
								<React.Fragment>
									<Grid container>
										<Grid item xs={12} sm={6}>
											<Typography
												sx={{ display: "inline" }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												Achira Dias
											</Typography>
										</Grid>
										<Grid item xs={12} >
											{"Refund Value: Rs. 1775"}
										</Grid>
										<Grid item xs={12}>
											{"Refund Deadline: 23/10/2022"}
										</Grid>
									</Grid>
								</React.Fragment>
							}
						/>
						<ListItemButton id={"#00007"} name={"#00007"} onClick={onClickRequest} dense>
							Open
						</ListItemButton>
					</ListItem>

					<Divider variant="inset" component="li" />

					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/57402301_2442775932439604_5030131054145437696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=zzDTAqXehJ0AX85Z8Bx&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT_PFF4lBDfe1k3PYYrNep5W-GdL0-UyIAiOyZiKSSv-iw&oe=6352AA3F" />
						</ListItemAvatar>
						<ListItemText
							primary="Order ID: #001434356"
							secondary={
								<React.Fragment>
									<Grid container>
										<Grid item xs={12} sm={6}>
											<Typography
												sx={{ display: "inline" }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												Ransika Costa
											</Typography>
										</Grid>
										<Grid item xs={12}>
											{"Refund Value: Rs. 2115"}
										</Grid>
										<Grid item xs={12}>
											{"Refund Deadline: 23/10/2022"}
										</Grid>
									</Grid>
								</React.Fragment>
							}
						/>
						<ListItemButton id={"#00001"} name={"#00001"} onClick={onClickRequest}>
							Open
						</ListItemButton>
					</ListItem>

					<Divider variant="inset" component="li" />

					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.6435-9/57402301_2442775932439604_5030131054145437696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=zzDTAqXehJ0AX85Z8Bx&_nc_ht=scontent.fcmb2-2.fna&oh=00_AT_PFF4lBDfe1k3PYYrNep5W-GdL0-UyIAiOyZiKSSv-iw&oe=6352AA3F" />
						</ListItemAvatar>
						<ListItemText
							primary="Order ID: #001434356"
							secondary={
								<React.Fragment>
									<Grid container>
										<Grid item xs={12} sm={6}>
											<Typography
												sx={{ display: "inline" }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												Nipun Pramuditha
											</Typography>
										</Grid>
										<Grid item xs={12}>
											{"Refund Value: Rs. 1000"}
										</Grid>
										<Grid item xs={12}>
											{"Refund Deadline: 23/10/2022"}
										</Grid>
									</Grid>
								</React.Fragment>
							}
						/>
						<ListItemButton id={"#00017"} name={"#00017"} onClick={onClickRequest}>
							Open
						</ListItemButton>
					</ListItem>

				</List>
			</Grid>
		</Grid>

	);
}

export default RefundRequestList;