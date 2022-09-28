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
import { faker } from "@faker-js/faker";

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
			text: "Chart.js Bar Chart",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Last year amount",
			data: [100,200,300,400,500,600,700],
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Current year amount",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};


function Barchart() {
	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<div className="chart">
			{/* eslint-disable-next-line react/react-in-jsx-scope */}
			<Bar
				options={options}
				data={data}
			/>
		</div>
	);
}

export default Barchart;