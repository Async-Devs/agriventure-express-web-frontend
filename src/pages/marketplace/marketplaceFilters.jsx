import React, {useEffect, useState} from "react";
import {Accordion, AccordionDetails, AccordionSummary, FormGroup, Grid, Typography} from "@mui/material";
// import CustomeSlider from "../../components/slider/Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import _ from "lodash";
import PropTypes from "prop-types";
// import FormLabel from "@mui/material/FormLabel";

function MarketPlaceFilters(props){
	// WIP Fetch from DB
	const districts = [
		"Ampara",
		"Anuradhapura",
		"Badulla",
		"Batticaloa",
		"Colombo",
		"Galle",
		"Gampaha",
		"Hambantota",
		"Jaffna",
		"Kalutara",
		"Kandy",
		"Kegalle",
		"Kilinochchi",
		"Kurunegala",
		"Mannar",
		"Matale",
		"Matara",
		"Moneragala",
		"Mullaitivu",
		"Nuwara Eliya",
		"Polonnaruwa",
		"Puttalam",
		"Ratnapura",
		"Trincomalee",
		"Vavuniya"];
	const crops = ["Carrots", "Beet", "Leaks", "potato"];
	let cropsSet = new Set(crops);
	let districtSet = new Set(districts);

	const [checked, setChecked1] = useState([true, true]);
	const [checked2, setChecked2] = useState([true, true]);
	const [districtTickState, districtSetTickState] = useState(districtSet);
	const [cropTickState, cropSetTickState] = useState(cropsSet);
	const [miniMumBid, setMinimumBid] = useState("0");
	const [quantity, setQuantity] = useState("0");
	const [change, setChange] = useState(false);


	useEffect(()=>{
		let data = {
			minBid: miniMumBid,
			quantity: quantity,
			district: districtTickState,
			crops: cropTickState
		};
		props.filterOnchange(data);
	}, [change]);
	const handleChange1 = (event) => {
		let currentCheckedState = event.target.checked;
		if(currentCheckedState){
			districtSetTickState(districtSet);
		}else {
			districtSetTickState(new Set());
		}
		setChecked1([event.target.checked, event.target.checked]);
		setChange(!change);
	};
	const handleChange2 = (event) => {
		let currentCheckedState = event.target.checked;
		if(currentCheckedState){
			cropSetTickState(cropsSet);
		}else {
			cropSetTickState(new Set());
		}
		setChecked2([event.target.checked, event.target.checked]);
		setChange(!change);
	};

	const childHandle1 = (event) =>{
		let currentTick = event.target.id;
		let currentTickState = event.target.checked;
		let curentI = districtTickState;
		if(currentTickState){
			curentI.add(currentTick);
		}else {
			curentI.delete(currentTick);
		}
		districtSetTickState(curentI);
		if(_.isEqual(curentI, districtSet)){
			setChecked1([true, true]);
		}else if(curentI.size == 0){
			setChecked1([false, false]);
		}else {

			setChecked1([false,true]);
		}
		setChange(!change);
	};
	const childHandle2 = (event) =>{
		let currentTick = event.target.id;
		let currentTickState = event.target.checked;
		let curentI = cropTickState;
		if(currentTickState){
			curentI.add(currentTick);
		}else {
			curentI.delete(currentTick);
		}
		cropSetTickState(curentI);
		if(_.isEqual(curentI, cropsSet)){
			setChecked2([true, true]);
		}else if(curentI.size == 0){
			setChecked2([false, false]);
		}else {

			setChecked2([false,true]);
		}
		setChange(!change);
	};

	const handleBid = (event) => {
		setMinimumBid(event.target.value);
		setChange(!change);
	};

	const handleQuantity = (event) => {
		setQuantity(event.target.value);
		setChange(!change);
	};

	const districtChildren = (
		<Grid mr={1}>
			<Box sx={{ display: "flex", flexDirection: "column", ml: 3, overflow: "auto", maxHeight: 200, width:1}}>
				<FormGroup >
					{districts.map((e)=>{
						return (
							<FormControlLabel
								key={e}
								label={e}
								control={
									<Checkbox
										checked={districtTickState.has(e)}
										onChange={childHandle1}
										id={e} />
								}
							/>
						);
					})}
				</FormGroup>
			</Box>
		</Grid>
	);

	const cropChildren = (
		<Grid mr={1}>
			<Box sx={{ display: "flex", flexDirection: "column", ml: 3, overflow: "auto", maxHeight: 200, width:1}}>
				<FormGroup >
					{crops.map((e)=>{
						return (
							<FormControlLabel
								key={e}
								label={e}
								control={
									<Checkbox
										checked={cropTickState.has(e)}
										onChange={childHandle2}
										id={e} />
								}
							/>
						);
					})}
				</FormGroup>
			</Box>
		</Grid>
	);
	return(
		<Grid item xl={12} xs={10} maxWidth={500}>
			{/*<Paper elevation={2} sx={{borderRadius: "10px"}}>*/}
			<Grid container mt={2}>
				<Grid item xs={12} mb={3}>
					<Typography variant={"h5"} align={"center"}>Filters</Typography>
				</Grid>
				<Grid item xs={12}>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant={"h6"} align={"center"}>Minimum Bid</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormControl>
								<RadioGroup
									aria-labelledby="demo-radio-buttons-group-label"
									defaultValue="0"
									name="radio-buttons-group"
									value={miniMumBid}
									onChange={handleBid}
								>
									<FormControlLabel value="0" control={<Radio />} label="Any Price" />
									<FormControlLabel value="1" control={<Radio />} label="Less than LKR 100,000" />
									<FormControlLabel value="2" control={<Radio />} label="LKR 100,000 - 1,000,000" />
									<FormControlLabel value="3" control={<Radio />} label="LKR 1,000,000 - 10,000,000" />
									<FormControlLabel value="4" control={<Radio />} label="More than LKR 10,000,000" />
								</RadioGroup>
							</FormControl>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant={"h6"} align={"center"}>Quantity</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FormControl>
								<RadioGroup
									aria-labelledby="demo-radio-buttons-group-label"
									defaultValue="0"
									name="radio-buttons-group"
									value={quantity}
									onChange={handleQuantity}
								>
									<FormControlLabel value="0" control={<Radio />} label="Any Quantity" />
									<FormControlLabel value="1" control={<Radio />} label="Less than 100kg" />
									<FormControlLabel value="2" control={<Radio />} label="100 - 1,000 kg" />
									<FormControlLabel value="3" control={<Radio />} label="1,000 - 10,000 kg" />
									<FormControlLabel value="4" control={<Radio />} label="More than 10,000 kg" />
								</RadioGroup>
							</FormControl>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant={"h6"} align={"center"}>District</Typography>
						</AccordionSummary>
						<AccordionDetails style={
							{marginBottom:"20px", borderTop:"solid", borderWidth:"1px", borderTopColor:"#eeeeee"}
						}>
							<FormControl style={{width:"100%"}}>
								<FormControlLabel
									label="All Districts"
									control={
										<Checkbox
											checked={checked[0] && checked[1]}
											indeterminate={checked[0] !== checked[1]}
											onChange={handleChange1}
										/>
									}
								/>
								{districtChildren}
							</FormControl>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant={"h6"} align={"center"}>Crop</Typography>
						</AccordionSummary>
						<AccordionDetails style={
							{marginBottom:"20px", borderTop:"solid", borderWidth:"1px", borderTopColor:"#eeeeee"}
						}>
							<FormControl style={{width:"100%"}}>
								<FormControlLabel
									label="All Crops"
									control={
										<Checkbox
											checked={checked2[0] && checked2[1]}
											indeterminate={checked2[0] !== checked2[1]}
											onChange={handleChange2}
										/>
									}
								/>
								{cropChildren}
							</FormControl>
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
			{/*</Paper>*/}
		</Grid>

	);
}

MarketPlaceFilters.propTypes = {
	filterOnchange: PropTypes.func.isRequired
};

export default MarketPlaceFilters;
