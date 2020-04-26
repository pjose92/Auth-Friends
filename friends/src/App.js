import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom'


import Home from './components/Home'
import Login from './components/Login'
import Friends from './components/Friends'
import Logout from './components/Logout'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css';
import styled from 'styled-components'

const NavLink = styled(Link)`
  margin: 2rem 2rem;
`

function App() {

  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>

        <NavLink to='/login'>login</NavLink>        
        <NavLink to='/friends'>Friends</NavLink>
        <NavLink to='/logout'>logout</NavLink>
      </nav>
      


      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/friends' component={Friends} />
      <ProtectedRoute exact path='/logout' component={Logout} />
    </div>
  )
}

export default withRouter (App)
