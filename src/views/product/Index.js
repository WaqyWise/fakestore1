import { Button, Col, Container, Row, Spinner} from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import React, { useEffect } from "react";
import { clearProducts, fetchProducts } from "../../store/modules/product";
import { fetchCategories } from "../../store/modules/categories";
import { ProductCard } from "../../components/product/ProductCard";
import ProductFilters from "../../components/ProductFilters";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";

export function Index() {
  // get products and loading state from redux store using useSelector hook
  const loading = useSelector(state => state.product.loading);
  const products = useSelector(state => state.product.products);
  const isEmpty = products.length === 0 && !loading;
  const categories = useSelector(state => state.categories.categories);
  const [sortType, setSortType] = useState('rating');
  const minPrice = useSelector((state) => state.product.minPrice);
  const maxPrice = useSelector((state) => state.product.maxPrice);
  
  
  const filteredAndSortedProducts = products
    .filter((product) => {
      if (!minPrice || !maxPrice) {
        return true;
      }
      return product.price >= minPrice && product.price <= maxPrice;
    })
    .sort((a, b) => {
      if ( sortType ===  'rating' ) {
        return  b.rating - a.rating; 
      }
       else if ( sortType === 'priceLowToHigh') {
        return b.price - a.price  ; 
      } else if (sortType === 'priceHighToLow') {
        return  a.price - b.price;
      }else {
        return 0;
      }
    })
  
  // initialize dispatch function using useDispatch hook
  const dispatch = useDispatch();
  const params = useParams();
  const categoryName = params.categoryName;
  
  const handleRefresh = () => {
    // dispatch fetchProducts action using dispatch function
    dispatch(fetchProducts(categoryName));
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
    handleCategories();
  },[categoryName]);

  return (
    <Container>
  <Row>
    <Col lg={4}>
      <ProductFilters />
    </Col>
    <Col xs={12} lg={8}>
      <h1>Category : {categoryName}</h1>
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
              <ProductCard key={product.id} product={product} />
            </Col>
          ))};
        {filteredAndSortedProducts.map((product) =>  (
          <Col xs={3} className="py-2">
          <ProductCard key={product.id} product={product} />
          </Col>
        ))}
          </Row>
      )}
      
    
    
   
    
    
    
    </Col>
  </Row>
  
        {/* {categories.map((category, index) => (
        <Link key={index} to={`/${category}`}>
          Go to {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link> */}
      
     
</Container>
);
}