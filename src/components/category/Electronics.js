import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import categories from '../../store/modules/categories';
import { fetchProducts } from '../../store/modules/product';

const Electronics = (props) => {
    const {image, title, price, rating} = props;
    const {category} = useParams();
    const products = useSelector(state =>
    state.products.filter(product => product.category === "Electronics"));

    useEffect(() => {
    fetchProducts()
    },[]);
  return (
    <div>
    <h1> Category: {category}</h1>
      <h2>Electronics Category</h2>
      {products.map (product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  )
}

export default Electronics
