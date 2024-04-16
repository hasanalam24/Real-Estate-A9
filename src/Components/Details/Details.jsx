import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const { search } = useParams()
    const loadData = useLoaderData()
    const viewData = loadData.find((data) => data.id == search)
    const { images, estate_title, price, description, area, location, facilities, discount, status } = viewData

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-8 p-3">
            <Helmet>
                <title>
                    DH | Details
                </title>
            </Helmet>
            <div>
                <h1></h1>
                <figure><img className="lg:w-[500px] lg:h-[500px] rounded-lg" src={images} alt="Album" /></figure>
            </div>
            <div className="p-4 space-y-3">
                <h2 className="card-title">{estate_title}</h2>
                <p className="bg-orange-500 max-w-max px-4 font-semibold text-white rounded-full flex items-center justify-center">{status}</p>

                <p><span className="font-medium">Deschiption:</span> {description}</p>
                <p><span className="font-medium">Area:</span> {area}</p>
                <p><span className="font-medium">Deschiption:</span> {location}</p>
                <div>
                    <h3 className="font-semibold">Facilities Here:</h3>
                    {
                        facilities.map((facility) => <li key={facility.id}> {facility}</li>)
                    }
                </div>
                <p><span className="font-medium">Price:</span> {price}</p>
                <p className="text-red-500"><span className="font-medium ">Discount:</span> <span className="line-through">{discount}</span></p>
            </div>
        </div >
    );
};

export default Details;