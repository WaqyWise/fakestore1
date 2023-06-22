import React from 'react'
import { useSelector } from 'react-redux'

const Electronics = (props) => {
    const {image, title, price, rating} = props;
    const products = useSelector(state =>
    state.products.filter(product => product.category === "Electronics"));

  return (
    <div>
      <h2>Electronics Category</h2>
      {products.map (product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  )
}

export default Electronics
