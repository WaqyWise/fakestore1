import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import product from '../store/modules/product';
import { Image, Card, Col, Row, ListGroup, Button, InputGroup,Form, Container, Table } from 'react-bootstrap';
import CartPlaceholder from '../components/cart/CartPlaceholder';
import CartTable from '../components/cart/CartTable';
import CardHeader from 'react-bootstrap/esm/CardHeader';



const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
 
  return (
    <Container className='py-5' style={{width: 'avto'}}>
      <CardHeader >Checkout</CardHeader>
      {cartItems.length === 0 ? (
      <CartPlaceholder />
      ) : (   
      <CartTable />
      )}
    </Container>
);
};




export default Cart
