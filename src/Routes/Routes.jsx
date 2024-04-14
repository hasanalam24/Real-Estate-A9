import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Login from "../Pages/Home/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

import Details from "../Components/Details/Details";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import ErrorHandle from "../Components/ErrorHandle/ErrorHandle";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorHandle></ErrorHandle>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/details/:search',
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/UpdateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);

export default router;