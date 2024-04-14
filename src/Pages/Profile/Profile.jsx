import { useContext, useState } from "react";

import { useForm } from "react-hook-form"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Profile = () => {
    const [showPass, setShowPass] = useState(false)
    const [passError, setPassError] = useState()
    const { createAccount, updateProfileUser, user } = useContext(AuthContext)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const { email, password, image, fullName } = data
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

        //create user and update user
        createAccount(email, password)
            .then(() => {
                updateProfileUser(fullName, image)
                    .then(() => {

                        toast("Profile Updated")
                    })

            })
            .catch(error => {
                console.log(error.message)

            })


    }

    return (
        <div className="w-3/4 lg:w-1/3 mx-auto  bg-base-200">
            <Helmet>
                <title>
                    Profile
                </title>
            </Helmet>

            <div className=" ">

                <div className=" shrink-0 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user.displayName} className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder={user.email} className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" value={user.photoURL} className="input input-bordered"
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

                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary font-semibold">Save Change</button>
                        </div>
                        <ToastContainer />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Profile;