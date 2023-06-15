import { Button, Col, Container, Row, Spinner} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { clearProducts, fetchProducts } from "../../store/modules/product";
import { fetchCategories } from "../../store/modules/categories";
import { ProductCard } from "../../components/product/ProductCard";
import {Route} from "react-router-dom"
import ProductFilters from "../../components/ProductFilters";

export function Index() {
  // get products and loading state from redux store using useSelector hook
  const loading = useSelector(state => state.product.loading);
  const products = useSelector(state => state.product.products);
  const isEmpty = products.length === 0 && !loading;
  const categories = useSelector(state => state.categories.categories)
  // initialize dispatch function using useDispatch hook
  const dispatch = useDispatch();

  const handleRefresh = () => {
    // dispatch fetchProducts action using dispatch function
    dispatch(fetchProducts());
  };

  const handleClear = () => {
    // dispatch clearProducts action using dispatch function
    dispatch(clearProducts());
  };
  const handleCategories = () => {
    dispatch(fetchCategories());
  }

  // fetch products on component mount
  useEffect(() => {
    handleRefresh();
  }, []);
  useEffect(() => {
    handleCategories();
  },[]);

  return (
    <Container>
      <Col xs={12}>
        <div> 
        <Route path="/:category" component={ProductFilters} />
        </div>
         <h1>Category :</h1> 
          {loading && (
            <div className="product-list-loading">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {isEmpty && (
            <div className="product-list-loading">
              <p>No products found!</p>
            </div>
          )}
          {!loading && (
            <Row className="align-items-stretch">
              {products.map(product => (
                <Col xs={3} className="py-2">
                  <ProductCard key={product.id} {...product} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
    </Container>
);
}