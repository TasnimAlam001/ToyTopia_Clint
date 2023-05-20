import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toy = useLoaderData();
    const {name, picture}= toy;
    return (
        <div>
            <img src={picture} alt="" />
            <h1>name: {name}</h1>
        </div>
    );
};

export default ToyDetails;