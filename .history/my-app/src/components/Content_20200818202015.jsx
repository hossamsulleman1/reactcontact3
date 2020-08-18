import React from "react";
import CardItem from "./CardItem.jsx";
import { Grid } from "@material-ui/core";


const Content = () => {
return (
    <Grid container spacing={4} >
        <Grid item xs={12} >
        <CardItem/>
        </Grid>
        <Grid item xs={4} >
        <CardItem/>
        </Grid>
        <Grid item xs={4} >
        <CardItem/>
        </Grid>
    </Grid>

)
};

export default Content;