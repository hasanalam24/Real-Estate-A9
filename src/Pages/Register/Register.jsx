import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {

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
        createAccount(email, password)
            .then(result => {
                if (result.user) {
                    navigate(location?.state)
                }
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    // console.log(watch("example"))

    return (
        <div className="w-3/4 lg:w-1/3 mx-auto  bg-base-200">
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
                            <input type="text" placeholder="password" className="input input-bordered"
                                {...register("password", { required: true })}

                            />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary font-semibold">Register</button>
                        </div>
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