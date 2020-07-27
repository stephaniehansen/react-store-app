import React, { Component } from 'react';
import styles from "./Product.module.scss";

export default class Product extends Component {
  state = {
    inCart: this.props.product.inCart,
    quantity: this.props.product.quantity
  }

  addToCart = () => {
    this.props.addToCart(this.props.product);
    this.setState({ inCart: !this.state.inCart })
  }

  updateQuantity = (amount) => {
    this.setState({ quantity: this.state.quantity += amount })
    this.props.updateQuantity(this.props.product, this.state.quantity);
  }

  getButtonText = () =>  !this.state.inCart ? "Add to Cart" : "Item in Cart";

  render() { 
    const { name, price, img, newArrival } = this.props.product;

    return (
      <div className={styles.product}>
        <div class={styles.imageWrapper}>
          <img src={img} alt={name}/>
          {newArrival ? <span>New Arrival</span> : ""}
        </div>
        <div className={styles.productContent}>
          <h2>{name}</h2>
          <h3>£{price}</h3>
        </div>
        <span onClick={()=> this.updateQuantity(1)}>Increment</span>
        <span onClick={()=> this.updateQuantity(-1)}>Decrement</span>
        <button className={styles.cartBtn} onClick={this.addToCart}>
          {this.getButtonText()}
        </button>
      </div>
    );
  }
}