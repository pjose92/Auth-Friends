import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom'


import Home from './components/Home'
import Login from './components/Login'
import Friends from './components/Friends'
import Logout from './components/Logout'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css';
import styled from 'styled-components'

const Nav = styled.nav`
  background: #2d3436;
  width: 100%;
  padding: 25px;
`

const NavLink = styled(Link)`
  color: #dfe6e9;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 1.5rem;
  text-decoration: none;
  cursor: pointer;

`

function App() {

  return (
    <div className="App">
      <Nav>
        <NavLink to='/'>Home</NavLink>

        <NavLink to='/login'>Login</NavLink>        
        <NavLink to='/friends'>Friends</NavLink>
        <NavLink to='/logout'>Logout</NavLink>
      </Nav>
      


      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/friends' component={Friends} />
      <ProtectedRoute exact path='/logout' component={Logout} />
    </div>
  )
}

export default withRouter (App)
