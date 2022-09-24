/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import "./agridataentry.module.css";
import Sidebar from "../components/Sidebar.js";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";

function AgriDataEntry(){

	// states
	const [crop, setCrop] = React.useState("");

	const handleCrop = (event) => {
	  setCrop(event.target.value);
	};

	const [location, setLocation] = React.useState("");

	const handleLocation = (event) => {
	  setLocation(event.target.value);
	};

	const [amount, setAmount] = React.useState("");

	const handleAmount = (event) => {
	  setAmount(event.target.value);
	};
	//data access from axios

	//function


	return(
		<div>
			<Sidebar/>
			    <Box sx={{ width: "100%" }}>
				
				<Grid container
					direction="column"
					alignItems="center"
					justifyContent="center"
				><h1>Add Agriculture Data</h1>
					<Grid item  sx={{padding:"10px",minWidth:"260px",maxWidth:"600px"}}>
						<Paper sx={{borderRadius:"20px"}}>
							<Box sx={{ maxWidth:"500px",minWidth:"150px",paddingTop:"30px",marginBottom:"50px",padding:"10px" }}>
								<FormControl fullWidth> 
									<InputLabel id="crop">Crop Type</InputLabel>
									<Select
										labelId="crop"
										id="crop-select"
										value={crop}
										label="Crop Type"
										onChange={handleCrop}
									>
										<MenuItem value={10}>Onion</MenuItem>
										<MenuItem value={20}>Garlic</MenuItem>
										<MenuItem value={30}>Beet</MenuItem>
										<MenuItem value={40}>Carrots</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<Box sx={{ minWidth: 120, maxWidth: 250,marginBottom:"50px",padding:"10px"}}>
								<FormControl fullWidth>
									<InputLabel id="location">Location</InputLabel>
									<Select
										labelId="location"
										id="location-select"
										value={location}
										label="Location"
										onChange={handleLocation}
									>
										<MenuItem value={10}>Anuradhapura</MenuItem>
										<MenuItem value={20}>Mahiyanganaya</MenuItem>
										<MenuItem value={30}>Jaffna</MenuItem>
										<MenuItem value={10}>Hambanthota</MenuItem>
										<MenuItem value={10}>Mahanuwara</MenuItem>
										<MenuItem value={10}>Kalutara</MenuItem>
										<MenuItem value={10}>Trincomalee</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<Box sx={{ minWidth: 120, maxWidth: 250,marginBottom:"30px",padding:"10px"}}>
								<FormControl fullWidth>
									<InputLabel id="amount">Amount</InputLabel>
									<Select
										labelId="amount"
										id="amount-select"
										value={amount}
										label="Amount"
										onChange={handleAmount}
									>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<Button sx={{marginBottom:"30px",padding:"10px" }} variant="contained">Add Data</Button>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</div>

	);
}

export default AgriDataEntry;