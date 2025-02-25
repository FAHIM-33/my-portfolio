// import { useEffect, useState } from "react";

import NavDropdown from "./NavDropdown";

const Navbar = () => {

    const navLinks = [
        { title: "home", link: '#' },
        { title: "projects", link: '#projects' },
        { title: "skills", link: '#skills' },
        { title: "about", link: '#about' },
        { title: "contact", link: '#contact' },
    ]


    return (
        <div className={`nav sticky z-40 top-1 `}>
            {/* PC Nav */}
            <div className="md:flex hidden items-center">
                <div className="border-t border-dashed border-white/40 grow"></div>
                <nav className="w-[95%] flex  justify-between m-2 items-center p-1 my-1 max-w-[1440px] mx-auto">
                    <div
                        className="stripe-bg py-1 gap-3 px-6 hover:bg-white/4 border border-white/40 border-dashed rounded-lg backdrop-blur-sm text-lg md:text-2xl font-bold">
                        SH Fahim
                    </div>
                    <div className="border-t border-dashed border-white/40 grow"></div>
                    <div className="flex stripe-bg md:gap-2 gap-1 overflow-hidden border-dashed border rounded-md border-white/40 backdrop-blur-sm">
                        {navLinks.map((item) =>
                            <a className="capitalize px-1 md:px-3" href={item.link} key={item.title}>{item.title}</a>
                        )}
                    </div>
                </nav>
                <div className="border-t border-dashed border-white/40 grow"></div>
            </div>
            {/* mobile navbar */}
            <div className=" md:hidden w-full flex items-center">
                <div className="border-t border-dashed border-white/40 grow"></div>
                <nav className="w-[95%] flex  justify-between m-2 items-center p-1 my-1 max-w-[1440px] mx-auto">
                    <div
                        className="stripe-bg py-1 gap-3 px-6 hover:bg-white/4 border border-white/40 border-dashed rounded-lg backdrop-blur-sm text-lg md:text-2xl font-bold">
                        SH Fahim
                    </div>
                    <div className="border-t border-dashed border-white/40 grow"></div>
                    <div className="flex stripe-bg md:gap-2 gap-1 border-dashed border rounded-md border-white/40 backdrop-blur-sm">
                        
                        <NavDropdown navLinks={navLinks}/>
                    </div>
                </nav>
                <div className="border-t border-dashed border-white/40 grow"></div>
            </div>
        </div>
    );
};

export default Navbar;