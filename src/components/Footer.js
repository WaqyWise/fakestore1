import React from 'react'
import { Container, Navbar, Spinner, ButtonGroup, Button, Row, Col, Image, Card, ListGroup, InputGroup, Form} from "react-bootstrap";

const Footer = () => {
  return (
    <div>
         <Navbar bg="light" expand="lg">
        <Container class="column">
          <Navbar.Brand href="/">Fake Store</Navbar.Brand>
          <Card style={{ width: '14rem', height: '8rem', borderStyle:'hidden' }}>
            <ListGroup variant="dark" >
              <ListGroup.Item style={{fontWeight: 'bold'}}>Product</ListGroup.Item>
              <ListGroup.Item>Features</ListGroup.Item>
              <ListGroup.Item>Pricing</ListGroup.Item>
              </ListGroup>
          </Card>
          <Card style={{ width: '14rem', height: '8rem',border:'light' }}>
            <ListGroup variant="dark">
              <ListGroup.Item style={{fontWeight: 'bold'}}>Resources</ListGroup.Item>
              <ListGroup.Item>Blog</ListGroup.Item>
              <ListGroup.Item>User guides</ListGroup.Item>
              </ListGroup>
          </Card>
          <Card style={{ width: '14rem', height: '8rem',borderStyle: 'none' }}>
            <ListGroup variant="dark" >
              <ListGroup.Item style={{fontWeight: 'bold'}}>Company</ListGroup.Item>
              <ListGroup.Item>About</ListGroup.Item>
              <ListGroup.Item>Join us</ListGroup.Item>
              </ListGroup>
          </Card>
          <InputGroup className="mb-2" style={{width: '250px', }}>
          <Navbar.Brand style={{fontWeight: 'bold'}}>Subscribe to our newsletter:</Navbar.Brand>
            <Form.Control
                placeholder="Input your email"
              />
            <Button variant="outline-dark" id="button-addon2">
                Subscribe
            </Button>
          </InputGroup>
        </Container>
        </Navbar>
    </div>
  )
}

export default Footer
