import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default class PayPalBtn extends Component {

  render() {
    const { amount, completeTransaction } = this.props;
      return ( 
        <PayPalButton amount={amount} />
   ); 
  }
}