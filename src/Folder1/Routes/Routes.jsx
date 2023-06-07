import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../../Folder2/Authentication/Login";



const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      
    ],
    
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }


])
export default router;