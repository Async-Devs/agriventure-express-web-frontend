import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Crop amount details",
		},
	},
};

const labels = ["Rice", "Beet", "Leeks", "Cabbage", "Garlic", "Ginger", "Onions"];

export const data = {
	labels,
	datasets: [
		{
			label: "Crop amount",
			data: [100,200,300,400,500,600,700],
			backgroundColor: "rgb(0,21,255)",
		}
	],
};

function Barchart() {
	return (
		<Bar
			options={options}
			data={data}
		/>
	);
}

export default Barchart;
