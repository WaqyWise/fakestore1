import React from 'react'
import { Accordion , Card, Col, Container, Form, Row, InputGroup} from 'react-bootstrap';

const ProductFilters = () => {
  return (
    <div>
    <h1>Filters:</h1>
        <Card>
          <Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header variant="outline-dark">Categories</Accordion.Header>
                <Accordion.Body variant="outline-dark">
                  <Form.Check
                    type="checkbox"
                    id="Electronics"
                    label="Electronics"
                    variant="dark"
  
                  />
                  <Form.Check
                    type="checkbox"
                    id="Smartphones"
                    label="Smartphones "
                    variant = "outline-primary"
                  />
                  <Form.Check
                    type="checkbox"
                    id="Men's clothing"
                    label="Men's clothing"
                    
                  />
                  <Form.Check
                    type="checkbox"
                    id="Women's clothing"
                    label="Women's clothing"
                    
                  />
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
