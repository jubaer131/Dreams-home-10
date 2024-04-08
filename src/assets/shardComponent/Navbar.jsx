import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>

        <NavLink
            to='/' className={({ isActive }) => isActive ? 'text-[16px] text-green-500 font-medium btn btn-outline btn-success border-green-500 mr-3' : 'text-[16px] font-medium btn  border-green-500 mr-3'}>
            Home
        </NavLink>


        <NavLink
            to='/books' className={({ isActive }) => isActive ? 'text-[16px] text-green-500 font-medium btn btn-outline btn-success border-green-500 mr-3' : 'text-[16px] font-medium btn border-green-500 mr-3'} >
            Updated profile
        </NavLink>


        <NavLink
            to='/pages' className={({ isActive }) => isActive ? 'text-[16px] text-green-500 font-medium btn btn-outline btn-success border-green-500 mr-3' : 'text-[16px] font-medium btn border-green-500 mr-3'} >
            Pages To Read
        </NavLink>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className=" font-bold text-3xl">Dreems Home</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;