import {Bar} from "react-chartjs-2";
import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Bargraph(props)  {
	return (
		<div className="col-md-5">
			<Bar data={props.handleData}
			/>
		</div>

	);
}
Bargraph.propTypes = {
	handleData : PropTypes.object.isRequired
};

export default Bargraph;
