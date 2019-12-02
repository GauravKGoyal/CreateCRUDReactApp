import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";

export default function PageHeader() {
  const title = {
    flexGrow: 1
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={title}>
          Welcome
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
