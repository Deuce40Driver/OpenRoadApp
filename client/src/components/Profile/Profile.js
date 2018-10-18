import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './Profile.css';

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

    firstName: 'Brian',
    lastName: 'Thornton',
    email: 'thorntonbl1@gmail.com',
    password: 'Coding',
    street: '28 Westhampton Way',
    city: 'Richmond',
    state: 'VA',
    zip: '23236',
    year: '2001',
    make: 'Chevrolet',
    model: 'Silverado',
    company: 'State Farm',
    policy: '123456789',
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
        <h1>Profile</h1>
        <Grid item xs={12}>
          <h3>Name</h3>
          <TextField
              required
              id="standard-first-name"
              label="First Name"
              defaultValue={this.state.firstName}
              className={classes.textField}
              value={this.state.firstName}
              onChange={this.handleChange('firstName')}
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              required
              id="standard-last-name"
              label="Last Name"
              className={classes.textField}
              value={this.state.lastName}
              onChange={this.handleChange('lastName')}
              margin="normal"
              InputProps={{
                readOnly: true,
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
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            required
            id="standard-password-input"
            label="Password"
            defaultValue="********"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>


        <Grid item xs={12}>
          <h3>Address</h3>
          <TextField
            id="standard-street"
            label="Street"
            className={classes.textField}
            value={this.state.street}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-city"
            label="City"
            className={classes.textField}
            value={this.state.city}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-state"
            label="State"
            className={classes.textField}
            value={this.state.state}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-zip"
            label="Zip Code"
            className={classes.textField}
            value={this.state.zip}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
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
            value={this.state.year}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            required
            id="standard-make"
            label="Make"
            className={classes.textField}
            value={this.state.make}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            required
            id="standard-model"
            label="Model"
            className={classes.textField}
            value={this.state.model}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <h3>Insurance</h3>
          <TextField
            id="standard-company"
            label="Company"
            className={classes.textField}
            value={this.state.company}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-policy"
            label="Policy Number"
            className={classes.textField}
            value={this.state.policy}
            onChange={this.handleChange('name')}
            margin="normal"
            InputProps={{
              readOnly: true,
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

/*

        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />



<TextField
          id="standard-policy"
          label="Policy Number"
          defaultValue="Hello World"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />



        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
        <TextField
          id="standard-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-textarea"
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>


import React, { Component } from "react";
import "./Profile.css";


class Profile extends Component {

  state = {
    
  };

  //buttonClick = () => {

  //};

  render() {
    return (
      <div>

      </div>
    )
  };

};

export default Profile;
*/