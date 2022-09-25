import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import ChatWindow from "../../components/chatWindow/chatWindow";

function SupportRequests() {
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Grid container>
			<Grid item xs={12} ml={5}>
				<Typography variant="h2"><b>SUPPORT REQUESTS</b></Typography>
				<Typography variant="body2">Make sure to handle these requests as soon as possible</Typography>
			</Grid>
			<Grid item xs={12} ml={2} align="center">
				<Box sx={{ width: "100%", maxWidth:"sm", typography: "body1" }}>
					<TabContext value={value}>
						<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
							<TabList onChange={handleChange} aria-label="lab API tabs example">
								<Tab label="Support Requests" value="1" />
								<Tab label="Refund Requests" value="2" />
								<Tab label="Old Requests" value="3" />
							</TabList>
						</Box>
						<TabPanel value="1"><ChatWindow mode={value} userType={3}/></TabPanel>
						<TabPanel value="2"><ChatWindow mode={value} userType={3}/></TabPanel>
						<TabPanel value="3"><ChatWindow mode={value} userType={3}/></TabPanel>
					</TabContext>
				</Box>
			</Grid>
		</Grid>

	);
}

export default SupportRequests;
