import React, { Component } from 'react';
import { Link } from "@reach/router";
import styles from "./NavBar.module.scss";

import bagIcon from "../../assets/shopping-bag-icon.svg";
import IosMenu from 'react-ionicons/lib/IosMenu';

export default class NavBar extends Component {
  render() { 
    return ( 
      <nav className={styles.navBar}>
        <div className={styles.menu}>
          <IosMenu />
        </div>
        <Link to="/react-store-app">
          <span class={styles.logo}>
            B<span>o</span>tanicals
          </span>
        </Link>
        <div className={styles.cartIcon}>
          <Link to="cart">
            <img src={bagIcon} alt="Shopping Bag" />
          </Link>
        </div>
      </nav>
    );
  }
}