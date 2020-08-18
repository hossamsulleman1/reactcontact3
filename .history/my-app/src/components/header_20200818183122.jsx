import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
})) ;


const Header = () => {
const 

    return (
        <AppBar position="static">
            {/* position static is a prop that can be supplioed to the material ui element this keeps the app bar persistent */}
            <Toolbar>
                <Typography>
                   Hossam Sulleman
                   <ShareIcon/>
                </Typography>
            </Toolbar>
        </AppBar>
        
    )
};

export default Header; 