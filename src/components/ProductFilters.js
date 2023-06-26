import React from 'react'
import { Accordion , Card, Col, Container, Form, Row, InputGroup, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';


const ProductFilters = () => {
const categories = useSelector(state => state.categories.categories);
  return (
    <div>
    <h1>Filters:</h1>
        <Card>
          <Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header variant="outline-dark">Categories</Accordion.Header>
                <Accordion.Body variant="outline-dark">
                  <ListGroup>
                    {categories.map(category => (
                  <ListGroupItem>
                    <Link to={`/${category.id}`}>{category.name}</Link></ListGroupItem>
                 ))}
                 
                 </ListGroup>
                 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <InputGroup style={{justifyContent: 'space-between'}}>
              <InputGroup.Text >$</InputGroup.Text>
              <Form.Control style={{width :'2px'}}/>
              <InputGroup.Text >$</InputGroup.Text>
              <Form.Control style={{width : '2px'}}/>
            </InputGroup>
            <Form.Label><h1>Price Range:</h1></Form.Label>
            <Form.Range style={{ width: '380px' }} />
          </Card.Body>
        </Card>
  </div>
  
  )
}

export default ProductFilters
