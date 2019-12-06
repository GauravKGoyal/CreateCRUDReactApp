import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

class AddDessertDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: "",
      changed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  snackbarClose = event => {
    this.setState({ snackbaropen: false });
  };

  clearInputStates() {
    this.setState({
      changed: false
    });
  }

  handleInputChange(event) {
    this.setState({ changed: true });
  }

  handleClose() {
    if (this.state.changed === true) {
      const isConfirmed = window.confirm(
        "Are you sure you want to exit without saving?"
      );
      if (isConfirmed === false) {
        return;
      }
    }

    this.props.onClose(this.state.changed);
    this.clearInputStates();
  }

  handleSubmit(event) {
    if (this.state.changed === true) {
      // var contents = JSON.stringify({
      //   id: this.props.data.nutrition.id,
      //   name: this.props.data.nutrition.name,
      //   calories: this.props.data.nutrition.calories,
      //   fat : this.props.data.fat,
      //   carbs: this.props.data.carbs,
      //   changed: this.state.changed
      // });
      var contents = JSON.stringify({
        id: event.target.id.value,
        name: event.target.name.value,
        calories: event.target.calories.value,
        fat: event.target.fat.value,
        carbs: event.target.carbs.value,
        protein: event.target.protein.value
      });
      // save to database
      // show toast for success or failure
      this.setState({ snackbaropen: true, snackbarmsg: contents });
    }

    this.props.onClose(this.state.changed);
    this.clearInputStates();
  }

  render() {
    return (
      <div>
        <Dialog
          maxWidth="sm"
          fullWidth
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
            <DialogTitle id="form-dialog-title">{this.props.data.action} Nutrition</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
              To subscribe to this website, please enter your name address here. We will send updates
              occasionally.
            </DialogContentText> */}
              <TextField
                id="id"
                name="id"
                value={this.props.data.nutrition.id}
                onChange={this.handleInputChange}
                required
                autoFocus
                margin="none"
                label="id"
                type="number"
                style={{ marginBottom: 8 }}
                fullWidth
              />
              <TextField
                id="name"
                name="name"
                value={this.props.data.nutrition.name}
                onChange={this.handleInputChange}
                required
                autoFocus
                margin="none"
                label="Name"
                type="name"
                style={{ marginBottom: 8 }}
                fullWidth
              />

              <TextField
                id="calories"
                name="calories"
                value={this.props.data.nutrition.calories}
                onChange={this.handleInputChange}
                margin="normal"
                label="Calories"
                type="text"
                fullWidth
              />

              <TextField
                id="fat"
                name="fat"
                value={this.props.data.nutrition.fat}
                onChange={this.handleInputChange}
                margin="normal"
                label="Fat"
                type="text"
                fullWidth
              />

              <TextField
                id="carbs"
                name="carbs"
                value={this.props.data.nutrition.carbs}
                onChange={this.handleInputChange}
                margin="normal"
                label="Carbs"
                type="text"
                fullWidth
              />

              <TextField
                id="protein"
                name="protein"
                value={this.props.data.nutrition.protein}
                onChange={this.handleInputChange}
                margin="normal"
                label="Protein"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose}>Cancel</Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              x
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default AddDessertDialog;
