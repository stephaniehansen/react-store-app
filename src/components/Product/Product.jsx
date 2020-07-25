import React, { Component } from 'react';
import styles from "./Product.module.scss";

export default class Product extends Component {
  render() { 
    const { name, price, img } = this.props.product;
    
    return (
      <div className={styles.product}>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <h3>£{price}</h3>
        <button>Add to Cart</button>
      </div>
    );
  }
}