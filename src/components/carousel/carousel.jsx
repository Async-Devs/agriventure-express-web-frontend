import React from "react";
import {Grid, Paper, Skeleton} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import PropTypes from "prop-types";

const items = [
	{
		src: "https://media.istockphoto.com/photos/leafy-green-vegetables-isolated-picture-id481492527?k=20&m=481492527&s=612x612&w=0&h=8LdKlhXMhVjLX_IeE0-ieS52Hbp06Pfq8gfE2bzdAlw="
	},
	{
		src: "https://media.istockphoto.com/photos/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden-picture-id1280856062?b=1&k=20&m=1280856062&s=170667a&w=0&h=wQu-c2ZjzeCBkAGEj69xpF611lx1i_xim48vOCj_Dw0="
	},
	{
		src: "https://media.istockphoto.com/photos/mixed-vegetables-in-bowl-picture-id1199237867?k=20&m=1199237867&s=612x612&w=0&h=BfdeA_Aax6eTDw_peGbuakQ5Rk0hZCDFmox55MmGmSc="
	},
	{
		src: "https://media.istockphoto.com/photos/raw-healthy-food-clean-eating-vegetables-source-protein-vegetarians-picture-id1003089724?k=20&m=1003089724&s=612x612&w=0&h=C7TGe_SIMhAPKel1IUqbmgyCMiOL1uJ4YBSS7oBzOoo="
	},
	{
		src: "https://media.istockphoto.com/photos/vegan-raw-vegetables-on-green-wooden-table-background-picture-id1318478175?b=1&k=20&m=1318478175&s=170667a&w=0&h=EDYUhDAEqIabRL7ybjbx_ArX1EgMELyoNcb9P01d-CY="
	},{
		src: null
	}
];


function Item(props)
{
	return (
		props.imagesrc==null?
			<Paper>
				<Skeleton variant="rectangular" width={"auto"} height={300} animation="wave"/>
			</Paper>:
			<Paper style={{backgroundImage: `url(${props.imagesrc})`,backgroundSize: "auto", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} >
				<Grid height={300}>
				</Grid>
			</Paper>
	);
}

function CustomCarousel(){
	return(
		<Carousel autoPlay={false} height={300}>
			{
				items.map( (key) => <Item key={key} imagesrc ={key.src} /> )
			}
		</Carousel>
	);
}


Item.propTypes = {
	imagesrc: PropTypes.string
};

// Carousel.prototype = {
// 	imageArray: PropTypes.array
// };

export default CustomCarousel;