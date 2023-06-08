import {  useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Folder2/Authentication/AuthProvider';
 export const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
 const {logOut}=useContext(AuthContext);  
const navigate=useNavigate()
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error.res) {
          const { status } = error.res;
          if (  status === 403 || status === 401  || status === 402) {
             logOut();
            navigate('/login');
          }
        }
        return Promise.reject(error);
      }
    );

 
  }, [logOut,navigate]);

  return [axiosSecure] ;
};

export default useAxiosSecure;
