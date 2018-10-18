import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

/*
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
*/

class TextFields extends React.Component {
  state = {
    
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    year: '',
    make: '',
    model: '',
    company: '',
    policy: '',
  };

  handleChange = firstName => event => {
    this.setState({
      [firstName]: event.target.value,
    });
  };

  handleChange = lastName => event => {
    this.setState({
      [lastName]: event.target.value,
    });
  };

  handleChange = email => event => {
    this.setState({
      [email]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (

      <form className={classes.container} noValidate autoComplete="off">
        <h1>Edit Settings</h1>
        <Grid item xs={12}>
          <h3>Name</h3>
          <TextField
              required
              id="standard-first-name"
              label="First Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('firstName')}
              margin="normal"
              InputProps={{
                readOnly: false,
              }}
            />
            <TextField
              required
              id="standard-last-name"
              label="Last Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('lastName')}
              margin="normal"
              InputProps={{
                readOnly: false,
              }}
            />
        </Grid>

        <Grid item xs={12}>
          <h3>User Credentials</h3>
          <TextField
            required
            id="standard-username"
            label="E-mail"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('email')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
        </Grid>


        <Grid item xs={12}>
          <h3>Address</h3>
          <TextField
            id="standard-street"
            label="Street"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            id="standard-city"
            label="City"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            id="standard-state"
            label="State"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-zip"
            label="Zip Code"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <h3>Vehicle</h3>
          <TextField
            required
            id="standard-year"
            label="Year"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            required
            id="standard-make"
            label="Make"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            required
            id="standard-model"
            label="Model"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <h3>Insurance</h3>
          <TextField
            id="standard-company"
            label="Company"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
          <TextField
            id="standard-policy"
            label="Policy Number"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: false,
            }}
          />
        </Grid>

      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);