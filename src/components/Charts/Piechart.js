import React from "react";
import {Pie} from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

const data = {
	labels: ["Carrots", "Beet", "Leeks",
		"Rice", "Cabbage", "Ginger", "Garlic"],
	datasets: [
		{
			label: "Crop amount",
			data: [65, 22, 80, 90, 56, 15, 56],
			hoverOffset: 10,
			backgroundColor: ["rgba(96,255,3,0.65)",
				"rgba(255,193,0,0.65)",
				"rgba(0,112,255,0.65)",
				"rgba(171,3,255,0.65)",
				"rgba(255,3,3,0.65)",
				"rgba(23,73,3,0.65)",
				"rgba(110,25,0,0.65)"] }

	]
};


function PieChart() {
	return (
		<div className="chart">
			<Pie
				data={data}
			/>
		</div>
	);
}

export default PieChart;