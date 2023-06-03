import { Button, Card, ListGroup } from "react-bootstrap";
import React from "react";

export function ProductCard(props) {
  const { image, title, price, rating } = props;

  return (
    <Card className="product-card h-100">
      <div className="product-card-image p-3">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Price: ${price}</ListGroup.Item>
        <ListGroup.Item>Rating: {rating.rate}</ListGroup.Item>
        <ListGroup.Item>Reviews: {rating.count}</ListGroup.Item>
      </ListGroup>
      <Button type="button" className="btn btn-outline-success" >+</Button>
      <Button type="button" className="btn btn-outline-danger">-</Button>
    </Card>
  );
}