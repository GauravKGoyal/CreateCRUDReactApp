import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from "@material-ui/icons/Add";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const [user, setUser] = React.useState('');
  const [firstName, setfirstName] = React.useState('');
  const [lastName, setlastName] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(email,user);
    // persist changes
    // clear states of the contorl 
    setOpen(false);
  };

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === "email")
      setEmail(value)
    else if (name === "user")
      setUser(value)
  }


  return (
    <div>
      <Button startIcon={<AddIcon />} color="primary" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog 
      maxWidth="sm"
      fullWidth
      open={open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Nutrition</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            id="email"
            name="email"
            margin="none"
            label="Email Address"
            type="email"
            style={{marginBottom:8}}
            value = {email}
            onChange={handleInputChange}
            required
            fullWidth
          />

          <TextField
            id="user"
            name="user"
            margin="normal"
            label="User"
            type="text"
            value = {user}
            onChange={handleInputChange}
            fullWidth
          />

          <TextField
            id="firstName"
            name="firstName"
            margin="normal"
            label="First name"
            type="text"
            value = {firstName}
            onChange={handleInputChange}
            fullWidth
          />

          <TextField
            id="lastName"
            name="lastName"
            margin="normal"
            label="Last name"
            type="text"
            value = {lastName}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
