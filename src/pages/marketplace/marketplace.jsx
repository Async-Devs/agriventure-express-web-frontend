import React from "react";
import { Grid, Pagination} from "@mui/material";
import MarketplaceCard from "./marketplaceCard";
// import CardComponent from "../../components/cardComponent/cardComponent";

// const Item = styled(Paper)(({ theme }) => ({
// 	...theme.typography.body2,
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// 	height: 60,
// 	lineHeight: "60px",
// }));
function Marketplace(){

	return(
		<Grid container  border={1} justifyContent={"center"} p={5} bgcolor={"lightgray"}>
			<Pagination item count={10} shape="rounded" />
			<Grid item container spacing={2} p={4} maxWidth={1200}  border={1} xs={12} minWidth={800}>
				{[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5].map((p)=>{
					return(
						<Grid container key={p} item xs={12} sm={6} lg={3} xl={2} alignItems={"center"} justifyContent={"center"} border={1}>
							<MarketplaceCard/>
						</Grid>
					);
				})}
			</Grid>
			<Pagination item count={10} shape="rounded" />

		</Grid>
	);
}

export default Marketplace;