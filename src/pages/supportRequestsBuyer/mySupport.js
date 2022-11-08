import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import ChatWindow from "../../components/chatWindow/chatWindow";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function MySupport() {
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};


	return (
		<Grid container>
			<Grid item xs={12} ml={5}>
				<Typography variant="h2"><b>MY SUPPORT REQUESTS</b></Typography>
				<Typography variant="body2">Our officers will help you to make life easier</Typography>
			</Grid>
			<Grid item xs={12} ml={2} align="center">
				<Box sx={{ width: "100%", maxWidth:"sm", typography: "body1" }}>
					<TabContext value={value}>
						<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
							<TabList onChange={handleChange} aria-label="lab API tabs example">
								<Tab label="Support Requests" value="1" />
								<Tab label="Old Requests" value="3" />
							</TabList>
						</Box>
						<TabPanel value="1"><ChatWindow mode={value} userType={1}/></TabPanel>
						<TabPanel value="3"><ChatWindow mode={value} userType={1}/></TabPanel>
					</TabContext>
				</Box>
			</Grid>
			<Grid item xs={12} align="center" m={3}>
				<Link to=".." style={{ textDecoration: "none" }}>
					<Button variant="contained">Back</Button>
				</Link>
			</Grid>
		</Grid>

	);
}

export default MySupport;
