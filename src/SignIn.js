import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import Email from '@material-ui/icons/Email'
import Lock from '@material-ui/icons/Lock'
import {withRouter} from "react-router-dom";

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + (theme.spacing.unit * (3 * 2)))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    width: 128,
    height: 128,
  },
  form: {
    margin: theme.spacing.unit * 8,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  textButton: {
    marginTop: theme.spacing.unit,
  },
  textButtonContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})



class SignIn extends Component {
  state ={
    email: '',
    password: '',
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value.trim()  })
  }

  onSubmit = () => {
    this.props.history.push('/userList');
  }
  render() {
  const { classes } = this.props;
    
    return (
      <form className={classes.form} onSubmit={this.onSubmit}>
              <TextField
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                autoFocus
                onChange={event => this.onChangeText('email', event.target.value)}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                id="password"
                name="password"
                placeholder="Password"
                type='password'
                onChange={event => this.onChangeText('password', event.target.value)}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                // disabled={isAuthenticating}
              >
                Sign In
              </Button>
            </form>
    );
  }
}

export default withStyles(styles)(withRouter(SignIn));
