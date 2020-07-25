import React, { Component } from 'react';
import Product from "../Product"

export default class ProductList extends Component {
  render() { 
    return (
      <>
        <h2>Product List</h2>
        <Product />
      </>
    );
  }
}