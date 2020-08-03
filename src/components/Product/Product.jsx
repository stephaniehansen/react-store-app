import React, { Component } from 'react';
import styles from "./Product.module.scss";

export default class Product extends Component {
  state = {
    inCart: this.props.product.inCart,
    quantity: this.props.product.quantity
  }

  addToCart = () => {
    this.props.updateCart(this.props.product);
    this.setState({ inCart: !this.state.inCart })
  }

  updateQuantity = (amount) => {
    this.setState({ quantity: this.state.quantity += amount })
    this.props.updateQuantity(this.props.product, this.state.quantity);
  }

  getButtonText = () =>  !this.state.inCart ? "Add to Cart" : "Item in Cart";

  getButtonStyle = () => this.state.inCart ? styles.inCart : null;

  render() { 
    const { name, price, img, newArrival } = this.props.product;

    return (
      <div className={styles.product}>
        <div class={styles.imageWrapper}>
        <div class={styles.overlay}>
          <button className={this.getButtonStyle()} onClick={this.addToCart}>
            {this.getButtonText()}
          </button>
        </div>
          <img src={img} alt={name}/>
          {newArrival ? <span>New Arrival</span> : ""}
        </div>
        <div className={styles.productDetails}>
          <span className={styles.productName}>{name}</span>
          <span className={styles.productPrice}>£{price}</span>
        </div>
        {/* <span onClick={()=> this.updateQuantity(1)}>Increment</span>
        <span onClick={()=> this.updateQuantity(-1)}>Decrement</span> */}
      </div>
    );
  }
}