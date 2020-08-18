import React from "react";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        {/* this is where the header will be  */}
      </Grid>
              {/* grids can be items grids containers or both at the same time  */}
      <Grid item container>
        {/* on extra small screens this will take up 2  */}
        <Grid xs={2} />
<Grid item xs={8}>
{/* this is where the content will be  */}
</Grid>
        
        <Grid xs={2} />
        {/* ^these xs 2 are for the side gutters on the app */}
      </Grid>
    </Grid>
  )
}

export default App;