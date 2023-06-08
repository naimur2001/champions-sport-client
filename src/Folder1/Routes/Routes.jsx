import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../../Folder2/Authentication/Login";
import Signup from "../../Folder2/Authentication/Signup";
import Dashboard from "../../Folder2/Dashboard/Dashboard";
import Instructor from "../../Folder2/NavsItem/Instructor";



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
      {
        path:'signup',
        element: <Signup></Signup>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
       path: 'instructors',
       element: <Instructor></Instructor>
      }
      
    ],
    
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }


])
export default router;