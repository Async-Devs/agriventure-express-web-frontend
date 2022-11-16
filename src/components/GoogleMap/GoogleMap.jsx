import React, {useEffect, useState} from "react";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import PropTypes from "prop-types";
import authService from "../../services/auth.service";
// eslint-disable-next-line no-undef
let apiKey ="";


function MyComponent(props) {
	useEffect(()=>{
		const fetchData = async ()=>{
			apiKey = await authService.getGoogleAPIkey();
		};
		fetchData();
	},[]);
	const [center, setCenter] = useState({
		lat: 6.9271,
		lng: 79.8612
	});

	const containerStyle = {
		width: "auto",
		height: "500px",
		marginBottom: "20px"
	};


	const mapClick = (event)=>{
		const {latLng} = event;
		const lat = latLng.lat();
		const lng = latLng.lng();
		props.setPointer({lat: lat, lng: lng});
		setCenter({lat: lat, lng: lng});
	};

	function renderMark(){
		if(location.lat==="x" && location.lng==="x"){
			return;
		}
		return(
			<Marker
				position={props.locationPointer}
			/>
		);
	}

	console.log(apiKey);


	return (
		<LoadScript
			googleMapsApiKey={apiKey}
		>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={12}
				onClick={mapClick}
				options={{streetViewControl: false}}

			>
				{renderMark()}
			</GoogleMap>
		</LoadScript>
	);
}

MyComponent.propTypes = {
	locationPointer: PropTypes.object,
	setPointer: PropTypes.func
};

export default MyComponent;
