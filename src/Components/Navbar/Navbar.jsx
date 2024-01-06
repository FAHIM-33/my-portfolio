import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
    <NavLink to='/about'>About</NavLink>
    </>

    return (
        <nav className="sticky top-1 flex justify-between items-center p-1 bg-[#6d6d6d63] my-1 mx-2 rounded-lg drop-shadow-xl backdrop-blur-sm shadow-black ">
            <div className="text-4xl font-semibold">
                SH Fahim
            </div>
            <div className="flex gap-2 text-xl">
                {links}
            </div>
        </nav>
    );
};

export default Navbar;