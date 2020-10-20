/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Container, Navbar, Nav, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './todo.scss';
import useAjax from '../hooks/useAjax';
import useForm from '../hooks/useForm';


function ToDo() {

  let url = 'https://ash-todolist.herokuapp.com/items';

  const [list, setList] = useState([]);
  const [item, setItem] = useState({});
  const [id, setId] = useState();
  const [searched, setSearched] = useState([]);


  const addItem = (item) => {
    item.complete = false;
    setItem(item);
    postItem(item);
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      setItem(item);
      putItem(item);
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

  };

  const handleDelete = id => {
    let newList = list.filter(item => item._id !== id) || {};
    setList(newList);
    setId(id);
    removeItem(id);
  };


  const search = (input) => {
    const searched = input;
    setSearched(searched);
    getSpecific(searched);
  };
  
  const [handleSubmit, handleInputChange] = useForm(input => search(input));

  useEffect(() => {
    document.title = `To Do List: ${list.length}`;
  }, [list]);

  useEffect(() => {
    getItem();
  }, []);

  const { getItem } = useAjax(setList);
  const { getSpecific } = useAjax(setList, searched);
  const { postItem } = useAjax(item);
  const { putItem } = useAjax(item);
  const { removeItem } = useAjax(id);

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
        <Row>

        </Row>

        <Form onSubmit={handleSubmit}>
          <Form.Label>Filter Tasks depending on their status:</Form.Label>
          <Row>
            <Col md={6}>
              <Form.Control as="select" name='complete' custom onChange={handleInputChange} >
                <option value='' defaultValue></option>
                <option value='true' >Complete</option>
                <option value='false' >Not Complete</option>
              </Form.Control>
            </Col>
            <Col md={6}>
              <Button type="submit">categorize</Button>
            </Col>
          </Row>
        </Form>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Filter Tasks depending on their difficulty:</Form.Label>
          <Row>
            <Col md={6}>
              <Form.Control as="select" name='difficulty' custom onChange={handleInputChange} >
                <option value='' defaultValue></option>
                <option value='1' >1</option>
                <option value='2' >2</option>
                <option value='3' >3</option>
                <option value='4' >4</option>
                <option value='5' >5</option>
              </Form.Control>
            </Col>
            <Col md={6}>
              <Button type="submit">categorize</Button>
            </Col>
          </Row>
        </Form>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Filter Tasks depending on their Assignee:</Form.Label>
          <Row>
            <Col md={6}>
              <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange}></input>
            </Col>
            <Col md={6}>
              <Button type="submit">categorize</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>

  );

}


export default ToDo;