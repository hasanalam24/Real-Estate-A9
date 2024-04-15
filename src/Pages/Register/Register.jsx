import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const [passError, setPassError] = useState()

    const { createAccount } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const location = useLocation()

    const onSubmit = (data) => {
        const { email, password } = data
        // console.log(data)
        if (password.length < 6) {
            setPassError('Password should be at least 6 characters or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setPassError('Your Password should be at least one Uppercase characters')
            return
        }
        else if (!/[a-z]/.test(password)) {
            setPassError('Your Password should be at least one Lowercase characters')
            return
        }
        //create account
        createAccount(email, password)
            .then(result => {

                if (result.user) {
                    navigate(location?.state)
                    toast("Your registratiion Successfully")

                }
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)

            })


    }


    return (
        <div className="w-3/4 lg:w-1/3 mx-auto  bg-base-200 animate__animated animate__slideInUp">
            <Helmet>
                <title>
                    Register
                </title>
            </Helmet>

            <div className=" ">

                <div className=" shrink-0 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="photo" className="input input-bordered"
                                {...register("photo", { required: true })}
                            />
                            {errors.photo && <span className='text-red-500'>This field is required</span>}

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
                            {/* {errors.password && <span className='text-red-500'>This field is required</span>} */}
                            <span className="text-red-500">{passError}</span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary font-semibold">Register</button>
                        </div>
                        <ToastContainer />
                    </form>
                    <div className="p-4">
                        <p>You have an account? Please
                            <Link to='/login' className="text-green-600"> Login</Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;