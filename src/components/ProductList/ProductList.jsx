import React, { Component } from 'react';
import styles from "./ProductList.module.scss";
import Product from "../Product";

export default class ProductList extends Component {
  getProducts = () => {
    const { products } = this.props;
    return products.map(product => <Product product={product}/> )
  }

  render() {
    return (
      <section className={styles.productList}>
        {this.getProducts()}
      </section>
    );
  }
}