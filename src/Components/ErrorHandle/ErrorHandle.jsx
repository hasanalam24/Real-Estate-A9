import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const ErrorHandle = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div className="absolute top-[40%] left-[40%]">
            <Helmet>
                <title>
                    404 Error
                </title>
            </Helmet>
            <h1>This page is Error</h1>
            <div className="text-center mt-2">
                <button onClick={handleNavigate} className="btn">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorHandle;