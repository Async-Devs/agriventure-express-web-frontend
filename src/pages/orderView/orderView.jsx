import React, {useState} from "react";
// import {useParams} from "react-router-dom";

function OrderView(){
	const [id, setId] = useState();
	setId(2);
	return(
		<div>OrderDetails
			{id}
		</div>
	);
}

export default OrderView;