import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateProfile = () => {
    const { updateUserProfile, user } = useContext(AuthContext)
    const [Value, setValue] = useState()

    const handleChange = e => {
        setValue(e.targer.value)
    }

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
            .then(() => {

                toast("Profile Updated Succesfully")

            })
            .catch(error => {
                console.log(error.message)

            })
    }

    return (
        <div className="relative">
            <Helmet>
                <title>
                    Dream House | Update Profile
                </title>
            </Helmet>
            <img className="h-[400px] w-full" src="https://i.ibb.co/SNGT9By/vecteezy-blurred-water-background-2030333.jpg" alt="" />
            <div className="w-3/4 lg:w-1/3 mb-5 mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">

                <div className="shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleChange} defaultValue={user.displayName} value={Value} type="text" className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input onChange={handleChange} defaultValue={user.photoURL} value={Value} type="text" className="input input-bordered"
                                {...register("image", { required: true })}
                            />
                            {errors.image && <span className='text-red-500'>This field is required</span>}

                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary font-semibold">Save Change</button>
                        </div>

                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;