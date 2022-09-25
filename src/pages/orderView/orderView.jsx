import React, {useState} from "react";
import {Box, ButtonGroup, Grid, Paper, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import RefundRequest from "../../components/refundRequest/refundRequest";
import {useParams} from "react-router-dom";
import SaveButton, {LinkedButton} from "../../components/button/button";
import CustomInformationListItem from "../../components/customInformationListItem/customInformationListItem";

function OrderView(){
	const [open,setOpen] = useState(false);
	const [refundBody,setRefundBody] = useState();
	const [refundValue,setRefundValue] = useState();
	const [isChatOpen, setChat] = useState({gridVal:0,chatDisplay:"none"});

	const {id} = useParams();
	const topGap = 5;
	const itemHeight = 10;

	function onClickRefund(){
		setOpen(true);
	}

	function handleClose(){
		setOpen(false);
	}

	function handleSubmit(){
		//todo: check the validity
		handleClose();

	}

	function onClickChat(){
		if (isChatOpen.gridVal == 0)return setChat({gridVal:4,chatDisplay:null});
		return setChat({gridVal:0,chatDisplay:"none"});
	}

	function onChange(event){
		if(event.target.name === "body"){
			setRefundBody(event.target.value);
		}else if(event.target.name === "value"){
			// if(!isNaN(event.target.value) && !isNaN(parseFloat(event.target.value)) ){
			// 	setRefundValue(parseFloat(event.target.value));
			// }
			setRefundValue(parseFloat(event.target.value));
		}
	}
	return(
		<Paper elevation={3} sx={{ flexGrow: 1, p: 5, m:5, mx: "auto", width: "80%" }}>
			
			<Grid container alignItems="center" justifyContent={"left"}>
				<Typography gutterBottom variant="h4" component="div">
					Order Details
				</Typography>
			</Grid>

			<Grid container spacing={2}>
				<Grid container item xs={12-isChatOpen.gridVal} alignItems={"center"}>

					<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Invoice Number"} infoValue={`${id}3eaa670f-1e05-4a1d-beea-d49dccd4eef6`}/>
					<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Producer"} infoValue={"Producer Name"}/>
					<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Item"} infoValue={"Carrot"}/>
					<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Quantity"} infoValue={"2 Metric Tons"}/>
					<CustomInformationListItem topMargin={topGap} height={"auto"} infoTitle={"Description"} infoValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac libero luctus libero porta tristique eu eget mauris. In iaculis mattis tellus sit amet malesuada. Mauris non eros a augue lobortis feugiat a in dolor. Aliquam a elit sed mauris porta vestibulum. Suspendisse quam nisi, malesuada fringilla iaculis et, consectetur eget felis. Sed felis sapien, sagittis sed imperdiet eget, accumsan pellentesque leo. Fusce eu hendrerit dolor, vitae euismod ex. Nam leo libero, faucibus sed vehicula ut, efficitur ut lorem. Fusce accumsan ante vulputate, vulputate ante in, mattis risus. Mauris tincidunt et lectus vitae tempor. Nullam auctor ante ut mollis auctor. Fusce dignissim ultrices arcu ac cursus. Fusce lacinia viverra nisl in placerat. Donec auctor elit quis ante consectetur, non iaculis tellus cursus. Vivamus ut quam orci"}/>
					<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Order Price"} infoValue={"LKR 2,000,000"}/>
					<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Date Placed"} infoValue={"2022-10-15T13:36:46.000+05:30"}/>
					<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Payment Status"} infoValue={"PAID"}/>
					<CustomInformationListItem topMargin={topGap} height={itemHeight} infoTitle={"Delivery Status"} infoValue={"OUT-FOR-DELIVERY"}/>

					<Grid container item xs={10} mt={topGap} height={itemHeight} >
						<ButtonGroup variant="outlined" aria-label="outlined button group" item xs={4}>
							<Button onClick={onClickRefund} >Refund</Button>
							<Button onClick={onClickChat}>Chat</Button>
							<SaveButton />
						</ButtonGroup>
					</Grid>
					<Grid container item xs={2} mt={topGap} height={itemHeight} justifyContent={"right"}>
						<LinkedButton href={"/orders"} content={"Back"}/>
					</Grid>

				</Grid>
				<Grid item xs={isChatOpen.gridVal} display={isChatOpen.chatDisplay}>
					<Box bgcolor={"red"}>
						WIP: Insert Chat Component Here
					</Box>
				</Grid>
			</Grid >
			<RefundRequest open={open} handleSubmit={handleSubmit} handleClose={handleClose} onChange={onChange} body={refundBody} value={refundValue}/>
			
			
		</Paper>
	);
}

export default OrderView;