import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Navber = () => {
    const { logOut, user } = useContext(AuthContext)
    const navigate = useNavigate()
    const LogOutHandel = () => {
        logOut()
            .then(() => {
                navigate("/login")
                toast.success('Logout Succsess')

            })
            .catch(error => console.error(error))
    }

    const allLink = <>

        <li className="font-semibold text-lg"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#2563DC] underline link link-hover" : ""
            }
        >
            Home
        </NavLink></li>
        <li className="font-semibold text-lg"><NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#2563DC] underline link link-hover" : ""
            }
        >
            Dashboard
        </NavLink></li>
        <li className="font-semibold text-lg"><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#2563DC] underline link link-hover" : ""
            }
        >
           About
        </NavLink></li>
        <li className="font-semibold text-lg"><NavLink
            to="/contactUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#2563DC] underline link link-hover" : ""
            }
        >
           Contact us
        </NavLink></li>





    </>




    return (
        <div className=" bg-base-100 ">
            <div className="mx-auto max-w-[1280px] navbar">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {allLink}
                        </ul>
                    </div>
                    <Link to='/' className="font-bold text-2xl">TaskMasterHub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allLink}
                    </ul>
                </div>

                <div className="navbar-end gap-5">
                    {
                        user ? <>

                            <div className=" rounded-full  ring-offset-base-100 ring-offset-2 w-10 ">

                                <img
                                    className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"

                                    src={user.photoURL}
                                    alt="Image Description"
                                />
                            </div>
                            <button onClick={LogOutHandel} className="font-semibold">Logout</button>
                        </> : <>
                            <button className="btn"><Link to='/login'>Login</Link></button>
                            <button className="btn"><Link to='/register'>Register</Link></button>
                        </>
                    }

                </div>
            </div>

        </div>
    );
};

export default Navber;