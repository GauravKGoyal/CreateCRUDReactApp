import React from "react";
import { Grid } from "@material-ui/core";
import RightPane from "./RightPane";
import LeftPane from "./LeftPane";

export default function PageBody() {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane />
      </Grid>

      <Grid item sm>
        <RightPane />
      </Grid>
    </Grid>
  );
}
