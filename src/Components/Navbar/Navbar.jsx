import { useEffect, useState } from "react";

const Navbar = () => {
    const [prevPos, setPrevPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const links = <>
        <a href='#'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='/contact'>Contact</a>
        <a href='/about'>About</a>
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
        <nav className={`sticky ${visible ? '' : 'gone'} z-40 top-1 flex justify-between m-2 items-center p-1 bg-[#6d6d6d63] my-1 px-4 rounded-lg drop-shadow-xl backdrop-blur-md shadow-black `}>
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