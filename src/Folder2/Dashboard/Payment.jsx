import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useClassCart from '../../Folder1/Hooks/useClassCart';
import { motion } from 'framer-motion';

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
  const [classcart] = useClassCart();
  // console.log(classcart);

  const total = classcart.reduce((sum, item) => sum + parseFloat(item.classPrice), 0);
  const price = parseFloat(total.toFixed(2));
  const h1Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      <motion.h1
        className="text-5xl text-center mb-6 font-mono text-blue-700"
        initial="hidden"
        animate="visible"
        variants={h1Variants}
        transition={{ duration: 0.5 }}
      >
        Please Pay
      </motion.h1>
      <Elements stripe={stripePromise}>
        <PaymentForm price={total} key={total} classcart={classcart}></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;