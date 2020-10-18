import React from 'react';
import { ListGroup, Button , Card, Row, Col} from 'react-bootstrap';

function TodoList(props) {
  return (
    <Card style={{ width: '30rem' }}>
    <ListGroup>
      {props.list.map(item => (
        <ListGroup.Item
          action variant={item.complete === false ? "success" : "danger"}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Row>
            <Col md={10}>
            <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
            <br></br>
            {item.assignee}
          </span>
            </Col>
            <Col md={2}>
            <Button onClick={() => props.handleRemove(item._id) }>X</Button>
            </Col>
          </Row>


        </ListGroup.Item>
      ))}
    </ListGroup>
    </Card>
  );

}

export default TodoList;