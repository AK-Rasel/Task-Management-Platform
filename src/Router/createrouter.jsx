import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login&registration/Login/Login";
import Register from "../Pages/Login&registration/Registration/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivetRouter from "../Provider/PrivetRouter";
import ContactUs from "../Pages/ContactUs/ContactUs";

const createrouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [{
        path:'/',
        element:<Home/>
      },{
        path:'contactUs',
        element:<ContactUs/>
      }]
    },{
        path:'login',
        element:<Login/>
    }
    ,{
        path:'register',
        element:<Register/>
    },{
      path: 'dashboard',
      element: <PrivetRouter><Dashboard/></PrivetRouter>
    }
  ]);
  export default createrouter;