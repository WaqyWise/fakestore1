import {Button, Card, ListGroup} from "react-bootstrap";
import React from "react";
import Product from "../../store/models/product";

/**
 * @param {Product} props
 * @returns {JSX.Element}
 * @constructor
 */
export function ProductCard(props) {
  const {image, title, price, rating} = props;

  return (
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
      <Button type="button" variant="outline-dark">Buy</Button>
      <Button type="button" variant="outline-dark">Cancel</Button>
    </Card>
  );
}