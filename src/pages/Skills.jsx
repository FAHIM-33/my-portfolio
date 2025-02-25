import { useEffect, useState } from "react";
import SecHead from "../Components/SecHead";

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    const hexToRgb = (hex) => {
        // Remove the hash at the start if it's there
        hex = hex.replace(/^#/, '');
        // Parse r, g, b values
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return `${r}, ${g}, ${b}`;
    };


    return (
        <section data-aos='slide-up' className="cont" id="skills">
            <SecHead text='My Skills'></SecHead>
            <div className="flex mt-12 flex-wrap justify-center p-4 md:p-8 gap-4 items-center text-center md:my-16">
                {
                    skills?.map(obj => <figure
                        key={obj.id}
                        className={` skill-card p-4 stripe-bg hover:scale-110 duration-200 border border-gray-800`}
                        // style={{ border: `2px solid rgba(${hexToRgb(obj.color)}, 0.5)`,color:obj.color }}
                        style={{ border: `2px solid rgba(${hexToRgb(obj.color)}, 0.3)`,color:obj.color, background: `rgba(${hexToRgb(obj.color)}, 0.08)`}}
                        title={obj.name}
                    >
                        <img className="w-12 h-12 md:w-24 md:h-24 mx-auto block object-contain" src={obj.logo} alt="logo" />
                        <figcaption className="mt-2 text-sm md:text-base font-medium">{obj.name}</figcaption>
                    </figure>
                    )
                }
            </div>
        </section>
    );
};

export default Skills;