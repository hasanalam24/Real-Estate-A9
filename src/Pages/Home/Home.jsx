import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Slider from "./Slider/Slider";
import { Helmet } from "react-helmet-async";
import 'animate.css';


const Home = () => {
    const allData = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>
                    DH | Home
                </title>
            </Helmet>
            <Slider></Slider>

            <div>
                <div className="mt-10 text-center">
                    <h1 className="text-2xl lg:text-4xl font-semibold">Our Estate.We've Sale and Rent more than <br /> 200 Houses this year!</h1>
                    <p className="w-[90%] lg:w-1/2 mx-auto mt-7 mb-10">Discover your dream home today! Explore our diverse selection of rental and for-sale properties, each offering comfort, style, and convenience. Find the perfect place to call yours!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-hidden animate__animated animate__fadeInUpBig">
                    {
                        allData.map((data) => <Card data={data} key={data.id}></Card>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;