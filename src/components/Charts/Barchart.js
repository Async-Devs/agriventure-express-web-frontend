import React from "react";
import {Bar} from "react-chartjs-2";

const data = {
	labels: ["Carrots", "Beet", "Leeks",
		"Rice", "Cabbage", "Ginger", "Garlic"],
	datasets: [
		{
			label: "Crop amount",
			data: [65, 59, 80, 81, 56, 78, 56],
			backgroundColor: "rgba(96,255,3,0.65)"}

	],
};


function Barchart() {
	return (
		<div className="chart">
			<Bar
				data={data}
			/>
		</div>
	);
}

export default Barchart;