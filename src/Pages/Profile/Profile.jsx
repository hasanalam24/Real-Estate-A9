import { useContext, useState } from "react";

import { useForm } from "react-hook-form"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

import { AuthContext } from "../../AuthProvider/AuthProvider";


const Profile = () => {

    const { updateProfileUser } = useContext(AuthContext)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const { name, photo } = data


        //create user and update user

        updateProfileUser(name, photo)
            .then((result) => {

                toast("Profile Updated")
                console.log(result.user)
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
                            <input type="text" className="input input-bordered"
                                {...register("name", { required: true })}
                            />

                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" className="input input-bordered"
                                {...register("photo", { required: true })}
                            />
                            {errors.photo && <span className='text-red-500'>This field is required</span>}

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