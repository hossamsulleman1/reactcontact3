import React from "react";
import CardItem from "./CardItem.jsx";
import { Grid } from "@material-ui/core";
import itemList from "./constants"

const Content = () => {
const getItemCard = itemListObj => {
    return (
        <Grid item xs={12} sm={4}>
            <CardItem {...itemListObj}/>
        </Grid>
    );
};

return (
    <Grid container spacing={2}>
        {itemList.map(itemListObj =)}
    </Grid>
)
export default Content;