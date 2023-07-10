import {Button, Card, ListGroup} from "react-bootstrap";
import React from "react";
import Product from "../../store/models/product";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../../store/modules/cart";


/**
 * @param {Product} props
 * @returns {JSX.Element}
 * @constructor
 */
export function ProductCard(props) {
  const {product} = props;
  const {image, title, price, rating,id} = product;
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(addToCart({ product: product, quantity : 1}));
  }

  const handleRemoveItem = (event) => {
    event.preventDefault();
    dispatch(removeItem(id));
  } 
  return (
    <Link to={`/product/${id}`} style={{textDecoration: 'none',color: 'black'}}>
      <Card class="outline-dark" className="product-card h-100">
      <div className="product-card-image p-3">
        <Card.Img variant="top" src={image}/>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup  class="outline" className="list-group-flush">
        <ListGroup.Item>Price: ${price}</ListGroup.Item>
        <ListGroup.Item>Rating: {rating.rate}</ListGroup.Item>
        <ListGroup.Item>Reviews: {rating.count}</ListGroup.Item>
      </ListGroup>
      <Button type="button" variant="outline-dark" onClick={handleAddToCart}>Add to Cart</Button>
      <Button type="button" variant="outline-dark" onClick={handleRemoveItem}>Cancel</Button>
    </Card>
    </Link>
    
  );
}