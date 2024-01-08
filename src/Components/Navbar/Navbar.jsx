import { useEffect, useState } from "react";

const Navbar = () => {
    const [prevPos, setPrevPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const links = <>
        <a href='#'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
    </>

    useEffect(() => {
        function handleScroll() {
            let currentPos = window.scrollY
            if (prevPos < currentPos) {
                setVisible(false)
                setPrevPos(currentPos)
            } else {
                setVisible(true)
                setPrevPos(currentPos)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevPos])

    return (
        <div className={`nav sticky ${visible ? '' : 'gone'} z-40 top-1`}>
            <nav className="hidden md:flex  justify-between m-2 items-center p-1 bg-[#6d6d6d63] my-1 px-4 rounded-lg drop-shadow-xl backdrop-blur-md shadow-black">
                <div className="text-4xl font-semibold">
                    SH Fahim
                </div>
                <div className="flex gap-2 text-xl">
                    {links}
                </div>
            </nav>

            {/* mobile navbar */}
            <nav className="block md:hidden  justify-between m-1 items-center p-px bg-[#6d6d6d63] my-1 px-2 rounded-lg drop-shadow-xl backdrop-blur-md shadow-black">
                <div className="text-2xl whitespace-nowrap font-semibold">
                    SH Fahim
                </div>
                <div className="flex gap-2 justify-end">
                    {links}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;