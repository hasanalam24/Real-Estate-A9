import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        const { email, password } = data
        signInUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">

                <div className="card shrink-0 shadow-2xl bg-base-100">
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="p-4">
                        <p>You have an account? Please
                            <Link to='/register' className="text-green-600"> Register</Link>
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div>
                            <button onClick={() => googleLogin()} className="btn btn-primary">Google</button>
                        </div>
                        <div>
                            <button onClick={() => githubLogin()} className="btn btn-primary">Github</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;