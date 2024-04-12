import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const navLinks =

        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/UpdateProfile'>Update Profile</NavLink>
            </li>
            <li>
                <NavLink to='/register'>Register</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>

        </>


    const { signOutInUser, user } = useContext(AuthContext)

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLinks}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Dream House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-12 font-medium text-lg">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end space-x-5">
                {
                    user?.email ? <div className="flex gap-5">

                        <div className="grid w-12 h-12 bg-base-300 place-items-center rounded-full tooltip tooltip-left" data-tip={user.displayName}>

                            <img className="rounded-full" src={user?.photoURL} alt="" />
                        </div>
                        <div>
                            <button onClick={signOutInUser} className="btn btn-secondary font-bold">Log Out</button>
                        </div>
                    </div>
                        :
                        <Link to='/login' >
                            <button className="btn btn-secondary font-bold">Login</button>

                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;