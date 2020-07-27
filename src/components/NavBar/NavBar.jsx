import React, { Component } from 'react';
import { Link } from "@reach/router";
import styles from "./NavBar.module.scss";

import CartIcon from 'react-ionicons/lib/MdCart';

export default class NavBar extends Component {
  render() { 
    return ( 
      <nav className={styles.navBar}>
        <Link to="/">
          <span class={styles.logo}>
            B<span>o</span>tanicals
          </span>
        </Link>
        <Link to="cart">
          <CartIcon />
        </Link>
      </nav>
    );
  }
}