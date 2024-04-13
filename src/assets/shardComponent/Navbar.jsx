import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContest } from "../layout/AuthProvider";
import 'animate.css';
const Navbar = () => {

    const links = <>

        <NavLink
            to='/' className={({ isActive }) => isActive ? 'text-[16px] text-green-500 font-medium btn bg-white  border-green-500 mr-3' : 'text-[16px] font-medium btn  border-green-500 mr-3 bg-white'}>
            Home
        </NavLink>


        <NavLink
            to="/profile" className={({ isActive }) => isActive ? 'text-[16px] text-green-500 font-medium btn  border-green-500 mr-3 bg-white' : 'text-[16px] font-medium btn border-green-400 mr-3 bg-white'} >
            Updated profile
        </NavLink>


        <NavLink
            to='/about' className={({ isActive }) => isActive ? 'text-[16px] text-green-500 font-medium btn   border-green-500 mr-3 bg-white' : 'text-[16px] font-medium btn border-green-400 mr-3 bg-white'} >
            About Us
        </NavLink>

    </>
    const { user, logout } = useContext(authContest)
    console.log(user)

    const handlelogout = () => {
        logout()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="navbar bg-teal-500 rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className=" font-bold text-3xl ">Dreams <span className="font-bold text-3xl text-white animate__animated animate__fadeInRightBig">Home</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="tooltip mr-4 tooltip-bottom" data-tip={user.email}>

                            <button className="">  <div tabIndex={0} role="button" className=" avatar">
                                <div className="w-[45px] rounded-full">
                                    <img alt="" src={user.photoURL} />
                                </div>
                            </div></button>
                        </div>

                        <button onClick={handlelogout} className="btn">Logout </button>
                    </> : <Link to="/login">  <a className="btn">Login</a> </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;