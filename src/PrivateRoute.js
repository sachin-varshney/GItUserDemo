import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      true
      ? <Component {...props} />
      : <Redirect to='/signIn' />
  )} />
)

export default PrivateRoute;