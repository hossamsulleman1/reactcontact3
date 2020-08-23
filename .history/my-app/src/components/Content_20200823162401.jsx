import React from "react";
import CardItem from "./CardItem.jsx";
import { Grid } from "@material-ui/core";
import itemList from "./constants"

const Content = () => {

const getItemListCard = (itemListObj) => {
    const {title, price, description, avatarUrl, ImageUrl} = itemListObj
return <CardItem    {...itemListObj} 
}

return (
    <Grid container spacing={4} >
        <Grid item xs={12} sm={4} >
        <CardItem/>
        </Grid>
        <Grid item xs={12} sm={4} >
        <CardItem/>
        </Grid>
        <Grid item xs={12} sm={4} >
        <CardItem/>
        </Grid>
    </Grid>

)
};

export default Content;