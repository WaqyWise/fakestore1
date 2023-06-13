import React from 'react'
import { Container, Navbar, Spinner, ButtonGroup, Button} from "react-bootstrap";
import { CartIcon } from "../icons";
import { BrowserRouter as Link} from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const products = useSelector(state => state.product.products);
    const isLoading = useSelector(state => state.product.loading);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Fake Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ButtonGroup aria-label="Basic example">
          <Button variant="outline-dark">Shop</Button>
          <Button variant="outline-dark">Products</Button>
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
    </div>
  )
};

export default Header;


