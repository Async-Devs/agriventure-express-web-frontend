import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import PropTypes from "prop-types";

function PaperComponent(props) {
	return (
		<Draggable
			handle="#draggable-dialog-title"
			cancel={"[class*=\"MuiDialogContent-root\"]"}
		>
			<Paper {...props} />
		</Draggable>
	);
}

export default function DraggableDialog(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Open Dialog
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperComponent={PaperComponent}
				aria-labelledby="draggable-dialog-title"
			>
				<DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
					{props.dialogTitle}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{props.dialogBody}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

DraggableDialog.propTypes = {
	dialogBody: PropTypes.element,
	dialogTitle: PropTypes.string
};
