import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Slider from "./Slider/Slider";



const Home = () => {
    const allData = useLoaderData()

    return (
        <div>
            <Slider></Slider>

            <div>
                <div className="mt-10 text-center">
                    <h1 className="text-4xl font-semibold">We've Sale and Rent more than 200 Houses this year!</h1>
                    <p className="w-1/2 mx-auto mt-7 mb-10">Discover your dream home today! Explore our diverse selection of rental and for-sale properties, each offering comfort, style, and convenience. Find the perfect place to call yours!</p>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {
                        allData.map(singleData => <Card singleData={singleData} key={singleData.id}></Card>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;