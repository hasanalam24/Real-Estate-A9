import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <Helmet>
                <title>
                    Profile
                </title>
            </Helmet>
        </div>
    );
};

export default Profile;