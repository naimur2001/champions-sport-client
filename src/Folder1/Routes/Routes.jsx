import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../../Folder2/Authentication/Login";
import Signup from "../../Folder2/Authentication/Signup";
import Dashboard from "../../Folder2/Dashboard/Dashboard";
import Instructor from "../../Folder2/NavsItem/Instructor";
import Class from "../../Folder2/NavsItem/Class";
import ManageUser from "../../Folder2/Dashboard/ManageUser";
import ManageClass from "../../Folder2/Dashboard/ManageClass";
import AddClass from "../../Folder2/Dashboard/AddClass";
import MyClass from "../../Folder2/Dashboard/MyClass";
import EnrolledClass from "../../Folder2/Dashboard/EnrolledClass";
import SelectedClass from "../../Folder2/Dashboard/SelectedClass";
import Payment from "../../Folder2/Dashboard/Payment";



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
       path: 'instructors',
       element: <Instructor></Instructor>
      },
      {
        path: 'classes',
        element: <Class></Class>
      }
      
    ],
    
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'manageuser',
        element: <ManageUser></ManageUser>
      },
      {
        path: 'manageclass',
        element: <ManageClass></ManageClass>
      },
      {
         path: 'addclass',
         element: <AddClass></AddClass>
      },
      {
         path: 'myclass',
         element: <MyClass></MyClass>
      },
      {
         path: 'enrollclass',
         element: <EnrolledClass></EnrolledClass>
      },
      {
         path: 'selectclass',
         element: <SelectedClass></SelectedClass>
      },
      {
         path: 'payment',
         element: <Payment></Payment>
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }


])
export default router;