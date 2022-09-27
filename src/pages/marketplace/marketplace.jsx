import React, {useState} from "react";
import {Button, Grid} from "@mui/material";
import MarketplaceCard from "./marketplaceCard";
import CustomPagination from "../../components/pagination/pagination";
import {paginate} from "../../util/paginate";


const itemArray = [
	{
		"itemId": "6331c4a919c84509a9b68513",
		"price": 16713,
		"itemName": "Crop Name",
		"quantity": 23540
	},
	{
		"itemId": "6331c4a9ab54a6ff9bb75118",
		"price": 874818,
		"itemName": "Crop Name",
		"quantity": 19017
	},
	{
		"itemId": "6331c4a9cb1e942ff30a42f7",
		"price": 726967,
		"itemName": "Crop Name",
		"quantity": 5807
	},
	{
		"itemId": "6331c4a9926505da2889dd0f",
		"price": 834856,
		"itemName": "Crop Name",
		"quantity": 30786
	},
	{
		"itemId": "6331c4a9046a92f654329c24",
		"price": 165257,
		"itemName": "Crop Name",
		"quantity": 3224
	},
	{
		"itemId": "6331c4a9ec7d90a0387ee53d",
		"price": 60736,
		"itemName": "Crop Name",
		"quantity": 3658
	},
	{
		"itemId": "6331c4a9593a3edd0b203cdf",
		"price": 663829,
		"itemName": "Crop Name",
		"quantity": 86865
	},
	{
		"itemId": "6331c4a9a65f80c019967309",
		"price": 517771,
		"itemName": "Crop Name",
		"quantity": 39792
	},
	{
		"itemId": "6331c4a977e301fd52195520",
		"price": 789875,
		"itemName": "Crop Name",
		"quantity": 52094
	},
	{
		"itemId": "6331c4a971a1a38cc1f8cc0c",
		"price": 143433,
		"itemName": "Crop Name",
		"quantity": 42823
	},
	{
		"itemId": "6331c4a94d44737f2c35b868",
		"price": 996909,
		"itemName": "Crop Name",
		"quantity": 70058
	},
	{
		"itemId": "6331c4a9a43d040506f6d45b",
		"price": 228019,
		"itemName": "Crop Name",
		"quantity": 92041
	},
	{
		"itemId": "6331c4a9eaf9a5a6432064ec",
		"price": 397797,
		"itemName": "Crop Name",
		"quantity": 98474
	},
	{
		"itemId": "6331c4a92d4338b174f49f21",
		"price": 661336,
		"itemName": "Crop Name",
		"quantity": 53716
	},
	{
		"itemId": "6331c4a99dbf2ac24a95aa72",
		"price": 413732,
		"itemName": "Crop Name",
		"quantity": 14037
	},
	{
		"itemId": "6331c4a948ad08c161ee0d83",
		"price": 242682,
		"itemName": "Crop Name",
		"quantity": 84550
	},
	{
		"itemId": "6331c4a950eb2b495fd7859e",
		"price": 707045,
		"itemName": "Crop Name",
		"quantity": 99423
	},
	{
		"itemId": "6331c4a9e26b8354bf07c3cc",
		"price": 97745,
		"itemName": "Crop Name",
		"quantity": 57584
	},
	{
		"itemId": "6331c4a9fcc699d3de849209",
		"price": 93105,
		"itemName": "Crop Name",
		"quantity": 93899
	},
	{
		"itemId": "6331c4a95fda9493a6cb70f0",
		"price": 609459,
		"itemName": "Crop Name",
		"quantity": 39227
	},
	{
		"itemId": "6331c4a93699ef1c43a7f007",
		"price": 674065,
		"itemName": "Crop Name",
		"quantity": 21551
	},
	{
		"itemId": "6331c4a9022b281ed757af76",
		"price": 797714,
		"itemName": "Crop Name",
		"quantity": 91578
	},
	{
		"itemId": "6331c4a9c158f029046221c7",
		"price": 608095,
		"itemName": "Crop Name",
		"quantity": 82617
	},
	{
		"itemId": "6331c4a92e48c8b9633bf7d0",
		"price": 575927,
		"itemName": "Crop Name",
		"quantity": 70175
	},
	{
		"itemId": "6331c4a9b4165c0918f3adad",
		"price": 243084,
		"itemName": "Crop Name",
		"quantity": 77466
	},
	{
		"itemId": "6331c4a955abc41f1b780f60",
		"price": 384583,
		"itemName": "Crop Name",
		"quantity": 54814
	},
	{
		"itemId": "6331c4a9fd02179a882b1af0",
		"price": 371763,
		"itemName": "Crop Name",
		"quantity": 14717
	},
	{
		"itemId": "6331c4a9c509003051c3792f",
		"price": 540775,
		"itemName": "Crop Name",
		"quantity": 62350
	},
	{
		"itemId": "6331c4a9e4cf1a8e5fe95ba2",
		"price": 544812,
		"itemName": "Crop Name",
		"quantity": 76262
	},
	{
		"itemId": "6331c4a9d36baa882ef82dce",
		"price": 370301,
		"itemName": "Crop Name",
		"quantity": 67374
	},
	{
		"itemId": "6331c4a9415a7f4f4af0da37",
		"price": 67036,
		"itemName": "Crop Name",
		"quantity": 42896
	},
	{
		"itemId": "6331c4a9bc7c04d5933c25b4",
		"price": 283367,
		"itemName": "Crop Name",
		"quantity": 49220
	},
	{
		"itemId": "6331c4a924fb0a0e5b252dd1",
		"price": 768947,
		"itemName": "Crop Name",
		"quantity": 56080
	},
	{
		"itemId": "6331c4a9fa6d43b8682aaa6e",
		"price": 568143,
		"itemName": "Crop Name",
		"quantity": 90121
	},
	{
		"itemId": "6331c4a96e3418f78b06dcaa",
		"price": 132882,
		"itemName": "Crop Name",
		"quantity": 73803
	},
	{
		"itemId": "6331c4a9b27d7f9d5ef835c1",
		"price": 557110,
		"itemName": "Crop Name",
		"quantity": 77944
	},
	{
		"itemId": "6331c4a9b6cb0031626fcf1b",
		"price": 694052,
		"itemName": "Crop Name",
		"quantity": 83726
	},
	{
		"itemId": "6331c4a9df71de2e71bd8176",
		"price": 508428,
		"itemName": "Crop Name",
		"quantity": 56465
	},
	{
		"itemId": "6331c4a94422cb6d410a89b0",
		"price": 218719,
		"itemName": "Crop Name",
		"quantity": 94797
	},
	{
		"itemId": "6331c4a9cbd97b19010b1373",
		"price": 193631,
		"itemName": "Crop Name",
		"quantity": 39007
	},
	{
		"itemId": "6331c4a9d7f95fcaf93e8e36",
		"price": 403638,
		"itemName": "Crop Name",
		"quantity": 28953
	},
	{
		"itemId": "6331c4a98941f08e4deea4e0",
		"price": 273583,
		"itemName": "Crop Name",
		"quantity": 72479
	},
	{
		"itemId": "6331c4a97b33ea1c88ad0863",
		"price": 117918,
		"itemName": "Crop Name",
		"quantity": 55017
	},
	{
		"itemId": "6331c4a9ed505151e9585db6",
		"price": 963369,
		"itemName": "Crop Name",
		"quantity": 96443
	},
	{
		"itemId": "6331c4a9d302ba30b063537a",
		"price": 426603,
		"itemName": "Crop Name",
		"quantity": 10830
	},
	{
		"itemId": "6331c4a91d590b5bde03a2e6",
		"price": 285844,
		"itemName": "Crop Name",
		"quantity": 5352
	},
	{
		"itemId": "6331c4a97031c9675458cbd3",
		"price": 794641,
		"itemName": "Crop Name",
		"quantity": 92660
	}
];

function Marketplace(){
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 12;
	function handlePageChange(currentPage){
		console.log(currentPage);
		setCurrentPage(currentPage);
	}
	let pagedData = paginate(itemArray, currentPage, pageSize);

	return(
		<Grid container justifyContent={"center"} p={5}>
			<Grid item >
				<Button>Filter</Button>
			</Grid>
			<Grid item>
				<CustomPagination itemsCount={itemArray.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
			</Grid>
			<Grid item container spacing={5} p={4} xs={12} >
				{pagedData.map((p)=>{
					return(
						<Grid container key={p.itemId} item xs={12} sm={6} md={4} lg={3} xl={2} justifyContent={"center"}>
							<MarketplaceCard
								itemId={p.itemId}
								imgSrc={"https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"}
								itemName={p.itemName}
								minBid={p.price}
								quantity={p.quantity}/>
						</Grid>
					);
				})}
			</Grid>
			<Grid item>
				<CustomPagination itemsCount={itemArray.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
			</Grid>
		</Grid>
	);
}

export default Marketplace;