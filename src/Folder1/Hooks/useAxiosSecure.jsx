import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Folder2/Authentication/AuthProvider';

export const axiosSecure = axios.create({
  baseURL: 'https://champion-sports-server.vercel.app',
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

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
        if (error.response) {
          const { status } = error.response;
          if (status === 403 || status === 401 || status === 402) {
            logOut();
            navigate('/login');
          }
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
