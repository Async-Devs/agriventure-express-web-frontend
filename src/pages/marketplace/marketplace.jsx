import React, {useEffect, useState} from "react";
import {Button, CircularProgress, Grid, Typography} from "@mui/material";
import MarketplaceCard from "./marketplaceCard";
import CustomPagination from "../../components/pagination/pagination";
import {paginate} from "../../util/paginate";
import {getAllItems} from "../../services/itemServices";

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

	if (rawItemData==null){
		return (
			<Grid item align="center" height={500} xs={12}>
				<Typography variant={"h4"}>
				No Items Available
				</Typography>
				<img width={300} height={300} src={"https://media.istockphoto.com/vectors/black-cute-sad-grumpy-cat-kitten-bad-emotion-cartoon-kitty-character-vector-id1135080317?k=20&m=1135080317&s=612x612&w=0&h=Gvus8WCVGpUpyXOJOZO0FGaMOfa_Tc2Liy-IK-3b4ik="}/>
			</Grid>
		);
	}
	return(
		<Grid container justifyContent={"center"} p={5}>
			<Grid item >
				<Button>Filter</Button>
			</Grid>
			<Grid item>
				<CustomPagination itemsCount={rawItemData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
			</Grid>
			<Grid item container spacing={5} p={4} xs={12} >
				{pagedData.map((p)=>{
					return(
						<Grid container key={p._id} item xs={12} sm={6} md={4} lg={3} xl={2} justifyContent={"center"}>
							<MarketplaceCard
								itemId={p._id}
								imgSrc={p.images[0].src}
								itemName={p.name}
								minBid={p.minimum_bid}
								quantity={p.quantity}/>
						</Grid>
					);
				})}
			</Grid>
			<Grid item>
				<CustomPagination itemsCount={rawItemData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
			</Grid>
		</Grid>
	);
}

export default Marketplace;
