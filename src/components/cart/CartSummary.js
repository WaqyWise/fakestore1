import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'



const CartSummary = ({ totalPrice, totalItems, discount, shipping}) => {
  return (
    <Card style={{ width: '18rem'}}>
        <Card.Header>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-card-checklist" viewBox="0 0 16 20">
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
            </svg>
            Summary
        </Card.Header>
        <ListGroup varian="flush">
            <ListGroup.Item>Total Items : {totalItems}</ListGroup.Item>
            <ListGroup.Item>Total Price : ${totalPrice.toFixed(2)}</ListGroup.Item>
            <ListGroup.Item>Discount : ${discount}</ListGroup.Item>
            <ListGroup.Item>Shipping : ${shipping}</ListGroup.Item>
            <ListGroup.Item style={{fontWeight: 'bold' }}>Total : ${(totalPrice - (discount + shipping)).toFixed(2)}</ListGroup.Item>      
            <Button variant="outline-dark">Checkout</Button>
        </ListGroup>
    </Card>
  )
}

export default CartSummary
