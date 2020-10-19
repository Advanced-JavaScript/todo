/* eslint-disable no-unused-vars */
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import ToDo from './components/todo/todo.js';

function App() {
  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#">TODO</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
          </Nav>
        </Navbar>
      </header>

      <ToDo />
    </>
  );
}

export default App;