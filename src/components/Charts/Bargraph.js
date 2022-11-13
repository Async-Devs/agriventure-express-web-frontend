import {useEffect, useState} from "react";
import { Line ,Bar} from "react-chartjs-2";
import React from "react";
import {getAgriData} from "../../services/agridataServices";
import {getDistrictData} from "../../services/districtData";

// eslint-disable-next-line react/prop-types
function Bargraph  ()  {


	const [state, setState] = useState({

		labels: ["Total Income", "Expenses", "Current Balance"],
		datasets: [{

			backgroundColor: "rgba(54,255,0,0.71)",
			borderColor: "rgb(22,96,0)",
			borderWidth: 2,
			data: [0, 0, 0]

		}]
	});

	// function showDistrictData(id){
	// 	setDistrictData(id);
	// }

	async function showoverallData() {
		const agridata = await getDistrictData();
		const data_list = agridata.data.map((agri_data) => ({
			crop_Type: agri_data.cropType,
			crop_Amount: agri_data.totalCropAmount
		}));
		const labels = [];
		const data = [];
		for (let i = 0; i < data_list.length; i++) {
			labels.push(data_list[i].crop_Type.name);
			data.push(data_list[i].crop_Amount);
		}

		setState({
			labels: labels,
			datasets: [{
				backgroundColor: "rgba(54,255,0,0.71)",
				borderColor: "rgb(22,96,0)",
				borderWidth: 2,
				data: data

			}]
		});

	}

	async function updateData() {
		const agridata = await getAgriData();
		const data_list = agridata.data.map((agri_data) => ({
			crop_Type: agri_data.cropType,
			crop_Amount: agri_data.cropAmount
		}));
		const labels = [];
		const data = [];
		for (let i = 0; i < data_list.length; i++) {
			labels.push(data_list[i].crop_Type.name);
			data.push(data_list[i].crop_Amount);
		}

		setState({
			labels: labels,
			datasets: [{
				backgroundColor: "rgba(54,255,0,0.71)",
				borderColor: "rgb(22,96,0)",
				borderWidth: 2,
				data: data

			}]
		});
	}

	useEffect( () => {
		showoverallData();

	}, []);


	return (
		<div className="col-md-5">
			<button onClick={updateData}>Click me!</button>
			<Line data={state}

			/>
			<div className="col-md-5">

				<Bar data={state}
				/>


			</div>


		</div>

	);
}

export default Bargraph;
