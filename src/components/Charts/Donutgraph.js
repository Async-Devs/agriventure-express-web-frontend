import {Doughnut} from "react-chartjs-2";
import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Donutgraph(props)  {

	return (
		<div className="col-md-5">
			<Doughnut data={props.handleData}
			/>
		</div>

	);
}
Donutgraph.propTypes = {
	handleData : PropTypes.object.isRequired
};

export default Donutgraph;
