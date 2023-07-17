import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import './PaymentForm.css'
import useAxiosSecure from '../../Folder1/Hooks/useAxiosSecure';
import { AuthContext } from '../Authentication/AuthProvider';
import useClasses from '../../Folder1/Hooks/useClasses';
const PaymentForm = ({price,classcart }) => {
  // console.log(price,classcart);
  const elements=useElements()
  const stripe=useStripe()
  const [cardError,setCardError]=useState('');
  const [classes] = useClasses();
  const [clientSecret,setClientSecret]=useState('');
  const [axiosSecure]=useAxiosSecure();
  const {user}=useContext(AuthContext)
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  useEffect(() => {
    if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
                console.log(clientSecret);
            })
    }
}, [price,axiosSecure])


  const handleSubmit=async (event)=>{
    event.preventDefault();
    if (!stripe || !elements) {
      return ;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // console.log(card);
    
     const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });


if (error) {
  console.log('[error]', error);
  setCardError(error.message)
} else {
  setCardError('')
  console.log('[PaymentMethod]', paymentMethod);
}
if (!clientSecret) {
  console.log('Invalid client secret');
  return;
}
// confirm
setProcessing(true)
             const {paymentIntent,error:confirmError} =await stripe.confirmCardPayment(clientSecret,
              {
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || 'unknown',
        name:user?.displayName || 'annonymous',
      },
    },
  }
  
  );
if (confirmError) {
  console.log(confirmError);
}

// console.log('payment intent', paymentIntent)
setProcessing(false)
if (paymentIntent.status === 'succeeded') {
  setTransactionId(paymentIntent.id);
 // Update seat value for each enrolled class
 console.log(classcart,'clascart');
 classcart.forEach((classItem) => {
  

  const updatedSeat = classItem.classSeat - 1;
console.log(classItem.classId);
  fetch(`https://champion-sports-server.vercel.app/classes/dec/${classItem.classId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ seat: updatedSeat }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Seat updated:", data);
    });
});

  
  const payment = {
      email: user?.email,
      transactionId: paymentIntent.id,
      price,
      date: new Date(),
      quantity: classcart?.length,
      cartItems: classcart?.map(item => item._id),
      cartItemsIds: classcart?.map(item => item.classId),
      status: 'service pending',
      classNames: classcart?.map(item => item.className)
  }
  const cartItems = classcart?.map(item => item._id);

  const quantity = cartItems.reduce((acc, id) => {
    if (acc[id]) {
      acc[id] += 1;
    } else {
      acc[id] = 1;
    }
    return acc;
  }, {});
  console.log(quantity);

  axiosSecure.post('/payment', payment)
      .then(res => {
          console.log(res.data);
        //changes
      })
}
// console.log('[paymentintent]',paymentIntent);

  }
  return (
    <div className='mx-5'>
      <form className='flex gap-3' onSubmit={handleSubmit} >
      <CardElement
      className='w-2/3'
        options={{
          style: {
            base: {
              fontSize: '18px',
              color: '#423770',
              '::placeholder': {
                color: '#aab9c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn-sm btn hover:bg-yellow-200 bg-yellow-300 border-0 mt-4' type="submit" disabled={!stripe || !clientSecret  || processing }>
        Pay
      </button>
    </form>
 <>
 {
cardError&& <p  className='text-red-600' >{cardError}</p>

    }
    {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
 </>
    </div>
  );
};

export default PaymentForm;