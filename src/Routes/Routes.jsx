import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Home/Login";
import Clients from "../Pages/Contact/Clients";
import About from "../Pages/About/About";

import Details from "../Components/Details/Details";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

import ErrorHandle from "../Components/ErrorHandle/ErrorHandle";
import UpdateProfile from "../Pages/Profile/UpdateProfile";


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
                path: '/updateprofile',
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
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
                path: '/clients',
                element: <Clients></Clients>,
                loader: () => fetch('/clientsData.json')
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);

export default router;