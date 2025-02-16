import Banner from "./Banner";
import Projects from "./Porjects"; // Fix typo: should be "Projects"
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { FaDownload } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

AOS.init();

const Home = () => {

    const handleLoading = () => {
        toast('Downloading CV...')
    }

    return (
        <div className="relative border-0">
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        background: '#222',
                        color: "white",
                        border: '1px solid gray'
                    },
                }}
            />
            <Banner />
            <div className="">
                <a
                    onClick={handleLoading}
                    // href="https://drive.google.com/uc?export=download&id=1rneq91EUEkFclHsDJ9eLXEmjs0ujDkju"
                    href="/SH-Fahim-CV.pdf" download='Shahriyer_Hossain_Fahim_CV.pdf'
                    className="w-fit flex gap-2 items-center text-lg md:text-2xl bg-gray-200 duration-200  hover:bg-white hover:scale-105 text-prim mx-auto mt-12 p-2 md:p-4 rounded-md"
                >
                    <FaDownload />
                    Download CV
                </a>

            </div>
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />

        </div>
    );
};

export default Home;
