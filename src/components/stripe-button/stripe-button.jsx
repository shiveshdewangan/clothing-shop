import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_w6awoB3RK6nQqlcjvw5zwRfg00KmAug4N9";

  const onToken = token => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Shop'
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
};

export default StripeCheckoutButton;
