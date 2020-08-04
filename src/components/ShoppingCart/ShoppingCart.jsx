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
    const { updateCart, updateQuantity, removeFromCart } = this.props;
    
    return this.state.cart
    .map(item => <ShoppingCartItem product={item} updateCart={updateCart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} refreshCart={this.refreshCart}/>);
  }

  getCartTotal = () => {
    const itemPrices = this.state.cart.map(item => item.total);
    return itemPrices.reduce((total, amount) => total + amount, 0).toFixed(2);
  }

  refreshCart = () => {
    this.setState({ cart: this.props.products.filter(product => product.inCart) })
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
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
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
                <PayPalBtn amount={this.getCartTotal()} refreshCart={this.refreshCart} emptyCart={this.props.emptyCart} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}