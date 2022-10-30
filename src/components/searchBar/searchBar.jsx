import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {ArrowDropDown} from "@mui/icons-material";

export default function SearchBar() {
	return (
		<Paper elevation={2}
			component="form"
			sx={{ p: "2px 4px", display: "flex", alignItems: "center"}}
		>
			<IconButton sx={{ p: "10px" }} aria-label="menu">
				<ArrowDropDown/>
			</IconButton>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Item"
				inputProps={{ "aria-label": "search google maps" }}
			/>
			<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
