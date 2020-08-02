import React, { Component } from 'react';
import styles from "./ShoppingCart.module.scss";

import Banner from "../Banner";
import ShoppingCartItem from "../ShoppingCartItem";
import PayPalBtn from "../PayPalBtn";

export default class ShoppingCart extends Component {
  state = {
    cart: this.props.products.filter(product => product.inCart)
  }

  getCartItems = () => {
    return this.state.cart
    .map(item => <ShoppingCartItem product={item} updateCart={this.props.updateCart} updateQuantity={this.props.updateQuantity} removeFromCart={this.props.removeFromCart} refreshCart={this.refreshCart}/>);
  }

  getCartTotal = () => {
    const itemPrices = this.state.cart.map(item => item.total);
    return itemPrices.reduce((total, amount) => total + amount, 0).toFixed(2);
  }

  refreshCart = () => {
    this.setState({cart: this.props.products.filter(product => product.inCart)})
  }

  render() {
    return (
      <>
        <Banner />
        <section className={styles.shoppingCart}>
          <div className={styles.cartContainer}>
            <div className={styles.leftPanel}>
              <h1 className={styles.cartTitle}>Shopping Cart</h1>
              <div className={styles.tableHeadings}>
                <span>Items</span>
                <span>Quantity</span>
                <span>Price</span>
              </div>
              <div className={styles.shoppingCartItems}>
                {this.state.cart.length ? this.getCartItems() : <p>Your cart is empty.</p>}
              </div>
            </div>
            <div className={styles.rightPanel}>
              <div className={styles.summaryContainer}>
                <h2>Order Summary</h2>
                <div className={styles.summaryItem}>
                  <span><h3>Total</h3></span>
                  <span><h3>£{this.getCartTotal()}</h3></span>
                </div>
                {/* <button className={styles.checkoutBtn}>Checkout</button> */}
                <PayPalBtn amount={this.getCartTotal()} refreshCart={this.refreshCart} emptyCart={this.props.emptyCart} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}