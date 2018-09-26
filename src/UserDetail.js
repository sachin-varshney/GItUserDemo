import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress'
import axios from 'axios'

const styles = {
  card: {
    minWidth: 275,
    margin: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class UserDetail extends Component {
  state = {
    data: null,
  }
  async componentDidMount(){
    console.log('props', this.props)
    const { id } = this.props.match.params;    
    const res = await axios.get(`https://api.github.com/users/${id}`);
    const { data } = res;
    this.setState({ data })
    console.log('user detail: ', data)
  }

  render() {
    const {classes} = this.props
    const { data} = this.state
    console.log('data: ', data)
    // const { name, email, company, createdAt } = this.state.data
    return (
      data ?
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="title">
            Name: {this.state.data.name}
          </Typography>
          <Typography className={classes.pos} variant="body2">
            comapny: {this.state.data.company}
          </Typography>
          <Typography color="textSecondary">
            CreatedAt: {this.state.data.created_at}
          </Typography>
        </CardContent>
    </Card> : <LinearProgress/>
    )
  }
   
}

UserDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserDetail);