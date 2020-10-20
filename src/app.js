/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ToDo from './components/todo/todo.js';
import Config from './context/config';

function App() {
  return (
    <>
      <Config>

        <header>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#">TODO</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link>Home</Nav.Link>
            </Nav>
          </Navbar>
        </header>

        <ToDo />
        
      </Config>
    </>
  );
}

export default App;