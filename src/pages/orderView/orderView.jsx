import React, {useState} from "react";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import RefundRequest from "../../components/refundRequest/refundRequest";


function OrderView(){
	const [open,setOpen] = useState(false);
	const [refundBody,setRefundBody] = useState();
	const [refundValue,setRefundValue] = useState();

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
		<Grid container>
			<Grid item><Button onClick={onClickRefund} variant="outlined">Refund</Button></Grid>
			<Grid item><RefundRequest open={open} handleSubmit={handleSubmit} handleClose={handleClose} onChange={onChange} body={refundBody} value={refundValue}/></Grid>
		</Grid>
	);
}

export default OrderView;