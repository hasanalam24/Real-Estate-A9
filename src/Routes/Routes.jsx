import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Login from "../Pages/Home/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: '/UpdateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
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