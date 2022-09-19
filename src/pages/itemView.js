import React from "react";
import {useParams} from "react-router-dom";

function ItemView(){

    const itemId = useParams().item_id;

    return(
        <div>item view of item - {itemId}</div>
    );
}

export default ItemView;