import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});

function DateAndTimePickers(props) {
  const { classes } = props;

  return (


    <form className={classes.container} noValidate>
        <div>
      <iframe 
        title="map"
        width="800" 
        height="650" 
        frameborder="0" 
        src="https://www.google.com/maps/embed/v1/search?q=Chevrolet%20Service&zoom=10&key=AIzaSyBp-z-ZUT5h5B4JTSqlsycF7deqPty7Z8w" 
        allowfullscreen>
      </iframe>
    </div>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);