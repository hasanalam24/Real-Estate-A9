import { Link } from "react-router-dom";


const Card = ({ singleData }) => {
    // console.log(singleData)

    const { estate_title, location, area, images, price, description, id } = singleData;


    return (
        <div className="bg-gray-200 p-8 rounded-lg flex gap-5 space-y-3">
            <div className="flex-1">
                <img className="h-full" src={images} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="text-xl font-semibold">{estate_title}</h1>
                <div>
                    <p>{price}</p>
                    <p>{description.slice(0, 50)}...</p>
                </div>
                <div className="flex justify-between ">
                    <p>{location}</p>
                    <p>{area}</p>
                </div>
                <Link to={`/details/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div >
    );
};

export default Card;