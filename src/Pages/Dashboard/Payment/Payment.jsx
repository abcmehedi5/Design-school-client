import React from "react";
import useCart from "../../../Hooks/useCart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
// import './CheckoutForm.css'
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const stripePromise = loadStripe(
  "pk_test_51NH4qAG6MyH1bNR3CmVhuEyjTTC2gouhXpwEVhfQ03Y6KmL1M54am0Q1lr8CP74REBJSj6VyRyrYJZAZSau1Ersm00AwPt02gh"
);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={total}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
