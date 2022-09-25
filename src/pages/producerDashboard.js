import React from "react";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Grid from '@mui/material/Grid';
import ProductCard from "../components/ProductCard/ProductCard.js"

function ProducerDashboard(){
    return(
        <div>
            <Sidebar/>
            <Grid container spacing={2.5}marginTop="20px" padding="20px">
					<Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
                    <Grid item xs={12} md={2.2}>
                            <ProductCard/>
					</Grid>
				</Grid>
        </div>
    );
}

export default ProducerDashboard;