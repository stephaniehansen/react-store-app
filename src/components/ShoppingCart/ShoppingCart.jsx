import React, { Component } from 'react';
import styles from "./ShoppingCart.module.scss";
import ShoppingCartItem from "../ShoppingCartItem";
import PayPalBtn from "../PayPalBtn";

export default class ShoppingCart extends Component {
  state = {
    cart: this.props.products.filter(product => product.inCart)
  }

  getCartItems = () => {
    return this.state.cart
    .map(item => <ShoppingCartItem product={item} addToCart={this.props.addToCart} updateQuantity={this.props.updateQuantity} removeFromCart={this.props.removeFromCart} updateCart={this.updateCart}/>);
  }

  getCartTotal = () => {
    const itemPrices = this.state.cart.map(item => item.total);
    return itemPrices.reduce((total, amount) => total + amount, 0).toFixed(2);
  }

  updateCart = () => {
    this.setState({cart: this.props.products.filter(product => product.inCart)})
  }

  render() {
    return (
      <section className={styles.shoppingCart}>
        <div className={styles.cartContainer}>
          <div className={styles.leftPanel}>
            <h1 className={styles.cartTitle}>Shopping Cart</h1>
            <div className={styles.shoppingCartItems}>
              {this.state.cart.length ? this.getCartItems() : <p>Your cart is empty.</p>}
            </div>
          </div>
          <div className={styles.rightPanel}>
            <div className={styles.summaryContainer}>
              <h2>Order Summary</h2>
              <div>
                <span><h3>Total</h3></span>
                <span><h3>£{this.getCartTotal()}</h3></span>
              </div>
              {/* <button className={styles.checkoutBtn}>Checkout</button> */}
              <PayPalBtn amount={this.getCartTotal()}/>
            </div>
          </div>
        </div>
        
      </section>
    );
  }
}