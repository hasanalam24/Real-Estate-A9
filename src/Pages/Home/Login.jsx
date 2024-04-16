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
        <div className="relative">
            <Helmet>
                <title>
                    DH | Login
                </title>
            </Helmet>

            <img className="h-[600px] w-full" src="https://i.ibb.co/SNGT9By/vecteezy-blurred-water-background-2030333.jpg" alt="" />

            <div className="w-3/4 lg:w-1/3 mb-5 mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 shrink-0 shadow-2xl animate__animated animate__zoomInDown">
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
                        <button className="btn btn-secondary font-semibold">Login</button>
                    </div>
                    <ToastContainer />
                </form>

                <div className="flex gap-5 items-center p-4">

                    <div onClick={() => handleLogin(googleLogin)} className="w-10 h-10 bg-gray-100 rounded-xl">
                        <img src="https://i.ibb.co/cLDFfkY/google-logo.png" alt="" />

                    </div>

                    <div onClick={() => handleLogin(githubLogin)} className="w-10 h-10 bg-gray-100 rounded-xl">
                        <img src="https://i.ibb.co/Mp0sLB2/github-logo.png" alt="" />

                    </div>

                </div>
                <div className="p-4 flex gap-2">
                    <p>Don't have an account? Please
                        <Link to='/register' className="text-secondary font-semibold"> Register</Link>
                    </p>
                    <p>here</p>
                </div>
            </div>



        </div>
    );
};

export default Login;