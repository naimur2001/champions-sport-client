import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Main/Main";
import Home from "../Home/Home";



const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>
  },
{
  path: '/',
  element: <Home></Home>
},



















{
  path: '*',
  element: <ErrorPage></ErrorPage>
}


])
export default router;