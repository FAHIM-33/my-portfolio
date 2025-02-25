import SecHead from "../Components/SecHead";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="cont" id="contact">
            <SecHead text='Contact me'></SecHead>

            <section className="text-high mb-8 mt-12 py-4 border border-low md:mx-0 mx-2 rounded-lg">
                <div className="flex flex-col md:flex-row gap-10">

                    <div className="w-auto md:w-1/2 text-center md:text-right px-4 md:py-4">
                        <h2 className="text-xl lg:text-4xl font-bold mb-8">Let&apos;s talk</h2>
                        <p className="md:text-lg md:w-4/5">Want to contact or have a question?
                            <br />
                            Just put your email & message and I will get back to you as soon as possible</p>
                    </div>

                    <div className="md:w-1/2 px-4 ">

                        <form action="https://formspree.io/f/xjvnvdgk" method='POST' className="flex flex-col gap-6 py-4">
                            <input required type="email" name="email" placeholder="Your Email:" />
                            <textarea required placeholder="Tell me something..." name="message"></textarea>
                            <div className="flex items-center gap-2">
                                <button
                                    className="border-2 border-[#2c9ab6a8] bg-[#37636957] w-fit px-4 py-2 rounded-md duration-200 hover:bg-[#49376957] hover:border-[#552cb6a8] shadow-black"
                                    type="submit">Send</button>
                                <span className="text-cyan-300/60 animate-pulse">No login required!</span>
                            </div>
                        </form>
                        <p className="flex items-center gap-4 font-medium text md:text-2xl"> Social media: <span className="flex gap-4 text-4xl">
                            <a href="https://www.facebook.com/shahriyerhossain.fahim/" title="Go to Facebook profile" target="_blank" rel="noopener noreferrer" >
                                <FaFacebook></FaFacebook>
                            </a>
                            <a href="https://github.com/FAHIM-33" title="Go to GitHub profile" target="_blank" rel="noopener noreferrer" >
                                <FaGithub></FaGithub>
                            </a>
                            <a href="https://www.linkedin.com/in/sh-fahim-1607612ab/" title="Go to LinkedIn profile" target="_blank" rel="noopener noreferrer" >
                                <FaLinkedin></FaLinkedin>
                            </a>

                        </span></p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contact;