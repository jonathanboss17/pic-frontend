import React, { Component, Fragment } from 'react'
import {Switch, Route} from 'react-router-dom'
import SignUpForm from './Components/SignUpForm'
import AuthForm from './Components/AuthForm'
import Feed from './Components/Feed'
import Profile from './Components/Profile'

class App extends React.Component {
  
  render() {
    // wrap in BrowserRouter and Switch 
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={AuthForm}/>
          <Route exact path="/signup" component={SignUpForm}/>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/logout" component={() => {
            // CheckLogin component to return the login page only if user logs out
          }} />
        </Switch>
      </Fragment> 
    )
  }
}

export default App;
