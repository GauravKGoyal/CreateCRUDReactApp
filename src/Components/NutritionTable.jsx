import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Button from "@material-ui/core/Button";
import { nutritions } from "../store";
import AddDessertDialog from "./AddDessertDialog";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

// const TableToolbar = () => {
//   return (
//     <div>
//       {/* <Toolbar>
//         <Typography variant="h6" id="tableTitle">
//           <AddDesertDialog />
//         </Typography>
//       </Toolbar> */}
//     </div>
//   );
// };

export default function NutritionTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [modelOpen, setModelOpen] = React.useState(false);
  const [selectedNutrition, setSelectedNutrition] = React.useState({
    nutrition: {
      id: 0,
      email: "",
      firstName: "",
      lastName: ""
    }
  });

  const onCloseModel = refreshList => {
    console.log("refreshList:", refreshList);
    setModelOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleClickRow = (event, row) => {
    setSelectedNutrition({ action: "Edit", nutrition: { 
      id:row.id, 
      name:row.name,
      calories:row.calories,
      fat:row.fat,
      cabs:row.carbs,
      protein:row.protein
    } });
    // hit database
    setModelOpen(true);
  };
  const handleClickAdd = event => {
    setSelectedNutrition({action: "Add", nutrition: { id: 1 } });
    setModelOpen(true);
  };

  return (
    <div className={classes.root}>
      <Button startIcon={<AddIcon />} color="primary" onClick={handleClickAdd}>
        Add
      </Button>
      <AddDessertDialog
        open={modelOpen}
        onClose={onCloseModel}
        data={selectedNutrition}
      />
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nutritions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow
                  hover
                  key={row.id}
                  onClick={event => handleClickRow(event, row)}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={nutritions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}
