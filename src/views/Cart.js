import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../store/modules/cart'
import product from '../store/modules/product';
import { Image, Card, Col, Row, ListGroup, Button, InputGroup,Form } from 'react-bootstrap';



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
        <div>
        <h1 style={{justifyContent: 'center'}}>Cart :</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Row className="px-2 my-5 " style={{alignItems :'center' , justifyContent: 'center'}}>
            {cartItems.map((item) => (
              <Col key={item.product.id} sm={7}>
                 <Col className='text-center my-5 '>
                    <Image align="center" src={item.product.image} fluid width={80} height={80} />
                </Col>
                <ListGroup class="outline" className="list-group-flush">
                <h2>{item.product.title}</h2>
                <h2>Product Description :</h2>
                <ListGroup.Item>Price: ${item.product.price}</ListGroup.Item>
                <ListGroup.Item>Rating: {item.product.rating.rate}</ListGroup.Item>
                <ListGroup.Item>Reviews: {item.product.rating.count}</ListGroup.Item>

                </ListGroup>
               
                <InputGroup>
                <h2>Quantity:</h2>
                <Form.Control
                placeholder="Recipient's username"
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
                />
            </InputGroup>
                <Button onClick={() => handleRemoveItem(item.product.id)} variant="danger" >Remove</Button>
              </Col>
            ))}
          </Row>
        )}
      </div>

  )
}




export default Cart
