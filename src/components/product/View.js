import React from 'react'
import { useEffect } from 'react';
import { Container,Image,Col,Button, Row, ButtonGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { CartIcon } from '../../icons';
import Product from "../../store/models/product";
import { fetchProductById } from '../../store/modules/product';

export default function ProductView() {
  const productInstanse = useSelector((state) => state.product.productInstanse);
  const {id} = useParams ();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));

  },[dispatch,id]);

  return (
   <Container>
    <h1>Product Title :</h1>



    {/* <Row className="px-4 my-5">
            <Col sm={5}>
              <Image src="https://dummyimage.com/1000x600/a19ca1/fafafa.jpg&text=Example" 
              fluid
              rounded
              />
            </Col>
            <Col sm={7} className="py-5">
              <h2 class="font-weight-light">Product description</h2>
              <h2 class="font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, sunt?</h2>
              <h1 class="font-weight-light">Price $</h1>
              <ButtonGroup className='py-3'  >
              <Button variant="outline-dark"><CartIcon />Add to cart</Button>
              <Button variant="secondary">Check out!</Button>
              </ButtonGroup>
            </Col>
          </Row> */}
   </Container>
  );
}
