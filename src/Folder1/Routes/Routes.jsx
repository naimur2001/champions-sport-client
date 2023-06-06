import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../Main/Main";



const router=createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>
  },




















{
  path: '*',
  element: <ErrorPage></ErrorPage>
}


])
export default router;