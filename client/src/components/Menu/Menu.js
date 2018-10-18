import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
//import Home from "../Home";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon /> 
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Home</MenuItem>
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>Roadside Assistance</MenuItem>
          <MenuItem onClick={this.handleClose}>Appointments</MenuItem>
          <MenuItem onClick={this.handleClose}>Diagnostics</MenuItem>
          <MenuItem onClick={this.handleClose}>Emergency</MenuItem>
          <MenuItem onClick={this.handleClose}>Chat</MenuItem>
          <MenuItem onClick={this.handleClose}>Credentials</MenuItem>
          <MenuItem onClick={this.handleClose}>Settings</MenuItem>
          <MenuItem onClick={this.handleClose}>Feedback</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;