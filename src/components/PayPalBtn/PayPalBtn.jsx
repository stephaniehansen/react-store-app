import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default class PayPalBtn extends Component {
  completeTransaction = () => {
    this.props.emptyCart();
    this.props.refreshCart(this.props.refreshCart);
  }

  render() {
    const { amount } = this.props;

      return ( 
        <PayPalButton
          amount={amount}
          onSuccess={(details) => {
            alert(`Thank you for your purchase, ${details.payer.name.given_name}!`)
            this.completeTransaction();
          }}
          options={{
            clientId: process.env.REACT_APP_PP_CLIENT_ID,
            currency: "GBP"
          }}
        />
      ); 
  }
}