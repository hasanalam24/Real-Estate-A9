import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import 'animate.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [showPass, setShowPass] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        const { email, password } = data
        console.log(data)
        signInUser(email, password)
            .then(result => {
                if (result.user) {
                    navigate(location?.state || '/')

                }
            })
            .catch(error => {
                console.log(error.message)
            })
        if (email && password) {
            toast("Login Successfully");
        }

    }

    const handleLogin = allProvider => {
        allProvider()
            .then(result => {
                if (result.user) {
                    navigate(location?.state || '/')

                }
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="bg-base-200 flex flex-col lg:flex-row lg:gap-20 lg:w-[90%]  mx-auto  p-8 ">
            <Helmet>
                <title>
                    Login
                </title>
            </Helmet>

            <div className="lg:w-[40%] flex items-center justify-center animate__animated animate__backInRight mt-8">
                <img src="/public/LoginPage.png" alt="" />
            </div>

            <div className=" shrink-0 shadow-2xl  animate__animated animate__backInLeft lg:w-[40%] p-2">
                <h1 className="text-center text-2xl font-semibold">Please Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered w-full"
                                {...register("password", { required: true })}

                            />
                            <span className="absolute top-4 right-3" onClick={() => setShowPass(!showPass)}>

                                {
                                    showPass ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>
                                }
                            </span>
                        </div>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary font-semibold">Login</button>
                    </div>
                    <ToastContainer />
                </form>
                <div className="p-4">
                    <p>You have an account? Please
                        <Link to='/register' className="text-green-600"> Register</Link>
                    </p>
                </div>
                <div className="flex justify-between items-center p-4">
                    <div>
                        <button onClick={() => handleLogin(googleLogin)} className="btn btn-primary">Google</button>
                    </div>
                    <div>
                        <button onClick={() => handleLogin(githubLogin)} className="btn btn-primary">Github</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Login;