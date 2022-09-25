import * as React from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default function SaveButton() {
	return (
		<Button>Save{" "}<SaveOutlinedIcon/></Button>
	);
}

export function LinkedButton(props){
	return(
		<Link to={props.href} style={{ textDecoration: "none" }}> <Button>{props.content}</Button></Link>
	);
}

LinkedButton.propTypes = {
	/** The href is the path that the button directs to*/
	href: PropTypes.string,
	/** The content is the Button Name */
	content: PropTypes.string
};