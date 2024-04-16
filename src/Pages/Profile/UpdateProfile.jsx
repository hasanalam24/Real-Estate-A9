import { useContext, useState } from "react";

import { useForm } from "react-hook-form"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

import { AuthContext } from "../../AuthProvider/AuthProvider";


const UpdateProfile = () => {

    const { updateUserProfile, user } = useContext(AuthContext)
    const [changeValue, setChangeValue] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        const { name, image } = data
        console.log(data)

        //create user and update user

        updateUserProfile(name, image)
            .then((result) => {

                toast("Profile Updated")
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)

            })
    }

    const handleChange = e => {
        setChangeValue(e.targer.value)
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
                            <input onChange={handleChange} defaultValue={user.displayName} value={changeValue} type="text" className="input input-bordered"
                                {...register("name", { required: true })}
                            />

                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input onChange={handleChange} defaultValue={user.photoURL} value={changeValue} type="text" className="input input-bordered"
                                {...register("image", { required: true })}
                            />
                            {errors.image && <span className='text-red-500'>This field is required</span>}

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

export default UpdateProfile;