import * as React from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import {Button} from "@mui/material";

function SaveButton() {
	return (
		<Button>Save{" "}<SaveOutlinedIcon/></Button>
	);
}

export default SaveButton;