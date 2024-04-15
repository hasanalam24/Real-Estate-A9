import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const { search } = useParams()
    const loadData = useLoaderData()
    const view = loadData.find((data) => data.id == search)
    // console.log(view)
    const { images, estate_title, segment_name, price, description, area, location, facilities, discount } = view

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <figure><img src={images} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <p>{segment_name}</p>
            </div>
        </div>
    );
};

export default Details;