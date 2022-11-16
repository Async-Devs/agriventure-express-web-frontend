import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Divider} from "@mui/material";
// import ProducerItems from "./producerItems";
import ProducerSales from "./producerSales";
import authService from "../../services/auth.service";

function ProducerDashboard(){
	// eslint-disable-next-line no-unused-vars
	const [isLoading, setLoading] = useState(true);
	// eslint-disable-next-line no-unused-vars
	const [myListings, setMyListing] = useState([]);

	useEffect(()=>{
		console.log(authService.getCurrentUserType());
		setLoading(false);
	},[]);

	function renderMyListing(){
		if(isLoading){
			return(
				<Paper>
					<Grid container height={400} alignItems={"center"} justifyContent={"center"}>
						<Grid item>
							<CircularProgress/>
						</Grid>
					</Grid>
				</Paper>
			);
		}else {
			return(
				<Paper>
					<ProducerItems/>
				</Paper>
			);
		}
	}

	return(
		<Container >
			<Grid container align={"center"}>
				<Grid item xs={12}>
					<Typography variant="h2"><span style={{color: "green"}}>My Crops</span></Typography>
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
