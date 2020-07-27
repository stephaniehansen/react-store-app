import React, { Component } from 'react';
import { Router } from '@reach/router';

import ShoppingCart from "../../components/ShoppingCart";
import ProductList from "../../components/ProductList";

export default class Routes extends Component {
  render() { 
    const { products, addToCart, updateQuantity, removeFromCart } = this.props;
    return (
      <Router>
        <ProductList path="/" products={products} addToCart={addToCart} updateQuantity={updateQuantity} />
        <ShoppingCart path="cart" products={products} addToCart={addToCart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      </Router>
     );
  }
}