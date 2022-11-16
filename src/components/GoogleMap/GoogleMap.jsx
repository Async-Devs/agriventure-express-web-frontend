import GoogleMapReact from "google-map-react";
import {Grid} from "@mui/material";

function GoogleMap(){

	// const defaultProps = {
	// 	center: {lat: 40.73, lng: -73.93},
	// 	zoom: 12
	// };

	return(
		<Grid>
			<GoogleMapReact
				defaultCenter={this.props.center}
				center={this.state.center}
				defaultZoom={this.props.zoom}
				onChildMouseEnter={this.onChildMouseEnter}
				onChildMouseLeave={this.onChildMouseLeave}
			/>
		</Grid>
	);
}

export default GoogleMap;
