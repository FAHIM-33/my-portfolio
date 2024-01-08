
// eslint-disable-next-line react/prop-types
const Details = ({ title, children }) => {
    return (
        <div className="p-4 border border-low w-full md:w-fit md:hover:scale-110 md:hover:bg-mid md:duration-200 md:backdrop-blur-sm rounded-md drop-shadow-xl">
            <h3 className=" font-medium text-low">{title}:</h3>
            <p className="text-high  md:text-xl font-semibold">{children}</p>
        </div>
    );
};

export default Details;