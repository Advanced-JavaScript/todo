import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from '../components/todo/list';

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