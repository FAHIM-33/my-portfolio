import Banner from "./Banner";
import Porjects from "./Porjects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
AOS.init();


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            {/* <div className="py-[1000px]"></div> */}
            <Porjects></Porjects>
            <Skills></Skills>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;