/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import { ListGroup, Button, Card, Row, Col } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { ConfigContext } from '../../context/config';
import Auth from '../auth/Auth';
import { LoginContext } from '../auth/context';
import { Switch, Case } from 'react-if';

function TodoList(props) {

  const config = useContext(ConfigContext);
  const logged = useContext(LoginContext);
  const [page, setPage] = useState(0);
  
  const list = props.list.filter(item => config.complete ? true : !item.complete);
  const start = config.items ? config.items * page : 0;
  const end = start + config.items || list.length;
  const shortList = list ? list.slice(start, end) : [];
  const pages = new Array(Math.ceil(list.length / config.items)).fill('');


  return (
    <Card style={{ width: '30rem' }}>
      <ListGroup>
        <Switch>
          <Case condition={logged.haveAccess('read')}>
            {shortList.map(item => (
              <ListGroup.Item
                action variant={item.complete === false ? 'success' : 'danger'}
                className={`complete-${item.complete.toString()}`}
                key={item._id}
              >
                <Row>
                  <Switch>
                    <Case condition={logged.haveAccess('update')}>
                      <Col md={10}>
                        <span onClick={() => props.handleComplete(item._id)}>
                          {item.text}
                          <br></br>
                          {item.assignee}
                        </span>
                      </Col>
                    </Case>
                  </Switch>
                  <Switch>
                    <Case condition={logged.haveAccess('delete')}>
                      <Col md={2}>
                        <Button onClick={() => props.handleRemove(item._id)}>X</Button>
                      </Col>
                    </Case>
                  </Switch>
                </Row>
            
              </ListGroup.Item>
            ))}
          </Case>
        </Switch>
      </ListGroup>

      <Pagination size="sm">
        {pages.map((n, i) => {
          return (
            <Pagination.Item key={i + 1} onClick={() => setPage(i)}>
              {i + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>


    </Card>
  );

}

export default TodoList;