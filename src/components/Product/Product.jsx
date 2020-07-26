import React, { Component } from 'react';
import styles from "./Product.module.scss";

export default class Product extends Component {
  state = {
    inCart: this.props.product.inCart
  }

  addToCart = () => {
    this.props.addToCart(this.props.product);
    this.setState({
      inCart: !this.state.inCart,
    })
  }

  getButtonText = () =>  !this.state.inCart ? "Add to Cart" : "Item Added!";

  render() { 
    const { name, price, img, newArrival } = this.props.product;

    return (
      <div className={styles.product}>
        <div class={styles.imageWrapper}>
          <img src={img} alt={name}/>
          {newArrival ? <span>New Arrival</span> : ""}
        </div>
        <h2>{name}</h2>
        <h3>£{price}</h3>
        <button onClick={this.addToCart}>
          {this.getButtonText()}
        </button>
      </div>
    );
  }
}