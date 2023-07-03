import React, {useEffect} from 'react'
import { Container, Button, Row, Col, Image, Card, CardGroup } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { fetchCategories } from '../store/modules/categories';



const Main = () => {
const dispatch = useDispatch();
const categories = useSelector(state => state.categories.categories);
const handleCategories = () => {
  dispatch(fetchCategories());
}; 
useEffect(() => {
  handleCategories();
},[]);

  return (
    <div>
      <Container>
          <Row className="px-4 my-5">
          <Col sm={5}>
            <Image src="https://dummyimage.com/1000x600/a19ca1/fafafa.jpg&text=Example" 
              fluid
              rounded
              className="" 
              />
            </Col>
            <Col sm={7}>
              <h1 class="font-weight-light">The Best Place To </h1>
              <h1 class="font-weight-light">Find And Buy</h1>
              <h1 class="font-weight-light">Amazing Products</h1>
              <Button variant="dark">Shop now!</Button>
            </Col>
            
          </Row>
          <Row>
            <CardGroup className='text-center py-5 '  >
                {categories.map(category => (
                <Card>
                  <Link to={`/${category.id}`} style={{textDecoration: 'none',color: 'black'}}><Card.Title>
                    {category.name}
                  </Card.Title>
                  </Link>
                </Card>
                ))}
            
            </CardGroup>
          </Row>
      </Container>
    </div>
  )
}

export default Main
