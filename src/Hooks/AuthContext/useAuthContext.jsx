import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";


const useAuthContext = () => {

   const authContextHook = useContext(AuthContext)
    return authContextHook
};

export default useAuthContext;