import "./App.css";
import { ProductList } from "./views/product/ProductList";
import { Container, Navbar, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import React from "react";
import { CartIcon } from "./icons";

function App() {
  const products = useSelector(state => state.product.products);
  const isLoading = useSelector(state => state.product.loading);
  
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Fake Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

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
      <ProductList />
    </div>
  );
}

export default App;
