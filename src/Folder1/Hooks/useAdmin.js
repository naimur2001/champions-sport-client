import { useContext } from "react";
import { AuthContext } from "../../Folder2/Authentication/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
const {user,loading}=useContext(AuthContext);
const [axiosSecure]=useAxiosSecure();
const {data: isAdmin , isLaoding: isAdminLoading}=useQuery({
  queryKey: ['isAdmin',user?.email],
  enabled: !loading,
  queryFn: async ()=>{
    const res=await 
    axiosSecure.get(`/users/admin/${user?.email}`);
    return res.data.admin
}})
return [isAdmin,isAdminLoading]
};

export default useAdmin;