/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function TodoForm(props) {

  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({});
  };

  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
      
          <h3>Add To Do Item</h3>
          <form onSubmit={handleSubmit}>
            <label>
              <Card.Title>To Do Item</Card.Title>
              <input
                name="text"
                placeholder="Add To Do List Item"
                onChange={handleInputChange}
              />
            </label>
            <label>
              <Card.Title>Assigned To</Card.Title>
              <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
            </label>
            <label>
              <Card.Subtitle>Difficulty Rating</Card.Subtitle>
              <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
            </label>
          
            <Button type="submit">Add Item</Button>
          </form>
        </Card.Body>
      </Card>
    </>
  );

}


export default TodoForm;