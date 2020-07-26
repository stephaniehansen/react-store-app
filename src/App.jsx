import React, { Component } from 'react';
import Routes from './containers/Routes';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

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
        <Routes products={this.state.products} addToCart={this.addToCart} />
      </>
    );
  }
}

export default App;