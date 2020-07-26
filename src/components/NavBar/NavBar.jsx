import React, { Component } from 'react';
import styles from "./NavBar.module.scss";

import CartIcon from 'react-ionicons/lib/MdCart';

class NavBar extends Component {
  render() { 
    return ( 
      <nav className={styles.navBar}>
        <span class={styles.logo}>
          B<span>o</span>tanicals
        </span>
        <CartIcon />
        </nav>
    );
  }
}
 
export default NavBar;