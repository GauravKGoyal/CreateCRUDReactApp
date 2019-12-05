import React from "react";
import { Paper } from "@material-ui/core";
import NutritionTable from './NutritionTable';

export default function LeftPane() {
  return (
    <Paper
      square="true"
      style={{ padding: 20, marginTop: 10, marginBottom: 10 }}
    >
       <NutritionTable />
    </Paper>
  );
}
