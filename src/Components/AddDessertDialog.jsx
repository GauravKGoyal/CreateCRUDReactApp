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
      changed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

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
      //   email: this.props.data.nutrition.email,
      //   user: this.props.data.nutrition.user,
      //   firstName : this.props.data.firstName,
      //   lastName: this.props.data.lastName,
      //   changed: this.state.changed
      // });
      var contents = JSON.stringify({
        id: event.target.id.value,
        email: event.target.email.value,
        user: event.target.user.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value
      })
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
            <DialogTitle id="form-dialog-title">Add Nutrition</DialogTitle>
            <DialogContent>
              {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates
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
                id="email"
                name="email"
                value={this.props.data.nutrition.email}
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
                value={this.props.data.nutrition.user}
                onChange={this.handleInputChange}
                margin="normal"
                label="User"
                type="text"
                fullWidth
              />

              <TextField
                id="firstName"
                name="firstName"
                value={this.props.data.nutrition.firstName}
                onChange={this.handleInputChange}
                margin="normal"
                label="First name"
                type="text"
                fullWidth
              />

              <TextField
                id="lastName"
                name="lastName"
                value={this.props.data.nutrition.lastName}
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
