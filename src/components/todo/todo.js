/* eslint-disable no-unused-vars */
import React, { useState ,useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {Container, Navbar, Nav, Row, Col, Card} from 'react-bootstrap';
import './todo.scss';

function ToDo() {

  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

  };

  const handleDelete = id => {
    let newList = list.filter( item => item._id !== id) || {};
    setList(newList);
  };

  useEffect(() => {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(list);
  }, []);

  useEffect(() => {
    document.title = `To Do List: ${list.length}`;
  }, [list]);
  
  return (
    <Container className='container'>
      <Card>
        <Row>
          <Col>
            <header>
              <Navbar bg="dark" variant="dark">
                <Nav>
                  <Navbar.Brand>
                  To Do List Manager ({list.length})
                  </Navbar.Brand>
                </Nav>
              </Navbar>
            </header>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <section className="todo">
              <div>
                <TodoForm handleSubmit={addItem} />
              </div>
            </section>
          </Col>

          <Col md={8}>
            <section className="todo">
              <div>
                <TodoList
                  list={list}
                  handleComplete={toggleComplete}
                  handleRemove={handleDelete}
                />
              </div>
            </section>
          </Col>
        </Row>
      </Card>
    </Container>

  );


}


export default ToDo;