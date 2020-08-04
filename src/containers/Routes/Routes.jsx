import React, { Component } from 'react';
import { Router } from '@reach/router';

import Main from "../../components/Main";
import ShoppingCart from "../../components/ShoppingCart";

export default class Routes extends Component {
  render() { 
    const { products, updateCart, updateQuantity, emptyCart } = this.props;
    return (
      <Router basepath="/react-store-app">
        <Main path="/react-store-app" products={products} updateCart={updateCart} updateQuantity={updateQuantity} />
        <ShoppingCart path="/react-store-app/cart" products={products} updateCart={updateCart} updateQuantity={updateQuantity} emptyCart={emptyCart} />
      </Router>
     );
  }
}