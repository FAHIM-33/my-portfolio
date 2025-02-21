// eslint-disable-next-line react/prop-types
const SecHead = ({ text }) => {
    return (
        <div data-aos='slide-up' className="flex items-center">
            <div className="grow border-t border-dashed border-white/40"></div>
            <h2  className="text-xl md:text-2xl font-semibold border border-dashed rounded-md px-4 border-white/40 py-1">{text}</h2>
            <div className="grow border-t border-dashed border-white/40"></div>
        </div>
    );
};

export default SecHead;