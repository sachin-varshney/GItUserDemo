import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import ListItem from './ListItem'
import LinearProgress from '@material-ui/core/LinearProgress'
import {withRouter} from "react-router-dom";

class UserList extends Component {

  state = {
    userlist: null, 
  }
   componentDidMount() {
    axios.get('https://api.github.com/users')
      .then(res => {
        console.log('response: ', res);
        this.setState({userlist: res.data})
      })
      .catch(err => console.log(err) )
  }
  onItemClick = (id) => {
    this.props.history.push(`./userDetail/${id}`)
  }
  render() {
  const { classes } = this.props;
  const { userlist } = this.state;
    
    return (
      userlist ? userlist.map(data => <ListItem data={data} onItemClick={() => this.onItemClick(data.id)} />) : <LinearProgress />
    );
  }
}

export default (withRouter(UserList));
