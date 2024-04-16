import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ErrorHandle = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div>
            <img className="w-[400px] h-[400px] mx-auto" src="https://i.ibb.co/0CkT2pS/404-error.jpg" alt="" />
            <div className="">
                <Helmet>
                    <title>
                        DH | 404 Error
                    </title>
                </Helmet>

                <div className="text-center mt-2">
                    <button onClick={handleNavigate} className="btn btn-secondary">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorHandle;