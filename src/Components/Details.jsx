import { useState } from "react";
import toast from "react-hot-toast";
import { BsClipboard2, BsClipboard2Check } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const Details = ({ title, children }) => {
    const [success, setSuccess] = useState(true)

    function saveToClip() {
        navigator.clipboard.writeText('shahriyerfahim2012@gmail.com')
            .then(() => {
                toast.success("Copied to clipboard")
                setSuccess(true)
            }
            )
    }

    return (
        <div className="p-4 relative border border-low w-full md:w-fit md:hover:scale-110 md:hover:bg-mid md:duration-200 md:backdrop-blur-sm rounded-md md:drop-shadow-xl">
            <h3 className=" font-medium text-low">{title}:</h3>
            <p className="text-high text-sm md:text-xl font-semibold">{children}</p>
            {
                title === 'Email' &&
                <button
                    onClick={saveToClip}
                    className={`absolute ${success ? "bg-[#16310d] text-lime-400" : "bg-[#292929]"} px-1 py-1.5 rounded right-3 top-3`}>
                    {success ?
                        <BsClipboard2Check />
                        :
                        <BsClipboard2 />
                    }
                </button>
            }
        </div>
    );
};

export default Details;