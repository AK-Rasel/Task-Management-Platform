
import { Link, useNavigate, useLocation} from 'react-router-dom';
// import {useNavigate,} from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../../Auth/AuthProvider';
import GoogleLogin from '../GoogleLogin';
import toast from 'react-hot-toast';

// import useAuthContext from '../../../Hooks/AuthContext/useAuthContext';

// import useAxiosOpen from '../../../Hooks/AxiosOpen/useAxiosOpen';
// import toast from 'react-hot-toast';
// import useAxiosOpen from '../../Hook/useAxiosOpen';
// import useAuth from '../../Hook/useAuth';

// const imgHostingKey = import.meta.env.VITE_Image_Hosting_KEY;
// const imgHosting_api = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
const Register = () => {


    // const axiosOpen = useAxiosOpen()
    // const { googleLogin } = useContext(AuthContext)
    const {createUserEmailAndPassword} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = async (data) => {
        console.log(data.email, data.password)
        // const imageFile = { image: data.userImg[0] }
        // const res = await axiosOpen.post(imgHosting_api, imageFile, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // });
        // console.log(res.data)
        createUserEmailAndPassword(data.email, data.password)
            .then(() => {
                // updateUser(data.name, res.data.data.display_url)
                // const loginUser = result.user
                // console.log(loginUser)
                // const userInfo = {
                //     name: data.name,
                //     email: data.email,
                //     image: res.data.data.display_url,
                //     role: data.role,
                //     phonNumber:data.phonNumber
                // }
                // console.log(userInfo)
                // axiosOpen.post("/users", userInfo)
                //     .then(res => {
                //         if (res.data.insertedId) {
                //             console.log('user add data base')
                            navigate(from, { replace: true })
                            // navigate('/')
                            toast.success("Register Successes Fully");
                //         }
                //     })
            }).catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }



    
    return (

        <div className="h-screen flex items-center">

            {/* Hero */}
            <div className="container m-auto   relative overflow-hidden">
                <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl justify-center flex md:py-20 lg:py-32 md:px-8">
                    <div className="md:pe-8 md:w-1/2 xl:pe-0 xl:w-5/12">
                        <div className="text-center">
                            {/* Title */}
                            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight ">
                                Register
                            </h1>

                            <p className="mt-2 text-sm ">
                                Already have an account?<Link
                                    className="text-[#F5AB35] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 "
                                    to={'/login'}
                                >
                                    Login
                                </Link>
                            </p>
                            {/* End Title */}
                        </div>
                        {/* google */}
                        <div className="mt-8 grid">
                            <GoogleLogin/>
                        </div>
                        <div className="py-6 flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:me-6 after:flex-[1_1_0%] after:border-t after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                            Or
                        </div>
                        {/* Form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* name */}
                            <div className="mb-4">
                                <label
                                    htmlFor="hs-hero-name-2"
                                    className="block text-sm font-medium dark:text-white "
                                >
                                    <span className="sr-only">Full name</span>
                                </label>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    id="hs-hero-name-2"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  border"
                                    placeholder="Full name"
                                />

                                {errors.name && <span>Name is required</span>}
                            </div>

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
                                    {...register("password", {
                                        required: true,
                                        pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                                        minLength: 6,



                                    })}
                                    type="password"
                                    id="hs-hero-password-2"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm border "
                                    placeholder="Password"
                                />
                                {errors.password?.type === "required" && (
                                    <p role="alert">Password  is required</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p role="alert">Must contain at least one number and one uppercase and lowercase letter</p>
                                )}


                                {errors.password?.type === "minLength" && (
                                    <p role="alert">Password must contain last 6 characters</p>
                                )}


                            </div>
                            {/* input img */}
                            
                            {/* <div className="mb-4">
                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input
                                        {...register('userImg', { required: true })}
                                        type="file"
                                        className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold
file:bg-[#F5AB35] file:text-white

"/>
                                </label>
                                {errors.userImg && <span>This is required</span>}
                            </div> */}
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

export default Register;