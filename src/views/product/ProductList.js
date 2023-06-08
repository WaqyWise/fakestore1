import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {clearProducts, fetchProducts} from "../../store/modules/product";
import {fetchCategories} from "../../store/modules/categories";
import {ProductCard} from "../../components/product/ProductCard";

export function ProductList() {
  // get products and loading state from redux store using useSelector hook
  const {loading, products} = useSelector(state => state.product);
  const isEmpty = products.length === 0 && !loading;
  const {categories} = useSelector(state => state.categories)
  // initialize dispatch function using useDispatch hook
  const dispatch = useDispatch();

  const fetch = () => dispatch(fetchProducts());
  const handleClear = () => dispatch(clearProducts());
  const handleCategories = () => dispatch(fetchCategories());

  // fetch products on component mount
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    handleCategories();
  }, []);

  return (
    <Container>
      <pre>{JSON.stringify(categories)}</pre>
      <Row className="justify-content-center">
        <Col xs={12} className="my-2 d-flex justify-content-end">
          <Button className="mx-4" onClick={handleClear} variant="secondary">
            Clear
          </Button>
          <Button onClick={fetch}>
            Refresh
          </Button>
          <Button className="mx-4" onClick={handleCategories} variant="danger">Categories
          </Button>
        </Col>
        <Col xs={9}>
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
                <Col key={product.id} xs={3} className="py-2">
                  <ProductCard key={product.id} {...product} />
                </Col>
              ))}
            </Row>
          )}
          {categories && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Categories...</span>
            </Spinner>)}
        </Col>
      </Row>
    </Container>
  );
}