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
    product.quantity = product.inCart ? 1 : 0;
    this.updateTotal(product);
  }

  updateQuantity = (product, quantity) => {
    product.quantity = quantity;
    this.updateTotal(product);
  }

  updateTotal = product => product.total = product.quantity * product.price;

  render() { 
    return (
      <>
        <NavBar toggleCart={this.toggleCart}/>
        <Hero />
        <Routes products={this.state.products} addToCart={this.addToCart} updateQuantity={this.updateQuantity} />
      </>
    );
  }
}

export default App;