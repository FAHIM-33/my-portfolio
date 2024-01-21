import SecHead from "../Components/SecHead";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="cont " id="contact">
            <SecHead text='Contact me'></SecHead>

            <section className="text-high mb-8 mt-12 py-4 border border-low md:mx-0 mx-2 rounded-lg">
                <div className="flex flex-col md:flex-row gap-10">

                    <div className="w-auto md:w-1/2 text-center md:text-right">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Let&apos;s talk</h2>
                        <p className="text-lg md:w-4/5">Want to contact or have a question? Get in touch by filling out the contact form and I will get
                            back
                            to you as soon as possible.</p>
                    </div>

                    <div className="md:w-1/2 p-4 ">

                        <form action="https://formspree.io/f/xjvnvdgk" method='POST' className="flex flex-col gap-6 py-4">
                            <input required type="email" name="email" placeholder="Your Email:" />
                            <textarea required placeholder="Tell me something..." name="message"></textarea>
                            <button
                                className="border-2 border-mid w-fit px-4 py-2 rounded-md duration-200 hover:bg-low hover:drop-shadow-xl shadow-black"
                                type="submit">Send</button>
                        </form>
                        <p className="flex items-center gap-4 font-medium text-2xl"> Social media: <span className="flex gap-4 text-4xl">
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