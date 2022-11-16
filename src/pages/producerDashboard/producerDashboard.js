import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Divider} from "@mui/material";
// import ProducerItems from "./producerItems";
import ProducerSales from "./producerSales";

function ProducerDashboard(){
	// const [isLoading, setLoading] = useState(true);
	// const [myListings, setMyListing] = useState([]);

	useEffect(()=>{

	});

	// function renderMyListing(){
	// 	if(isLoading){
	// 		return(
	// 			<Paper>
	// 				<CircularProgress/>
	// 			</Paper>
	// 		);
	// 	}else {
	// 		return(
	// 			<Paper>
	// 				<ProducerItems/>
	// 			</Paper>
	// 		);
	// 	}
	// }

	return(
		<Container >
			<Grid container align={"center"}>
				<Grid item xs={12}>
					<Typography variant="h2"><span style={{color: "primary"}}>My Crops</span></Typography>
					<hr />
				</Grid>

				<Grid item xs={12}>
					{/*{renderMyListing()}*/}
				</Grid>

				<Grid item xs={12}>
					<Typography variant="h5" m={1}>Crop sales</Typography>
					<Divider />
					<Paper>
						<ProducerSales/>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}

export default ProducerDashboard;
