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
				</div>
			</div>

    );
}

export default Dashboard;