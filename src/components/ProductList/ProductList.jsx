import React, { Component } from 'react';
import styles from "./ProductList.module.scss";
import Product from "../Product";

export default class ProductList extends Component {
  getProducts = () => {
    const { products, updateCart, updateQuantity } = this.props;
    return products.map(product => <Product product={product} updateCart={updateCart} updateQuantity={updateQuantity} /> )
  }

  render() {
    return (
      <section className={styles.productList}>
        {this.getProducts()}
      </section>
    );
  }
}