import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../../Folder2/Authentication/Login";
import Signup from "../../Folder2/Authentication/Signup";
import Dashboard from "../../Folder2/Dashboard/Dashboard";
import ManageUser from "../../Folder2/Dashboard/ManageUser";
import ManageClass from "../../Folder2/Dashboard/ManageClass";
import AddClass from "../../Folder2/Dashboard/AddClass";
import MyClass from "../../Folder2/Dashboard/MyClass";
import EnrolledClass from "../../Folder2/Dashboard/EnrolledClass";
import SelectedClass from "../../Folder2/Dashboard/SelectedClass";
import Payment from "../../Folder2/Dashboard/Payment";
import Class from "../../Folder2/Class";
import Instructor from "../../Folder2/Instructor";
import InstructorRoute from "../../Folder2/Dashboard/InstructorRoute";
import AdminRoute from "../../Folder2/Dashboard/AdminRoute";
import StudentRoute from "../../Folder2/Dashboard/StudentRoute";
import PrivateRoute from "../../Folder2/PrivateRoute";
import PaymentHistory from "../../Folder2/Dashboard/PaymentHistory";
import ContactUs from "../../Folder2/ContactUs";
import AboutUs from "../../Folder2/AboutUs";



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
       element:<Instructor></Instructor>
      },
      {
        path: 'classes',
        element: <Class></Class>
      },
      {
        path: 'contactus',
        element:<ContactUs></ContactUs>
      },
      {
        path: 'aboutus',
        element: <AboutUs></AboutUs>
      }
      
    ],
    
  },
  {
    path: 'dashboard',
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children: [
      {
        path: 'manageuser',
        element: <AdminRoute>
          <ManageUser></ManageUser>
        </AdminRoute>
      },
      {
        path: 'manageclass',
        element: <AdminRoute>
          <ManageClass></ManageClass>
        </AdminRoute>
      },
      {
         path: 'addclass',
         element: <InstructorRoute>
<AddClass></AddClass>

         </InstructorRoute>
      },
      {
         path: 'myclass',
         element: <InstructorRoute>
          <MyClass></MyClass>
         </InstructorRoute>
      },
      {
         path: 'enrollclass',
         element: <StudentRoute>
          <EnrolledClass></EnrolledClass>
         </StudentRoute>
      },
      {
         path: 'selectclass',
         element: <StudentRoute>
          <SelectedClass></SelectedClass>
         </StudentRoute>
      },
      {
         path: 'payment',
         element: <Payment></Payment>
      },
      {
         path: 'paymenthistory',
         element: <StudentRoute>
          <PaymentHistory></PaymentHistory>
         </StudentRoute>
      },
      
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }


])
export default router;