import { Link } from "react-router-dom";



const Card = ({ singleData }) => {
    // console.log(singleData)

    const { estate_title, location, area, images, description, facilities, status, id } = singleData;


    return (
        <div className="card  bg-base-100 shadow-xl">
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
                        facilities.map((facility) => <li key={facility.id}> {facility}</li>)
                    }
                </div>
                <p><span className="font-medium">Location:</span> {location}</p>
                <Link to={`/details/${id}`} className="card-actions">
                    <button className="btn btn-primary">More Info..</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;