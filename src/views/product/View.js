import React from 'react'
import { useEffect } from 'react';
import { Container,Card,Button, ListGroup, Image,Spinner,Row,Col,ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CartIcon } from '../../icons';
import Product from "../../store/models/product";
import { fetchProductById } from '../../store/modules/product';

export default function ProductView() {
  const productInstance = useSelector((state) => state.product.productInstance);
  const {id} = useParams ();
  const dispatch = useDispatch();
  const loading = useSelector (state => state.product.loading);
  useEffect(() => {
    dispatch(fetchProductById(id));

  },[id]);

  
  return (

     <div> 
     {loading ? ( 
       <Spinner animation="border" role="status"> 
         <span className="visually-hidden">Loading...</span> 
       </Spinner> 
     ) : productInstance ? ( 
      

        <Row className="px-4 my-5">
        <Col className='text-center my-5 '>
            <Image align="center" src={productInstance?.image} fluid width={200} height={200} />
            </Col>
        <Col sm={7}>
        <ListGroup  class="outline" className="list-group-flush">
          <h1>{productInstance?.title}</h1>
          <h1>Product Description :</h1>
          <ListGroup.Item>Price: ${productInstance?.price}</ListGroup.Item>
          <ListGroup.Item>Rating: {productInstance?.rating.rate}</ListGroup.Item>
          <ListGroup.Item>Reviews: {productInstance?.rating.count}</ListGroup.Item>
          <ButtonGroup>
          <Button variant="dark" >Add cart!</Button>
          <Button variant="danger" >Check out! </Button>
          </ButtonGroup>

        </ListGroup>
        </Col>    
        </Row>
     ) : ( 
       <p>Product not found.</p> 
     )} 
   </div> 
 );
}
