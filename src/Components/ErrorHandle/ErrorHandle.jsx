import { useNavigate } from "react-router-dom";
import errorImage from "../../../public/download.png"

const ErrorHandle = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div className="absolute top-[40%] left-[40%]">
            <img src={errorImage} alt="" />
            <div className="text-center mt-2">
                <button onClick={handleNavigate} className="btn">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorHandle;