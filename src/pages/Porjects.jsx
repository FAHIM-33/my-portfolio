
import { useEffect, useState } from "react";
import SecHead from "../Components/SecHead";
import Marquee from "react-fast-marquee";

const Porjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(() => console.log('error fetching json file'))
    }, [])

    return (
        <section className="cont" id="projects">
            <SecHead text='My Projects'></SecHead>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 md:gap-4 gap-2 px-1 md:px-0" data-aos='slide-up'>

                {
                    projects.map((obj, i) => <div
                        key={obj.id}
                        className={`relative ${i === 0 ? "col-span-2" : ""} ${i === 1 ? "row-span-2" : ""} ${i === 3 ? "row-span-2" : ""} `}
                    >
                        <div className="relative project-card h-fit rounded-lg w-fit overflow-hidden">

                            <a href={obj.liveLink} title={obj.name} target="_blank" rel="noopener noreferrer">
                                <img className="md:blur-sm md:hover:blur-0 md:scale-95 md:hover:scale-100 duration-300" alt={obj.name} src={obj.img} />
                            </a>
                            <div className="absolute bottom-0 bg-black/50 w-full pointer-events-none">
                                <div className="stripe-bg h-full flex justify-center flex-col px-1 md:p-4">
                                    <h3 className="md:text-xl font-semibold">{obj.name}
                                        {obj.name === 'Mirtello' &&
                                            <span className="bg-[#0f1b2f] border rounded px-1 mx-1 text-white border-[#fb2c36] text-[10px] md:text-sm py-px">Live</span>
                                        }
                                    </h3>
                                    <Marquee speed={30} autoFill={false}>
                                        <p className="text-xs md:text-base">{obj.details}</p>
                                    </Marquee>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </section >
    );
};

export default Porjects;