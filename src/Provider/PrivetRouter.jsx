/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";



const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading ) {
        return <div className="skeleton w-32 h-32"></div>
    }
    if (user) {
        return children
    }
    return <Navigate to={"/login"} state={{from: location}} replace ></Navigate>
};

export default PrivetRouter;