import React, {useEffect, useState} from "react";
import { CircularProgress, Grid, Typography} from "@mui/material";
import MarketplaceCard from "./marketplaceCard";
import CustomPagination from "../../components/pagination/pagination";
import {paginate} from "../../util/paginate";
import {getAllItems} from "../../services/itemServices";
import SearchBar from "../../components/searchBar/searchBar";
import MarketPlaceFilters from "./marketplaceFilters";

function Marketplace(){
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setLoading] = useState(true);
	const [rawItemData, setItemData] = useState([]);
	const [pagedData, setPaginateData] = useState([]);
	const [filteredData, setFilterData] = useState([]);
	const [filteredCustomData, setFilterCustomData] = useState([-1,-1,-1,-1]);
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
		setPaginateData(paginate(filteredData, currentPage, pageSize));
		setLoading(false);
	},[filteredData]);

	// setupFiltered Data
	useEffect(()=>{
		setFilterData(rawItemData);
	},[rawItemData]);

	// On change page
	useEffect(()=>{
		setLoading(true);
		setPaginateData(paginate(filteredData, currentPage, pageSize));
		setLoading(false);
	}, [currentPage]);

	function handlePageChange(currentPage){
		setCurrentPage(currentPage);
	}

	if (isLoading){
		return (
			<Grid item align='center' height={500} xs={12}>
				<CircularProgress />
			</Grid>
		);
	}

	function costFilter(range, dataArray){

		const data = dataArray;
		const filteredData = data.filter(
			(ele)=>{
				if(range == "0"){
					return ele;
				}
				else if(range == "1" && ele.minimum_bid < 100000){
					return ele;
				}else if(range == "2" && ele.minimum_bid >= 100000 && ele.minimum_bid < 1000000){
					return ele;
				}else if(range == "3" && ele.minimum_bid < 10000000 && ele.minimum_bid >= 1000000){
					return ele;
				}else if(range == "4" && ele.minimum_bid >= 10000000){
					return ele;
				}else if(range == "5" ){
					if(filteredCustomData[0]== -1 || filteredCustomData[1]==-1){
						return ele;
					}else {
						if(ele.minimum_bid < +filteredCustomData[1] && ele.minimum_bid >= +filteredCustomData[0]){
							return ele;
						}
					}
				}
			});
		return filteredData;
	}
	const customQuantityFilter=(range)=>{
		setFilterCustomData([filteredCustomData[0], filteredCustomData[1], range[0], range[1]]);
	};
	const customBidFilter=(range)=>{
		setFilterCustomData([range[0], range[1], filteredCustomData[2], filteredCustomData[3]]);
	};
	function quantityFilter(range, dataArray){
		const data = dataArray;
		const filteredData = data.filter(
			(ele)=>{
				if(range == "0"){
					return ele;
				}
				else if(range == "1" && ele.quantity < 100){
					return ele;
				}else if(range == "2" && ele.quantity >= 100 && ele.quantity < 1000){
					return ele;
				}else if(range == "3" && ele.quantity < 10000 && ele.quantity >= 1000){
					return ele;
				}else if(range == "4" && ele.quantity >= 10000){
					return ele;
				}else if(range == "5"){
					if(filteredCustomData[2]== -1 || filteredCustomData[3]==-1){
						return ele;
					}else {
						if(ele.quantity < +filteredCustomData[3] && ele.quantity >= +filteredCustomData[2]){
							return ele;
						}
					}
				}
			});
		return filteredData;
	}
	function districtFilter(range, dataArray){
		const data = dataArray;
		const filteredData = data.filter(
			(ele)=>{
				if(range.has(ele.location.district)){
					return ele;
				}
				return;
			});
		return filteredData;
	}

	function cropFilter(range, dataArray){
		const data = dataArray;
		const filteredData = data.filter(
			(ele)=>{
				if(range.has(ele.name)){
					return ele;
				}
				return;
			});
		return filteredData;
	}
	function onFilterChange(data){
		let filteredData = rawItemData;
		const {minBid, quantity, district, crops} = data;
		filteredData = costFilter(minBid, filteredData);
		filteredData = quantityFilter(quantity, filteredData);
		filteredData = districtFilter(district, filteredData);
		filteredData = cropFilter(crops, filteredData);
		setCurrentPage(1);
		setFilterData(filteredData);


	}
	// console.log("raw data - ", rawItemData);
	if (rawItemData==null || rawItemData.length == 0){
		return (
			<Grid container justifyContent={"center"} data-testid={"Marketplace"}>
				<Grid item container p={3} maxWidth={1600} justifyContent={"center"}>
					<Grid item container xs={12} justifyContent={"center"}>
						<Grid item xs={12}>
							<Typography variant={"h3"}>Marketplace</Typography>
						</Grid>
					</Grid>
					<Grid item container xs={12} xl={3} mt={1} >
						<Grid container item mt={3} mr={3} data-testid={"MarketplaceFilters"}>
							<MarketPlaceFilters filterOnchange={onFilterChange} rangeQuantity={customQuantityFilter} rangeBid={customBidFilter}/>
						</Grid>
					</Grid>
					<Grid item container spacing={3} mt={1} mb={5} xs={12} xl={9}>
						<Grid item xs={12} data-testid={"MarketplaceSearchbar"}>
							<SearchBar/>
						</Grid>
						<Grid item container spacing={3} mt={5} mb={5} xs={12}>
							<Grid item align="center" height={500} xs={12} minHeight={1200}>
								<Typography variant={"h4"}>
								No Items Available
								</Typography>
								<img height={300} src={"https://www.creativefabrica.com/wp-content/uploads/2021/01/04/Mustard-Sad-Vegetable-Cute-Kawaii-Graphics-7557389-1.jpg"}/>
							</Grid>
						</Grid>
						<Grid item container xs={12} justifyContent={"center"}>
							<Grid item>
								<CustomPagination itemsCount={filteredData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}

	if (rawItemData!=null && filteredData !=null && filteredData.length == 0){
		return (
			<Grid container justifyContent={"center"} data-testid={"Marketplace"}>
				<Grid item container p={3} maxWidth={1600} justifyContent={"center"}>
					<Grid item container xs={12} justifyContent={"center"}>
						<Grid item xs={12}>
							<Typography variant={"h3"}>Marketplace</Typography>
						</Grid>
					</Grid>
					<Grid item container xs={12} xl={3} mt={1} >
						<Grid container item mt={3} mr={3}  data-testid={"MarketplaceFilters"}>
							<MarketPlaceFilters filterOnchange={onFilterChange} rangeQuantity={customQuantityFilter} rangeBid={customBidFilter}/>
						</Grid>
					</Grid>
					<Grid item container spacing={3} mt={1} mb={5} xs={12} xl={9}>
						<Grid item xs={12} data-testid={"MarketplaceSearchbar"}>
							<SearchBar/>
						</Grid>
						<Grid item container spacing={3} mt={5} mb={5} xs={12}>
							<Grid item align="center" height={500} xs={12}>
								<Typography variant={"h4"}>
								No Items Available
								</Typography>
								<img height={300} src={"https://www.creativefabrica.com/wp-content/uploads/2021/01/04/Mustard-Sad-Vegetable-Cute-Kawaii-Graphics-7557389-1.jpg"}/>
							</Grid>
						</Grid>
						<Grid item container xs={12} justifyContent={"center"}>
							<Grid item>
								<CustomPagination itemsCount={filteredData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
	return(
		<Grid container data-testid={"Marketplace"} justifyContent={"center"} p={3}>
			<Grid item container maxWidth={1600} justifyContent={"center"}>
				<Grid item container xs={12}>
					<Grid item xs={12}>
						<Typography variant={"h3"}>Marketplace</Typography>
					</Grid>
				</Grid>
				<Grid item container xs={12} xl={3} mt={1}>
					<Grid container item mt={3} mr={3} data-testid={"MarketplaceFilters"}>
						<MarketPlaceFilters filterOnchange={onFilterChange} rangeQuantity={customQuantityFilter} rangeBid={customBidFilter}/>
					</Grid>
				</Grid>
				<Grid item container spacing={3} mt={1} mb={5} xs={12} xl={9} direction={"column"} justifyContent={"flex-start"} alignItems={"stretch"}>
					<Grid item data-testid={"MarketplaceSearchbar"}>
						<SearchBar/>
					</Grid>
					<Grid container item spacing={3}>
						{pagedData.map((p)=>{
							return(
								<Grid item container key={p._id} xs={12} sm={6} md={4} lg={3} xl={3}>
									<MarketplaceCard
										itemId={p._id}
										imgSrc={p.images[0].src}
										itemName={p.name}
										minBid={+p.minimum_bid}
										quantity={p.quantity}
										city={p.location.city}
									/>
								</Grid>
							);
						})}
					</Grid>
					<Grid item container justifyContent={"center"}>
						<Grid item>
							<CustomPagination itemsCount={filteredData.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Marketplace;
