/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
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
    // const { googleLogin, loginEmailWithPassword } = useAuth()
    // const navigate = useNavigate()
    // const location = useLocation()
    // const [errorSee, setErrorSee] = useState()
    // const from = location.state?.from?.pathname || '/'
    const onSubmit = data => {
        console.log(data.email, data.password)
        // loginEmailWithPassword(data.email, data.password)
        //     .then(result => {
        //         const loginUser = result.user
        //         console.log(loginUser)
        //         const userInfo = {
        //             email: result.user?.email,
        //             name: result.user?.displayName
        //         }
        //         axiosOpen.post("/users", userInfo)
        //             .then(res => {
        //                 console.log(res.data, 'user login add')
        //                 // navigate(from,{replace:true})
        //                 navigate(from, { replace: true })
        //             })


                // navigate(from, { replace: true })
    //             toast.success('Login success')
    //         })
    //         .catch(error => {
    //             setErrorSee(error.message)
    //             toast.error(error.message)
    //         })
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
                                    className="text-[#F5AB35] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 "
                                    to={'/register'}
                                >
                                    Create Account
                                </Link>
                            </p>
                            {/* End Title */}
                        </div>
                        <div className="mt-8 grid">
                            <button
                                // onClick={googleHandle}
                                type="button"
                                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none   "
                            >
                                <svg
                                    className="w-4 h-auto"
                                    width={46}
                                    height={47}
                                    viewBox="0 0 46 47"
                                    fill="none"
                                >
                                    <path
                                        d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                        fill="#EB4335"
                                    />
                                </svg>
                                Sign up with Google
                            </button>
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
                                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#F5AB35] text-white "
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