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
          <img src={img} alt={name}/>
          {newArrival ? <span>New Arrival</span> : ""}
        </div>
        <div className={styles.productContent}>
          <h2>{name}</h2>
          <h3>£{price}</h3>
        </div>
        {/* <span onClick={()=> this.updateQuantity(1)}>Increment</span>
        <span onClick={()=> this.updateQuantity(-1)}>Decrement</span> */}
        <button className={this.getButtonStyle()} onClick={this.addToCart}>
          {this.getButtonText()}
        </button>
      </div>
    );
  }
}