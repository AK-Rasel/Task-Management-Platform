import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&registration/Login/Login";
import Register from "../Pages/Login&registration/Registration/Register";

const createrouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [{
        path:'/',
        element:<Home/>
      }]
    },{
        path:'login',
        element:<Login/>
    }
    ,{
        path:'register',
        element:<Register/>
    }
  ]);
  export default createrouter;