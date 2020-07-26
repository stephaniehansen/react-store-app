import React, { Component } from 'react';
import { Router } from '@reach/router';

import Cart from "../../components/Cart";
import ProductList from "../../components/ProductList";

export default class Routes extends Component {
  render() { 
    const { products, addToCart } = this.props;
    return (
      <Router>
        <ProductList path="/" products={products} addToCart={addToCart} />
        <Cart path="cart" />
      </Router>
     );
  }
}