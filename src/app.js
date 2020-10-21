/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ToDo from './components/todo/todo.js';
import Config from './context/config';
import LoginContext from './components/auth/context';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';

function App() {
  return (
    <>
      <Config>
        <LoginContext>

          <header>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#">TODO</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>
              </Nav>
            </Navbar>
          </header>
          <Login/>
          <Auth>
            <ToDo />
          </Auth>

        </LoginContext>
      </Config>
    </>
  );
}

export default App;