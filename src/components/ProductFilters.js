import React from 'react'
import { Accordion , Card, Col, Container, Form, Row, InputGroup, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ProductFilters = () => {
const categories = useSelector(state => state.categories.categories);
const products = useSelector(state => state.product.products);
const [sortType, setSortType] = useState('rating');
const handleSortChange = (event) => {
  setSortType(event.target.value);
}



return (
    <div>
    <h1>Filters:</h1>
        <Card>
        <select value={sortType} onChange={handleSortChange}>
        <option value="rating">Sort by rating</option>
        <option value="price-asc">Sort by Price Low to High</option>
        <option value="rating">Sort by Price High to Low</option>
      </select>
          <Card.Body>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header variant="outline-dark">Categories</Accordion.Header>
                <Accordion.Body variant="outline-dark">
                  <ListGroup>
                    {categories.map(category => (
                  <ListGroupItem>
                    <Link to={`/${category.id}`} style={{textDecoration: 'none',color: 'black'}}>{category.name}</Link></ListGroupItem>
                 ))}
                 
                 </ListGroup>
                 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <InputGroup style={{justifyContent: 'space-between'}}>
              <InputGroup.Text >$</InputGroup.Text>
              <Form.Control style={{width :'2px'}}/>
              <InputGroup.Text >$</InputGroup.Text>
              <Form.Control style={{width : '2px'}}/>
            </InputGroup>
            <Form.Label><h1>Price Range:</h1></Form.Label>
            <Form.Range style={{ width: '380px' }} />
          </Card.Body>
        </Card>
  </div>
  
  )
}

export default ProductFilters
