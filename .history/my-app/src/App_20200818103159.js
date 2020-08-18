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
        <Grid xs={2} />
        {/* this is where the content will be  */}
      </Grid>
    </Grid>
  )
}

export default App;