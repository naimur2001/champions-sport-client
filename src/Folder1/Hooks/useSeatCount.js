import useClasses from "./useClasses";
import usePayments from "./usePayments";

// import React from 'react';

const useSeatCount = () => {
  const [classes,refetch]=useClasses();
const [paydata,]=usePayments()
const totalids=paydata.map(pa=>pd.cartItemsIds)
  
};

export default useSeatCount;