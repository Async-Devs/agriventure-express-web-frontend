import React, {useState} from "react";
import ProfileView from "./profileView/profileView";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Profile(){

	const [open,setOpen] = useState(false);

	function handleEdit(){
		window.location.assign("/profile/edit");
	}

	function handleDelete(){
		//todo: check validity
		setOpen(true);
	}

	function handleClose(){
		setOpen(false);
	}

	function handleConDelete(){
		//todo: delete account
		handleClose();
	}

	return(
		<Grid container justifyContent="center">
			<Grid item xs={12}>
				<ProfileView />
			</Grid>

			<Grid item xs={12} md={6} mt={2}  align="center">
				<Paper elevation={3} sx={{width: "50%", p: "5px"}}>
					<Button variant="outlined" onClick={handleEdit} color="primary" startIcon={<EditIcon />} sx={{m: "5px"}}>
						Edit
					</Button>
					<Button variant="outlined" onClick={handleDelete} color="error" startIcon={<DeleteIcon />}>
						Delete
					</Button>
				</Paper>
			</Grid>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Are you sure?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Your profile will permanently delete from the system. you will not be
						able to recover your account!
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleConDelete} color="error" startIcon={<DeleteIcon />} autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>

		</Grid>

	);
}

export default Profile;