import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CardComponent(props) {
	
	return (
		// eslint-disable-next-line react/prop-types
		<Card sx={{ maxWidth: 345 }} onClick={props.onClick}>
			<CardActionArea>

				<CardMedia
					/* eslint-disable-next-line react/prop-types */
					image={props.img}
					component="img"
					height="140"
					/* eslint-disable-next-line react/prop-types */
					alt={props.heading}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{/* eslint-disable-next-line react/prop-types */}
						{props.heading}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{/* eslint-disable-next-line react/prop-types */}
						{props.body}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default CardComponent;