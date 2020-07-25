import React, { Component } from 'react';
import styles from "./NavBar.module.scss"

class NavBar extends Component {
  render() { 
    return ( 
      <nav className={styles.navBar}>
        Nav bar
      </nav>
    );
  }
}
 
export default NavBar;