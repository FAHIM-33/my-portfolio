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
            <div className="flex flex-wrap justify-center p-8 gap-4 items-center text-center my-16">
                {
                    skills?.map(obj => <figure
                        key={obj.id}
                        className=" skill-card p-4 backdrop-blur-sm drop-shadow-2xl hover:scale-110 duration-100"
                        title={obj.name}
                    >
                        <img  className="w-24 h-24 object-contain" src={obj.logo} alt="logo" />
                        <figcaption className="mt-2 font-medium">{obj.name}</figcaption>
                    </figure>
                    )
                }
            </div>
        </section>
    );
};

export default Skills;