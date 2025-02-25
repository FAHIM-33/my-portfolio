import Details from "../Components/Details";
import SecHead from "../Components/SecHead";

const About = () => {
    return (
        <section className="cont" id="about">
            <SecHead text='About me'></SecHead>
            <p className="md:w-4/5 px-2 md:px-0 text-low text-center mx-auto  md:my-16" data-aos='slide-up'>
                I, am a developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Delivering work within time which meets clients requirements is my priority.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-center p-4"> 
                <Details title='Name'>SH Fahim</Details>
                <Details title='Email'>shahriyerfahim2012@gmail.com</Details>
                <Details title='Date of birth'>December 2, 2001</Details>
                <Details title='From'>West Bengal, Bangladesh</Details>
            </div>

        </section>
    );
};

export default About;