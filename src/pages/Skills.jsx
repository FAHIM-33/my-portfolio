import { useEffect, useState } from "react";
import SecHead from "../Components/SecHead";

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <section className="cont" id="skills">
            <SecHead text='My Skills'></SecHead>
            <div className="flex  flex-wrap justify-center p-4 md:p-8 gap-4 items-center text-center md:my-16">
                {
                    skills?.map(obj => <figure
                        key={obj.id}
                        className=" skill-card p-4 md:backdrop-blur-sm hover:scale-110 duration-200"
                        title={obj.name}
                    >
                        <img  className="w-12 h-12 md:w-24 md:h-24 mx-auto block object-contain" src={obj.logo} alt="logo" />
                        <figcaption className="mt-2 text-sm md:text-base font-medium">{obj.name}</figcaption>
                    </figure>
                    )
                }
            </div>
        </section>
    );
};

export default Skills;