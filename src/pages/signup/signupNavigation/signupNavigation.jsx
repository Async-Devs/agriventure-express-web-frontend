import React, {useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UserType from "../userType/userType";
import {Alert} from "@mui/material";
import ProducerDetails from "../producerDetails/producerDetails";

function SignupNavigation() {

	const [userType, setUserType] = useState();
	const [error,setError] = useState();
	const [isErrorHidden,setErrorHidden] = useState(true);

	const [activeStep, setActiveStep] = React.useState(0);
	const steps = ["User Type", "User Details", "Login Details", "Review"];

	const handleNext = () => {
		if(activeStep === 0){
			if(userType === 0 || userType === 1){
				setActiveStep(activeStep + 1);
				setErrorHidden(true);
			}else{
				setError("Select user type!");
				setErrorHidden(false);
			}
		}
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	function handleUserTypeChange(event){

		if(event.target.name === "userType"){
			setUserType(event.target.value);
		}
	}

	function getStepContent(step) {
		switch (step){
		case 0:
			return <UserType userType={userType} handleChange={handleUserTypeChange}/>;
		case 1:
			return <ProducerDetails />;
		}

	}

	return (

		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			<Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
				<Typography component="h1" variant="h4" align="center">
					Sign Up
				</Typography>
				<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div hidden={isErrorHidden}>
					<Alert severity="error">{error}</Alert>
				</div>
				<React.Fragment>
					{activeStep === steps.length ? (
						<React.Fragment>
							<Typography variant="h5" gutterBottom>
								Thank you for your order.
							</Typography>
							<Typography variant="subtitle1">
								Your order number is #2001539. We have emailed your order
								confirmation, and will send you an update when your order has
								shipped.
							</Typography>
						</React.Fragment>
					) : (
						<React.Fragment>
							{getStepContent(activeStep)}
							<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
								{activeStep !== 0 && (
									<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
										Back
									</Button>
								)}

								<Button
									variant="contained"
									onClick={handleNext}
									sx={{ mt: 3, ml: 1 }}
								>
									{activeStep === steps.length - 1 ? "Submit Details" : "Next"}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</React.Fragment>
			</Paper>
		</Container>

	);
}

export default SignupNavigation;