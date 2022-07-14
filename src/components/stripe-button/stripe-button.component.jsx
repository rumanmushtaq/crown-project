import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    console.log(price);
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LL3yoKznavhai5ukpeEKonFbBadt46wo8Cr9lWAivdTeDYHWeSEpWnCpRUkMNhlgyh66TCakTLvWhBVEDDON0kq00BITpDkzP'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
    
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}
export default StripeCheckoutButton;