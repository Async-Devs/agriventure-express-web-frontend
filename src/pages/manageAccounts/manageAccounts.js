import React from "react";
import {Divider, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {TabContext, TabPanel} from "@mui/lab";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import AccountResults from "../../components/accountResults/accountResults";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";

function ManageAccounts(){

	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	
	return(
		<Container>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h4">Manage Accounts</Typography>
					<Divider />
				</Grid>
				<Grid item xs={12} mt={1}>
					<Link to = "addOfficer"  style={{ textDecoration: "none" }}>
						<Button variant="contained" color="success">Add New Officer</Button>
					</Link>
				</Grid>
				<Grid item xs={12} mt={1}>
					<Box sx={{ width: "100%", typography: "body1" }}>
						<TabContext value={value}>
							<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
								<TabList onChange={handleChange} aria-label="lab API tabs example">
									<Tab label="Producers" value="1" />
									<Tab label="Buyers" value="2" />
									<Tab label="Officers" value="3" />
								</TabList>
							</Box>
							<TabPanel value="1"><AccountResults /></TabPanel>
							<TabPanel value="2"><AccountResults /></TabPanel>
							<TabPanel value="3"><AccountResults /></TabPanel>
						</TabContext>
					</Box>
				</Grid>
			</Grid>
		</Container>

	);
}

export default ManageAccounts;