import { useEffect, useState } from "react";

const Navbar = () => {
    // const [prevPos, setPrevPos] = useState(0)
    // const [visible, setVisible] = useState(true)

    const links = <>
        <a href='#'>Home</a>
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
    </>

    const navLinks = [
        { title: "home", link: '#' },
        { title: "projects", link: '#projects' },
        { title: "skills", link: '#skills' },
        { title: "about", link: '#about' },
        { title: "contact", link: '#contact' },
    ]

    // useEffect(() => {
    //     function handleScroll() {
    //         let currentPos = window.scrollY
    //         if (prevPos < currentPos) {
    //             setVisible(false)
    //             setPrevPos(currentPos)
    //         } else {
    //             setVisible(true)
    //             setPrevPos(currentPos)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [prevPos])

    return (
        // <div className={`nav sticky ${visible ? '' : 'gone'} z-40 top-1`}>
        <div className={`nav sticky z-40 top-1 flex items-center`}>
            <div className="border-t border-dashed border-white/40 grow"></div>
            <nav className="hidden w-full md:flex  justify-between m-2 items-center p-1 my-1 max-w-[1440px] mx-auto">
                <div
                    className="stripe-bg py-1 gap-3 px-6 hover:bg-white/4 border border-white/40 border-dashed rounded-lg backdrop-blur-sm text-2xl font-bold">
                    SH Fahim
                </div>
                <div className="border-t border-dashed border-white/40 grow"></div>
                <div className="flex stripe-bg gap-2 overflow-hidden border-dashed border rounded-md border-white/40 backdrop-blur-sm">
                    {navLinks.map((item) =>
                        <a className="capitalize px-3" href={item.link} key={item.title}>{item.title}</a>
                    )}
                </div>
            </nav>
            <div className="border-t border-dashed border-white/40 grow"></div>
            {/* mobile navbar */}
            <nav className="block md:hidden border border-[#7a7a7a] justify-between m-1 items-center p-px bg-[#2e2e2ec9] my-1 px-2 rounded-lg drop-shadow-xl shadow-black">
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