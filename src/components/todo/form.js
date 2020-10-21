/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import Auth from '../auth/Auth';

function TodoForm(props) {
  const [handleSubmit, handleInputChange] = useForm(item => props.handleSubmit(item));
  
  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Auth capability="create">
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
        </Auth>
      </Card>
    </>
  );

}


export default TodoForm;