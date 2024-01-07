
// eslint-disable-next-line react/prop-types
const Details = ({ title, children }) => {
    return (
        <div className="p-4 hover:scale-110 hover:bg-white duration-200 backdrop-blur-sm rounded-md drop-shadow-xl">
            <h3 className=" font-medium text-low">{title}:</h3>
            <p className="text-mid text-xl font-semibold">{children}</p>
        </div>
    );
};

export default Details;