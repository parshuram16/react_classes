import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Spinner, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Create and import a custom CSS file for styles
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../redux/cart/action';

function ProductDetails() {
  const { productID } = useParams();
  const [eachProduct, setEachProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    fetchEachProduct();
  }, [productID]);

  const fetchEachProduct = async () => {
    try {
      const result = await axios.get(`https://dummyjson.com/products/${productID}`);
      setEachProduct(result.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </Container>
    );
  }

  const handleAddToCart=(product)=>{

    console.log(product,"product")
    dispatch(addToCartAction(product))

  }

  const goToCart=(product)=>{

    console.log(product,"product")

    navigate("/blog")
    

  }

  return (
    <Container className="product-details">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={eachProduct.thumbnail} alt={eachProduct.title} />
            <Card.Body>
              <Row>
                {eachProduct.images && eachProduct.images.map((img, index) => (
                  <Col xs={3} key={index}>
                    <img src={img} alt={eachProduct.title} className="img-fluid thumbnail-image" />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div className="details">
            <h2>{eachProduct.title}</h2>
            <p>{eachProduct.description}</p>
            <div className="price">
              {eachProduct.price !== undefined && (
                <>
                  <span>${eachProduct.price.toFixed(2)}</span>
                  <span className="discount"> ({eachProduct.discountPercentage}% off)</span>
                </>
              )}
            </div>
            <div className="rating">
              {eachProduct.rating !== undefined && (
                <span>Rating: {eachProduct.rating}</span>
              )}
            </div>
            <div className="stock">
              {eachProduct.stock !== undefined && (
                eachProduct.stock > 0 ? `In Stock (${eachProduct.stock})` : 'Out of Stock'
              )}
            </div>
            <div className="brand-category">
              <span>Brand: {eachProduct.brand}</span>
              <br />
              <span>Category: {eachProduct.category}</span>
            </div>
            <div className="actions mt-3">
              {/* <Button variant="primary" className="mr-2">Add to Cart</Button> */}

              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(eachProduct)}
              >
                Add to Cart
              </button>

              <button
                className="add-to-cart"
                onClick={goToCart}
              >
                Go to Cart
              </button>

              <Button variant="success">Buy Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
