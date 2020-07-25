import React, { Component } from 'react';
import styles from "./Product.module.scss";

export default class Product extends Component {
  render() { 
    const { name, img } = this.props.product;
    
    return (
      <div className={styles.product}>
        <img src={img} alt={name}/>
        <h2>{name}</h2>
      </div>
    );
  }
}