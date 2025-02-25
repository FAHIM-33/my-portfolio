/* eslint-disable react/prop-types */
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useRef, useState } from 'react';

export default function NavDropdown({ navLinks }) {
    const [open, setOpen] = useState(false)
    const dropRef = useRef(null)


    function handleOutclick(e) {

        if (dropRef.current && !dropRef.current.contains(e.target)) {
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutclick)
        return () => document.removeEventListener('click', handleOutclick)
    }, [])

    return (
        <div
            ref={dropRef}
            className="relative">
            <button className="p-2" onClick={() => setOpen((state) => !state)}>
                <CiMenuFries className="text-lg text-gray-300" />
            </button>


            <div

                className={` absolute border-dashed border transition-all right-0 duration-200 py-2 top-10 flex flex-col bg-[#0000009f] gap-1 overflow-hidden  rounded-md border-white/40  
                ${open ? "h-40 " : "h-0 pointer-events-none border-0 py-0"}`}>
                {navLinks.map((item) =>
                    <a className="capitalize px-4 md:px-3" href={item.link} key={item.title}>{item.title}</a>
                )}
            </div>
        </div >
    );
}
