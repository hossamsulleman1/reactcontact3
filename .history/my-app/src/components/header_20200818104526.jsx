import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {

    return (
        <AppBar position="static">
            {/* position static is a prop that can be supplioed to the material ui element  */}
            <Toolbar>
                <Typography>
                   this is our header 
                </Typography>
            </Toolbar>
        </AppBar>
        
    )
};

export default Header; 