import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

import products from "./data/products";

class App extends Component {
  render() { 
    return (
      <>
        <NavBar />
        <Hero />
        <ProductList products={products}/>
      </>
    );
  }
}

export default App;