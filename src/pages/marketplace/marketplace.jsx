import React from "react";
import {Box} from "@mui/material";
import CardComponent from "../../components/cardComponent/cardComponent";

// const Item = styled(Paper)(({ theme }) => ({
// 	...theme.typography.body2,
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// 	height: 60,
// 	lineHeight: "60px",
// }));
function Marketplace(){

	return(
		<Box
			sx={{
				p: 1,
				bgcolor: "background.default",
				display: "grid",
				gridTemplateColumns: { md: "1fr 1fr" },
				gap: 1,
			}}
		>
			<CardComponent/>

		</Box>
	);
}

export default Marketplace;