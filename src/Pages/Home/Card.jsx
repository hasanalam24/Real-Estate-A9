

const Card = ({ singleData }) => {
    console.log(singleData)
    const { estate_title, location, area, images } = singleData

    return (
        <div className="bg-gray-200 p-8 rounded-lg flex gap-5">
            <div className="flex-1">
                <img className="h-full" src={images} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="text-xl font-semibold">{estate_title}</h1>

                <div className="flex justify-between">
                    <p>{location}</p>
                    <p>{area}</p>
                </div>
                <button className="btn btn-primary mt-5">View Details</button>
            </div>
        </div>
    );
};

export default Card;