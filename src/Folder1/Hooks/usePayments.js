import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePayments = () => {
  const [axiosSecure] = useAxiosSecure();
  const {data:paydata,refetch}=useQuery({
    queryKey:['paydata'],
    queryFn: async()=>{
      const res=await axiosSecure.get('/payment')
      return res.data
    }
  })
  return [paydata,refetch]
};

export default usePayments;

