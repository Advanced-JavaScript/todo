/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from '../components/todo/list';
import App from '../app';

test('should render to do list with the added item', async (done) => {

  const list = [{
    'text':'Finish the lab',
    'assignee':'Ashjan',
    'range':'1',
    'complete': true,
  }];

  render (<ToDoList list={list} />);

  //   screen.debug();

  const count = screen.getAllByRole('button');
  expect(count[0]).toHaveTextContent('Finish the lab');
  expect(count[1]).toHaveTextContent('X');
  expect(count).toHaveLength(2);

  done();
});

test('should render empty inputs to the to do list if user submitted without information', async (done) => {

  const list = [{
    'text':'',
    'assignee':'',
    'range':'',
    'complete': '',
  }];

  render (<ToDoList list={list} />);


  const count = screen.getAllByRole('button');
  expect(count[0]).toHaveTextContent('X');
  expect(count[1]).toHaveTextContent('X');
  expect(count).toHaveLength(2);

  done();
});

describe('app', () => {

  it('loads the home page', async () => {
    render(<App />);
    const doc = screen.getAllByRole('button');
    expect(doc[0]).toHaveTextContent('Home');
    expect(doc[1]).toHaveTextContent('Add Item');
 
  });

});