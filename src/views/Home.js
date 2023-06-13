import "../App.css";
import { Index } from "../views/product/Index";
import { Container, Navbar, Spinner, ButtonGroup, Button, Row, Col, Image, Card, ListGroup, InputGroup, Form} from "react-bootstrap";
import { useSelector } from "react-redux";
import React from "react";
import { CartIcon } from "../icons";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export const Home = () => {
  const products = useSelector(state => state.product.products);
  const isLoading = useSelector(state => state.product.loading);
  
  return (
    <div>
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Fake Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ButtonGroup aria-label="Basic example">
          <Link to="/"><Button variant="outline-dark">Shop</Button></Link>
          <Link to="/product"><Button variant="outline-dark">Products</Button></Link>
          <Link to="/contacts"><Button variant="outline-dark">Contacts</Button></Link>
          </ButtonGroup>
          <div className="d-flex align-items-center">
            <div>Products found:</div>
            {isLoading ? (
              <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <span>
               {products.length}
              </span>
            )}
          </div>
        </Container>
        <CartIcon />
      </Navbar>
    </header>  
      <main>
      <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <h1 class="font-weight-light">The Best Place To </h1>
              <h1 class="font-weight-light">Find And Buy</h1>
              <h1 class="font-weight-light">Amazing Products</h1>
              <Button variant="dark" class="">Shop now!</Button>
            </Col>
            <Col sm={5}>
              <Image src="https://dummyimage.com/1000x600/a19ca1/fafafa.jpg&text=Example" 
              fluid
              rounded
              className="" 
              />
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-grey text-black my-5 py-4">
              <Card.Body>
                  Icons
              </Card.Body>
            </Card>
          </Row>
      </Container>
      </main>
      <Index class="py-5"/>
      <footer >
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
      </footer>
    </div>
  )
}


