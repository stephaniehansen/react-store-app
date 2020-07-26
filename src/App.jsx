import React, { Component } from 'react';
import Routes from './containers/Routes';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import products from "./data/products";

class App extends Component {
  state = {
    products: products,
  }
  addToCart = (product) => {
    product.inCart = !product.inCart;
    product.quantity = product.quantity + 1;
  }

  updateQuantity = (product, quantity) => {
    product.quantity = quantity;
  }

  render() { 
    return (
      <>
        <NavBar toggleCart={this.toggleCart}/>
        <Hero />
        <Routes products={this.state.products} addToCart={this.addToCart} updateQuantity={this.updateQuantity}/>
      </>
    );
  }
}

export default App;