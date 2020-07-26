import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

import products from "./data/products";

class App extends Component {
  state = {
    products: products
  }

  addToCart = product => product.inCart = !product.inCart;

  render() { 
    return (
      <>
        <NavBar />
        <Hero />
        <ProductList products={this.state.products} addToCart={this.addToCart} />
      </>
    );
  }
}

export default App;