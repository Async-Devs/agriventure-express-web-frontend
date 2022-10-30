import React, {useEffect, useState} from "react";
import {Button, CircularProgress, Grid, Typography} from "@mui/material";
import MarketplaceCard from "./marketplaceCard";
import CustomPagination from "../../components/pagination/pagination";
import {paginate} from "../../util/paginate";
import {getAllItems} from "../../services/itemServices";
// import TextInput from "../../components/textInput/textInput";
import SearchBar from "../../components/searchBar/searchBar";
import Paper from "@mui/material/Paper";

function Marketplace(){
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const [rawItemData, setItemData] = useState([]);
	const [pagedData, setPaginateData] = useState([]);
	const pageSize = 12;

	// Mount Data
	useEffect(()=>{
		async function getItemList(){
			const items = await getAllItems();
			setItemData(items.data);
		}
		getItemList();
	},[]);

	// Paginate Data
	useEffect(()=>{
		setPaginateData(paginate(rawItemData, currentPage, pageSize));
		setLoading(false);
	},[rawItemData]);

	// On change page
	useEffect(()=>{
		setLoading(true);
		setPaginateData(paginate(rawItemData, currentPage, pageSize));
		setLoading(false);
	}, [currentPage]);

	function handlePageChange(currentPage){
		setCurrentPage(currentPage);
	}

	if (isLoading){
		return (
			<Grid item align="center" height={500} xs={12}>
				<CircularProgress />
			</Grid>
		);
	}
	console.log(rawItemData);
	if (rawItemData==null || rawItemData.length == 0){
		return (

			<Grid container justifyContent={"center"}>
				<Grid item container p={3} maxWidth={1600} justifyContent={"center"} border={1}>
					<Grid item container xs={12} justifyContent={"center"} bgcolor={"red"}>
						<Grid item xs={12} >
							<SearchBar/>
						</Grid>

					</Grid>
					<Grid item container spacing={3} mt={5} mb={5} xs={12}>
						<Grid item align="center" height={500} xs={12}>
							<Typography variant={"h4"}>
							No Items Available
							</Typography>
							<img width={300} height={300} src={"https://media.istockphoto.com/vectors/black-cute-sad-grumpy-cat-kitten-bad-emotion-cartoon-kitty-character-vector-id1135080317?k=20&m=1135080317&s=612x612&w=0&h=Gvus8WCVGpUpyXOJOZO0FGaMOfa_Tc2Liy-IK-3b4ik="}/>
						</Grid>
					</Grid>

				</Grid>
			</Grid>
		);
	}
	return(
		<Grid container justifyContent={"center"}>
			<Grid item container p={3} maxWidth={1600} justifyContent={"center"}>
				<Grid item container xs={12} justifyContent={"center"}>
					<Grid item xs={12}>
						<Typography variant={"h3"}>Marketplace</Typography>
					</Grid>
				</Grid>
				<Grid item container xs={12} justifyContent={"center"} mt={5}>
					<Grid item xs={12} >
						<SearchBar/>
					</Grid>
					{/*<Grid item xs={2} bgcolor={"green"}>*/}
					{/*	<Search></Search>*/}
					{/*</Grid>*/}
				</Grid>
				<Grid item container xs={12} justifyContent={"center"}>
					<Grid item>
						<Button >Filter</Button>
					</Grid>
				</Grid>
				<Grid item container xs={12} justifyContent={"center"}>
					<Grid item>
						<CustomPagination itemsCount={rawItemData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
					</Grid>
				</Grid>
				<Grid item container xs={12} lg={3} mt={5} mb={5} bgcolor={"pink"}>
					<Grid item mt={3}>
						<Paper>

						</Paper>
					</Grid>
				</Grid>
				<Grid item container spacing={3} mt={5} mb={5} xs={12} lg={9} bgcolor={"red"}>
					{pagedData.map((p)=>{ console.log();
						return(
							<Grid container key={p._id} item sm={12} md={6} lg={4} xl={3}>
								<MarketplaceCard
									itemId={p._id}
									imgSrc={p.images[0].src}
									itemName={p.name}
									minBid={p.minimum_bid}
									quantity={p.quantity}
									city={p.location.city}
								/>
							</Grid>
						);
					})}
				</Grid>
				<Grid item>
					<CustomPagination itemsCount={rawItemData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Marketplace;
