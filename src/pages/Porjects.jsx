
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
        <section className="cont" >
            <SecHead text='My Projects'></SecHead>
            <div className="grid grid-cols-2 gap-2" id="projects" data-aos='slide-left'>
                {
                    projects?.map(obj => <div key={obj.id}
                        className="event-card overflow-hidden relative rounded-sm "
                    >
                        <a href={obj.liveLink}>
                            <figure>
                                <img src={obj.img} alt="borken image" />
                            </figure>
                        </a>
                        <div className="bg-white pl-4">
                            <h3 className="text-xl opacity-0 duration-200 font-semibold">{obj.name}</h3>
                            <p className="py-1">{obj.details}</p>
                        </div>

                    </div>
                    )
                }

            </div>
        </section>
    );
};

export default Porjects;