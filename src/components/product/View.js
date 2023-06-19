import React from 'react'
import { Container,Image,Col,Button, Row, ButtonGroup } from 'react-bootstrap';
import { CartIcon } from '../../icons';
import Product from "../../store/models/product";

export default function View(props) {
  const {image, title, price, rating} = props;

  return (
   <Container>
    <Row className="px-4 my-5">
            
            <Col sm={5}>
              <h1>Product Title :</h1>
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
          </Row>
   </Container>
  );
}
