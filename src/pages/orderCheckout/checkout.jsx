import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./addressForm";
import PaymentForm from "./paymentForm";
import Review from "./review";
import {LinkedButton} from "../../components/button/button";
import {useState} from "react";
import WarningIcon from "@mui/icons-material/Warning";
import {Stack} from "@mui/material";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(
	step,
	firstname,
	setFirstname,
	lastname,
	setLastname,
	addressLn1,
	setAddressLn1,
	addressLn2,
	setAddressLn2,
	city,
	setCity,
	district,
	setDistrict,
	zipCode,
	setZipCode,
	nameOnCard,
	setNameOnCard,
	card,
	setCard,
	expireDate,
	setExpireDate,
	cvv,
	setCvv
) {
	switch (step) {
	case 0:
		return <AddressForm
			firstname={firstname}
			setFirstname={setFirstname}
			lastname={lastname}
			setLastname={setLastname}
			addressLn1={addressLn1}
			setAddressLn1={setAddressLn1}
			addressLn2={addressLn2}
			setAddressLn2={setAddressLn2}
			city={city} setCity={setCity}
			district={district}
			setDistrict={setDistrict}
			zipCode={zipCode}
			setZipCode={setZipCode}
		/>;
	case 1:
		return <PaymentForm
			nameOnCard={nameOnCard}
			setNameOnCard={setNameOnCard}
			card={card} setCard={setCard}
			expireDate={expireDate}
			setExpireDate={setExpireDate}
			cvv={cvv}
			setCvv={setCvv}
		/>;
	case 2:
		return <Review />;
	default:
		throw new Error("Unknown step");
	}
}

export default function Checkout() {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [addressLn1, setAddressLn1] = useState("");
	const [addressLn2, setAddressLn2] = useState("");
	const [city, setCity] = useState("");
	const [district, setDistrict] = useState("");
	const [zipCode, setZipCode] = useState("");

	const [nameOnCard, setNameOnCard] = useState("");
	const [card, setCard] = useState("");
	const [expireDate, setExpireDate] = useState("");
	const [cvv, setCvv] = useState("");



	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
			<Paper  sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} elevation={4}>
				<Typography component="h1" variant="h4" align="center">
						Checkout
				</Typography>
				<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<React.Fragment>
					{activeStep === steps.length ? (
						<React.Fragment>
							<Stack direction="row" alignItems="center" gap={1}>
								<WarningIcon color={"warning"}/>
								<Typography textAlign={"left"} variant={"body1"}>Remaining time Should be at least 2hours</Typography>
							</Stack>
							<Typography variant="h5" gutterBottom>
									Thank you for your order.
							</Typography>
							<Typography variant="subtitle1">
									Your order number is #2001539. We have emailed your order
									confirmation, and will send you an update when your order has
									shipped.
							</Typography>
							<LinkedButton href={"/"} content={"Back to Dashboard"} variant={"contained"} sx={{color: "white"}}/>
						</React.Fragment>
					) : (
						<React.Fragment>
							{getStepContent(
								activeStep,
								firstname,
								setFirstname,
								lastname,
								setLastname,
								addressLn1,
								setAddressLn1,
								addressLn2,
								setAddressLn2,
								city,
								setCity,
								district,
								setDistrict,
								zipCode,
								setZipCode,
								nameOnCard,
								setNameOnCard,
								card,
								setCard,
								expireDate,
								setExpireDate,
								cvv,
								setCvv
							)}
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
									{activeStep === steps.length - 1 ? "Place order" : "Next"}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</React.Fragment>
			</Paper>
		</Container>
	);
}
