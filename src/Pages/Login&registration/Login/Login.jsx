/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
// import useAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../GoogleLogin";
import { useContext,  } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import useAxiosOpen from "../../Hook/useAxiosOpen";


const Login = () => {
    // const axiosOpen = useAxiosOpen()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { loginEmailWithPassword } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // const [errorSee, setErrorSee] = useState()
    const from = location.state?.from?.pathname || '/'
    const onSubmit = data => {
        console.log(data.email, data.password)
        loginEmailWithPassword(data.email, data.password)
            .then(result => {
                const loginUser = result.user
                console.log(loginUser)
                
                // navigate('/')
                // const userInfo = {
                //     email: result.user?.email,
                //     name: result.user?.displayName
                // }
                // axiosOpen.post("/users", userInfo)
                //     .then(res => {
                //         console.log(res.data, 'user login add')
                //         // navigate(from,{replace:true})
                        navigate(from, { replace: true })
                //     })


                // navigate(from, { replace: true })
                toast.success('Login success')
            })
            .catch(error => {
                console.log(error.message)
                // setErrorSee(error.message)
                toast.error(error.message)
            })
    }

    // const googleHandle = () => {
    //     googleLogin()
    //         .then(result => {
    //             const userInfo = {
    //                 email: result.user?.email,
    //                 name: result.user?.displayName
    //             }
    //             axiosOpen.post("/users", userInfo)
    //                 .then(res => {
    //                     console.log(res.data, 'user login add')
    //                     // navigate(from,{replace:true})
    //                     navigate(from, { replace: true })
    //                 })


    //             toast.success('Login success')
    //         })
    //         .catch(error => {
    //             toast.error(error.message)
    //         })
    // }
    return (
        <div className="h-screen flex items-center">

            {/* Hero */}
            <div className="container m-auto   relative overflow-hidden">
                <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl justify-center flex md:py-20 lg:py-32 md:px-8">
                    <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
                        <div className="text-center">
                            {/* Title */}
                            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight ">
                                Login
                            </h1>

                            <p className="mt-2 text-sm ">
                                Don't have an account yet?
                                <Link
                                    className="text-[#2563DC] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 "
                                    to={'/register'}
                                >
                                    Create Account
                                </Link>
                            </p>
                            {/* End Title */}
                        </div>
                        <div className="mt-8 grid">
                            {/* Google */}
                           <GoogleLogin/>
                        </div>
                        <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                            Or
                        </div>
                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="mb-4">
                                <label
                                    htmlFor="hs-hero-email-2"
                                    className="block text-sm font-medium dark:text-white"
                                >
                                    <span className="sr-only">Email address</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    id="hs-hero-email-2"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border"
                                    placeholder="Email address"
                                />
                                {errors.email && <span className="text-red-500 text-sm">*Email is required</span>}
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="hs-hero-password-2"
                                    className="block text-sm font-medium dark:text-white"
                                >
                                    <span className="sr-only">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    id="hs-hero-password-2"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border"
                                    placeholder="Password"
                                />
                                {errors.password && <span className="text-red-500 text-sm">*Password is required</span>}
                            </div>
                            {/* <p>{errorSee}</p> */}
                            <div className="grid">
                                <button
                                    type="submit"
                                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#2563DC] text-white "
                                >
                                    Login
                                </button>

                            </div>
                        </form>
                        {/* End Form */}
                    </div>

                </div>
                
                {/* End Col */}
            </div>
            {/* End Hero */}


        </div>
    );
};

export default Login;