import Banner from "./Banner";
import Porjects from "./Porjects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { FaDownload } from "react-icons/fa";
AOS.init();


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div>
                <a href="https://drive.google.com/uc?export=download&id=1sFIV6II4jXQmoeexFTxq-wqDcwymfZjm" 
                className="w-fit flex gap-2 items-center text-lg md:text-2xl bg-gray-200 duration-200 hover:bg-white hover:scale-105 text-prim mx-auto mt-12 p-2 md:p-4 rounded-md" download='SH Fahim resume.pdf' >
                    <FaDownload></FaDownload>
                    Download Resume
                </a>
            </div>
            <Porjects></Porjects>
            <Skills></Skills>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;