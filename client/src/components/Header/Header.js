import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import SimpleMenu from '../Menu/Menu';
//import Clock from '../Clock/Clock';  <Clock color="inherit"/> 

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        
        <Toolbar>
          <SimpleMenu className={classes.menuButton} color="inherit" aria-label="Menu" />

          <Typography variant="h5" color="inherit" className={classes.grow}>
            OpenRoad | Roadside Assistance
          </Typography>

          
        
        </Toolbar>

      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);