import React from 'react'
import { Container, Navbar, Spinner, ButtonGroup, Button} from "react-bootstrap";
import { CartIcon } from "../icons";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const products = useSelector(state => state.product.products);
    const isLoading = useSelector(state => state.product.loading);
    const cartItems = useSelector((state) => state.cart.items);
    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  
  
    return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Fake Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ButtonGroup aria-label="Basic example">
          <Link to="/"><Button variant="outline-dark">Shop</Button></Link>
          <Link to="/:category"><Button variant="outline-dark">Products</Button></Link>
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
        <Link to="/cart">
        <Navbar.Brand style={{justifyContent: 'center'}}  className="py-5">

        <Button variant="outline-dark"><CartIcon />Cart: {cartItemCount}</Button>
        </Navbar.Brand>
        </Link>
      
      </Navbar>
    </div>
  )
};

export default Header;


