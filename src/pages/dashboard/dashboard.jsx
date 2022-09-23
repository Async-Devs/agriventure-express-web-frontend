import React from "react";
import "./dashboard.module.css";
import Sidebar from "../../components/Sidebar.js";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Dashboard(){

    // states
	const [cropType, setCropType] = React.useState('');

	const handleCrop = (event) => {
		setCropType(event.target.value);
	};

	const [location, setLocation] = React.useState('');

	const handleLocation = (event) => {
		setLocation(event.target.value);
	};

	const [amount, setAmount] = React.useState('');

	const handleAmount = (event) => {
		setAmount(event.target.value);
	};
    //data access from axios

    //function


    return(
        <div>
            <Sidebar/>
			<div className='form'>
				<h1>Add Agriculture Data</h1>
			<div>
			<FormControl sx={{ m: 1, minWidth: 200 }}>
				<InputLabel id="demo-simple-select-autowidth-label">Crop Type</InputLabel>
				<Select
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				value={cropType}
				onChange={handleCrop}
				autoWidth
				label="Crop Type"
				>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value={0}>Onion</MenuItem>
				<MenuItem value={1}>Garlic</MenuItem>
				<MenuItem value={2}>Beet</MenuItem>
				<MenuItem value={3}>Leeks</MenuItem>
				<MenuItem value={4}>Banana</MenuItem>
				<MenuItem value={5}>Beet</MenuItem>
				<MenuItem value={6}>Rice</MenuItem>
				<MenuItem value={7}>Cabbage</MenuItem>
				<MenuItem value={8}>Pumpkin</MenuItem>
				</Select>
			</FormControl>
			</div>
			<div>
			<FormControl sx={{ m: 1, minWidth: 200 }}>
				<InputLabel id="demo-simple-select-autowidth-label">Location</InputLabel>
				<Select
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				value={location}
				onChange={handleLocation}
				autoWidth
				label="Location"
				>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value={0}>Anuradhapura</MenuItem>
				<MenuItem value={1}>Polonnaruwa</MenuItem>
				<MenuItem value={2}>Jaffna</MenuItem>
				<MenuItem value={3}>Kalawana</MenuItem>
				<MenuItem value={4}>Mahiyanganaya</MenuItem>
				<MenuItem value={5}>Watareka</MenuItem>
				<MenuItem value={6}>Rathnapura</MenuItem>
				<MenuItem value={7}>Ambilipitiya</MenuItem>
				<MenuItem value={8}>Hambanthota</MenuItem>
				</Select>
			</FormControl>
			</div>
			<div>
			<FormControl sx={{ m: 1, minWidth: 200 }}>
				<InputLabel id="demo-simple-select-autowidth-label">Amount</InputLabel>
				<Select
				labelId="demo-simple-select-autowidth-label"
				id="demo-simple-select-autowidth"
				value={amount}
				onChange={handleAmount}
				autoWidth
				label="Amount"
				>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				<MenuItem value={0}>50</MenuItem>
				<MenuItem value={1}>100</MenuItem>
				<MenuItem value={2}>150</MenuItem>
				<MenuItem value={3}>200</MenuItem>
				<MenuItem value={4}>250</MenuItem>
				<MenuItem value={5}>300</MenuItem>
				</Select>
			</FormControl>
			</div>
			</div>
			</div>

    );
}

export default Dashboard;