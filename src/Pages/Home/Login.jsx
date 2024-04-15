import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import 'animate.css';

const Login = () => {

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


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
        <div className="w-3/4 lg:w-1/3 mx-auto bg-base-200 animate__animated animate__zoomInDown">
            <Helmet>
                <title>
                    Login
                </title>
            </Helmet>



            <div className=" shrink-0 shadow-2xl bg-base-100 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                        <input type="password" placeholder="password" className="input input-bordered"
                            {...register("password", { required: true })}
                        />
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