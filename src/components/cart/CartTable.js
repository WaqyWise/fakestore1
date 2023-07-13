import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table, Image, Form, Button, Col, Container, Row} from 'react-bootstrap'
import { updateQuantity, removeItem } from '../../store/modules/cart'
import CartSummary from './CartSummary';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';


const CartTable = () => {
const cartItems = useSelector((state) => state.cart.items);
const dispatch = useDispatch();



const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({productId, quantity}))
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId))
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
            <td></td>
            <td>
              <Button onClick={() => handleRemoveItem(item.product.id)} variant="danger">
                Remove
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
