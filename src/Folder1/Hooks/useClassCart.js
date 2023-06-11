import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Folder2/Authentication/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useClassCart= ()=>{
const {user}=useContext(AuthContext);
const [axiosSecure]=useAxiosSecure()

const {  data:classcart=[],refetch } = useQuery({
  queryKey: ['classcart',user?.email], 
  queryFn: async () =>{
    const res = await axiosSecure.get('/classcart', {
      params: {
        email: user?.email,
      },
    });
    return res.data;
  }   
})
return [classcart,refetch]
}

export default useClassCart;