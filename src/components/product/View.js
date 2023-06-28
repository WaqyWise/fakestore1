import React from 'react'
import { useEffect } from 'react';
import { Container,Card,Button, ListGroup, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CartIcon } from '../../icons';
import Product from "../../store/models/product";
import { fetchProductById } from '../../store/modules/product';

export default function ProductView() {
  const productInstance = useSelector((state) => state.product.productInstance);
  const {id} = useParams ();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));

  },[id]);

  return (
   <Container>
    <h1>Product Title : {productInstance?.title}</h1>
    
    <Card class="outline-dark" className="product-card h-100">
      <div className="product-card-image p-3">
        <Card.Img variant="top" src={productInstance?.image}/>
      </div>
      <Card.Body>
        <Card.Title>{productInstance?.title}</Card.Title>
      </Card.Body>
      <ListGroup  class="outline" className="list-group-flush">
        <ListGroup.Item>Price: ${productInstance?.price}</ListGroup.Item>
        <ListGroup.Item>Rating: {productInstance?.rating.rate}</ListGroup.Item>
        <ListGroup.Item>Reviews: {productInstance?.rating.count}</ListGroup.Item>
      </ListGroup>
      <Button type="button" variant="outline-dark">Buy</Button>
      <Button type="button" variant="outline-dark">Cancel</Button>
    </Card>
   </Container>
  );
}
