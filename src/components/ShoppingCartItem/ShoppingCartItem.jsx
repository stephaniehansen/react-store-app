import React, { Component } from 'react';
import styles from "./ShoppingCartItem.module.scss";

export default class ShoppingCartItem extends Component {
  state = {
    inCart: this.props.product.inCart,
    quantity: this.props.product.quantity
  }

  removeFromCart = () => {
    this.props.updateCart(this.props.product);
    this.props.refreshCart(this.props.refreshCart);
    this.setState({ inCart: !this.state.inCart })
  }

  updateQuantity = (amount) => {
    this.setState({ quantity: (this.state.quantity += amount) })
    this.props.updateQuantity(this.props.product, this.state.quantity);
  }

  render() { 
    const { img, name, quantity, price, total } = this.props.product;
    
    return (
      <div className={styles.shoppingCartItem}>
        <div className={styles.itemDetailsContainer}>
          <div className={styles.itemImg}>
            <img src={img} alt={name}/>
          </div>
          <div className={styles.itemInfo}>
            <span><h2>{name}</h2></span>
            <div className={styles.itemRemove}>
              <a onClick={this.removeFromCart}>Remove</a>
            </div>
          </div>
        </div>
        <div className={styles.itemPrice}>
          £{price}
        </div>
        <div className={styles.itemQuantity}>
          <button onClick={()=> this.updateQuantity(-1)} disabled={this.state.quantity < 2 }>-</button>
            <span>{quantity}</span>
          <button onClick={()=> this.updateQuantity(1)}>+</button>
        </div>
        <div className={styles.itemTotal}>
          £{total}
        </div>
      </div>
    );
  }
}