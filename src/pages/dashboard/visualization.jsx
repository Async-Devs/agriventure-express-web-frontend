import React from "react";
import "./dashboard.module.css";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Map from "../../components/map/map";
import Bargraph from "../../components/Charts/Bargraph";




function Visualization(){

	// states
	// const [districtData, setDistrictData] = useState();

	//data access from axios


	//function
	// eslint-disable-next-line no-mixed-spaces-and-tabs
	function showDistrictData(id){
		console.log(id);
	}

	return(
		<Grid container spacing={5} justifyContent="center">
			<Grid item xs={10} md={7}>
				<Paper >
					<Bargraph/>
				</Paper>
			</Grid>
			<Grid item xs={10} md={3}>
				<Paper>
					<Map handleDistrictClick={showDistrictData}/>
				</Paper>
			</Grid>
		</Grid>
	);
}


export default Visualization;
