import { useContext } from "react";
import { AuthContext } from "../../Folder2/Authentication/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
const {user}=useContext(AuthContext);
const [axiosSecure]=useAxiosSecure();
const {data: role }=useQuery({
  queryKey: ['role',user?.email],
  queryFn: async ()=>{
    const res=await 
    axiosSecure.get(`/users/admin/${user?.email}`);
    return res.data.role
}})
return [role]
};

export default useAdmin;
