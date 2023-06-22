import { Button, Col, Container, Row, Spinner} from "react-bootstrap";
import { useDispatch, useSelector, useParams } from "react-redux";
import React, { useEffect } from "react";
import { clearProducts, fetchProducts } from "../../store/modules/product";
import { fetchCategories } from "../../store/modules/categories";
import { ProductCard } from "../../components/product/ProductCard";
import ProductFilters from "../../components/ProductFilters";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function Index() {
  // get products and loading state from redux store using useSelector hook
  const loading = useSelector(state => state.product.loading);
  const products = useSelector(state => state.product.products);
  const isEmpty = products.length === 0 && !loading;
  // const category = useSelector(state => state.categories.categories);
  const categories = ['Electronics', 'Smartphones', 'Mensclothing', 'Womensclothing'];
  
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
  const category = () => {
  dispatch(fetchProducts(category));
}
  // fetch products on component mount
  useEffect(() => {
    handleRefresh();
    handleCategories();
  },[]);

  return (
    <Container>
  <Row>
    <Col lg={4}>
      <ProductFilters />
    </Col>
    <Col xs={12} lg={8}>
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
  </Row>
  <div>
        {categories.map((category, index) => (
        <Link key={index} to={`/${category}`}>
          Go to {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}
        </div>
</Container>
);
}