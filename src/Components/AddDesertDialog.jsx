import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class AddDessertDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      email: "",
      user: "",
      firstName: "",
      lastName: "",
      changed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  clearInputStates() {
    this.setState({
      id: 0,
      email: "",
      user: "",
      firstName: "",
      lastName: "",
      changed: false
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ changed: true });
    this.setState({
      [name]: value
    });
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

  handleSubmit() {
    if (this.state.changed === true) {
      var contents = JSON.stringify({
        id: this.state.id,
        email: this.state.email,
        user: this.state.user,
        changed: this.state.changed
      });
      alert(contents);
    }
    // save to database
    // show toast for success or failure

    this.props.onClose(this.state.changed);
    this.clearInputStates();
  }

  render() {
    console.log(this.props);
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
            <DialogTitle id="form-dialog-title">Nutrition</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
              occasionally.
            </DialogContentText> */}
              <TextField
                id="id"
                name="id"
                value={this.id}
                defaultValue = {this.props.data.nutrition.id}
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
                id="email"
                name="email"
                value={this.email}
                onChange={this.handleInputChange}
                required
                autoFocus
                margin="none"
                label="Email Address"
                type="email"
                style={{ marginBottom: 8 }}
                fullWidth
              />

              <TextField
                id="user"
                name="user"
                value={this.user}
                onChange={this.handleInputChange}
                margin="normal"
                label="User"
                type="text"
                fullWidth
              />

              <TextField
                id="firstName"
                name="firstName"
                value={this.firstName}
                onChange={this.handleInputChange}
                margin="normal"
                label="First name"
                type="text"
                fullWidth
              />

              <TextField
                id="lastName"
                name="lastName"
                value={this.lastName}
                onChange={this.handleInputChange}
                margin="normal"
                label="Last name"
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
      </div>
    );
  }
}

export default AddDessertDialog;
