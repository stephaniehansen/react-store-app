import React, { Component } from 'react';
import Routes from './containers/Routes';
import NavBar from "./components/NavBar";

import products from "./data/products";

class App extends Component {
  state = {
    products: products,
  }

  updateCart = (product) => {
    product.inCart = !product.inCart;
    product.quantity = product.inCart ? 1 : 0;
    this.updateTotal(product);
  }

  updateQuantity = (product, quantity) => {
    product.quantity = quantity;
    product.quantity > 0 ? this.updateTotal(product) : this.updateCart(product);
  }

  updateTotal = (product) => {
    product.total = product.quantity * product.price;
    this.setState({ products: this.state.products })
  }

  emptyCart = () => {
    this.state.products.filter(product => product.inCart).map(this.updateCart);
  }

  render() { 
    return (
      <>
        <NavBar toggleCart={this.toggleCart}/>
        <Routes products={this.state.products} updateCart={this.updateCart} updateQuantity={this.updateQuantity} emptyCart={this.emptyCart} />
      </>
    );
  }
}

export default App;