/* eslint-disable react/prop-types */
import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';

export default function NavDropdown({ navLinks }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <button className="p-2" onClick={() => setOpen((state) => !state)}>
                <CiMenuFries className="text-lg text-gray-300" />
            </button>

            <div className={`absolute transition-all duration-200 px-4 py-2 top-10 flex flex-col stripe-bg gap-1 overflow-hidden border-dashed border rounded-md border-white/40 backdrop-blur-sm ${open ? "right-0 opacity-100 " : "-right-48 opacity-0"}`}>
                {navLinks.map((item) =>
                    <a className="capitalize px-1 md:px-3" href={item.link} key={item.title}>{item.title}</a>
                )}
            </div>
        </div >
    );
}
