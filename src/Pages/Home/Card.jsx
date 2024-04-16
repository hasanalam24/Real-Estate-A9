import { Link } from "react-router-dom";

const Card = ({ data }) => {

    const { estate_title, location, area, images, description, facilities, status, id } = data;

    return (
        <div className="card  bg-base-100 shadow-xl mb-8">
            <figure className="p-3 "><img className="w-[384px] h-[256px] rounded-xl" src={images} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description.slice(0, 50)}...</p>
                <div className="flex justify-between ">
                    <p><span className="font-medium">Area:</span> {area}</p>
                    <p><span className="font-medium">Status: </span>{status}</p>
                </div>
                <div>
                    <h3 className="font-semibold">Facilities Here:</h3>
                    {
                        facilities.map((facility, idx) => <li key={facility.idx}> {facility}</li>)
                    }
                </div>
                <p><span className="font-medium">Location:</span> {location}</p>
                <Link to={`/details/${id}`} className="card-actions">
                    <a href="#_" className="relative inline-flex items-center justify-end px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group">
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">See Details</span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Card;