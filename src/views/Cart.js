import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../store/modules/cart'
import product from '../store/modules/product';
import { Image, Card, Col, Row, ListGroup, Button, InputGroup,Form, Container, Table } from 'react-bootstrap';



const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({productId, quantity}))
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId))
  };
  
  
  return (
    <Container>
      <h1>Checkout</h1>
    {cartItems.length === 0 ? (
      <div> 
       <h2>Your cart is empty
       <div>
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-cart-x" viewBox="0 0 16 16">
       <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
       <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
       </svg>
       </div>
        </h2>
      </div>
      ) : ( <h1>Order Summary</h1>)}
      <Row>
    <Table  class="table table-hover" style={{width: '100px'}} >
      <thead class="fixed">   
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>     
      </thead>
      <tbody>
        {cartItems.map((item) => (
      <div>
        
        <tr>
            <td>
            <Image  src={item.product.image} width={50} height={50} />
            </td>
            <td>{item.product.title}</td>
            <td>Price: ${item.product.price}</td>
            <td>  
              <Form.Control
              placeholder="Recipient's username"
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
              />
            </td>
            <td></td>
            <td><Button onClick={() => handleRemoveItem(item.product.id)} variant="danger" >Remove</Button></td>
          </tr>
      </div>
      
))}
          
          </tbody>    
          </Table>
          </Row>
      </Container>
  )
}




export default Cart
