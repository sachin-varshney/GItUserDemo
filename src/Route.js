import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import PrivareRoute from './PrivateRoute'
import SignInScreen from './SignIn'
import UserListScreen from './Userlist'
import UserDetailScreen from './UserDetail'

const Routes = () => (
 <main> 
  <Switch>
    <Route exact path="/signIn" component={SignInScreen} />
    <PrivareRoute path="/" component={UserListScreen} />
    <PrivareRoute path="/userDetail/:id" component={UserDetailScreen} />
  </Switch>  
</main>
);

export default withRouter(Routes)