
import { useEffect, useState } from "react";
import SecHead from "../Components/SecHead";

const Porjects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(() => console.log('error fetching json file'))
    }, [])

    return (
        <section className="cont " >
            <SecHead text='My Projects'></SecHead>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="projects" data-aos='slide-up'>
                {
                    projects?.map(obj => <div key={obj.id}
                        className="m-4 event-card overflow-hidden relative rounded-sm "
                    >
                        <a href={obj.liveLink} title={obj.name} target="_blank" rel="noopener noreferrer">
                            <figure>
                                <img src={obj.img} alt="borken image" />
                            </figure>
                        </a>
                        <div className="text-high bg-mid pl-4">
                            <h3 className="text-xl pt-2 md:pt-0 md:opacity-0 duration-200 font-semibold">{obj.name}</h3>
                            <p className="py-1 text-base">- {obj.details}</p>
                        </div>

                    </div>
                    )
                }

            </div>
        </section>
    );
};

export default Porjects;