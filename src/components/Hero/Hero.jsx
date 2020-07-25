import React, { Component } from 'react';
import styles from "./Hero.module.scss"

export default class Hero extends Component {
  render() { 
    return (
      <section className={styles.hero}>
        <h1>Hero</h1>
      </section>
     );
  }
}