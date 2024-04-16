import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SingleClient from "./singleClient";
import 'animate.css';

const Clients = () => {
    const clientsAllData = useLoaderData()

    return (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 mt-8 animate__animated animate__backInUp">
            <Helmet>
                <title>
                    DH | Clients
                </title>
            </Helmet>
            {
                clientsAllData.map(client =>

                    <SingleClient client={client} key={client.id}></SingleClient>

                )
            }
        </div>
    );
};

export default Clients;