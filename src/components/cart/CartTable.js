import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table, Image, Form, Button, Col, Container, Row} from 'react-bootstrap'
import { updateQuantity, removeItem } from '../../store/modules/cart'
import CartSummary from './CartSummary';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import {  saveCartToLocalStorage } from '../../services/cart';

const CartTable = () => {
const cartItems = useSelector((state) => state.cart.items);
const dispatch = useDispatch();



const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({productId, quantity}));
    saveCartToLocalStorage(cartItems); // Save to cart and localStorage
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
    saveCartToLocalStorage(cartItems); // Save to cart and localStorage
  };

  

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    let totalItems = 0;
  
    cartItems.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
      totalItems += item.quantity;
    });
  
    return {
      totalPrice,
      totalItems,
    };
  };
 const summary = calculateTotalPrice();

  return (
    <Container>
        <Row>
        <Col sm={10}>   
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" 
                width="40" height="40" 
                fill="black" 
                class="bi bi-cart" 
                viewBox="0 0 16 22">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            Order Summary
        </h1>
    
      <Table className="table table-hover">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.product.id}>
            <td>
              <Image src={item.product.image} width={50} height={50} />
            </td>
            <td>{item.product.title}</td>
            <td>${item.product.price}</td>
            <td>
              <Form.Control
                placeholder="Quantity"
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
              />
            </td>
            <td>${(item.quantity*item.product.price).toFixed(2)}</td>
            <td>
              <Button onClick={() => handleRemoveItem(item.product.id)} variant="danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Col> 
            <Col sm={2} >
                <CartSummary
                className="py-5"
                totalPrice={summary.totalPrice}
                totalItems={summary.totalItems}
                discount={-15}
                shipping={22}
                />
            </Col>
        </Row>    
    </Container>
  )
}

export default CartTable
