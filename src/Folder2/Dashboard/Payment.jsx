import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useClassCart from '../../Folder1/Hooks/useClassCart';

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
  const [classcart] = useClassCart();
  console.log(classcart);

  const total = classcart.reduce((sum, item) => sum + parseFloat(item.classPrice), 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <h1>Please Pay</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm price={total} key={total} classcart={classcart}></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;