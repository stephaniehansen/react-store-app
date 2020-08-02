import React, { Component } from 'react';
import Hero from "../Hero";
import ProductList from "../ProductList";

export default class Main extends Component {
  render() {
    const { products, updateCart, updateQuantity } = this.props;
    return (
      <>
        <Hero />
        <ProductList path="/" products={products} updateCart={updateCart} updateQuantity={updateQuantity} />
      </>
    );
  }
}