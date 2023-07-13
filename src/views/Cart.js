import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import product from '../store/modules/product';
import { Image, Card, Col, Row, ListGroup, Button, InputGroup,Form, Container, Table } from 'react-bootstrap';
import CartPlaceholder from '../components/cart/CartPlaceholder';
import CartTable from '../components/cart/CartTable';



const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
 

 
  
  
  return (
    <Container>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
      <CartPlaceholder />
      ) : (   
      <CartTable />
      )}
    </Container>
);
};




export default Cart
