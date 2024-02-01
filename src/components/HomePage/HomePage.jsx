import { Grid } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Grid container xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <p className="text-center">left part</p>
      </Grid>
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <p className="text-center">middle part</p>
      </Grid>
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <p className="text-center">right part</p>
      </Grid>
    </Grid>
  );
};

export default HomePage;
