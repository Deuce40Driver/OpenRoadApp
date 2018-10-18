/*
import React from "react";
import "./Button.css";

const Button = (props) => (
  <img 
    onClick = {() => props.buttonClick(props.link)} 
    key = {props.number} 
    src = {props.image}
    alt = {props.description}
    href = {props.link}
  />
);

export default Button;
*/






import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>

      <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
        Link
      </Button>

      <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
        Link
      </Button>

      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />

      <label htmlFor="outlined-button-file">

        <Button variant="outlined" component="span" className={classes.button}>
          Upload
        </Button>

      </label>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);