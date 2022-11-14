import {Line} from "react-chartjs-2";
import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Linegraph(props)  {

	return (
		<div className="col-md-5">
			<Line data={props.handleData}
			/>
		</div>

	);
}
Linegraph.propTypes = {
	handleData : PropTypes.object.isRequired
};

export default Linegraph;
