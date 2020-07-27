import React, { Component } from 'react';
import { Router } from '@reach/router';

import ShoppingCart from "../../components/ShoppingCart";
import ProductList from "../../components/ProductList";

export default class Routes extends Component {
  render() { 
    const { products, updateCart, updateQuantity, emptyCart } = this.props;
    return (
      <Router>
        <ProductList path="/" products={products} updateCart={updateCart} updateQuantity={updateQuantity} />
        <ShoppingCart path="cart" products={products} updateCart={updateCart} updateQuantity={updateQuantity} emptyCart={emptyCart} />
      </Router>
     );
  }
}