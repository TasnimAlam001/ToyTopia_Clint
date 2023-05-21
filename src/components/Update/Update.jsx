import { useLoaderData } from "react-router-dom";



const Update = () => {
   const toy = useLoaderData();
    return (
        <div>
            <h1>Update here for{toy.name}</h1>
        </div>
    );
};

export default Update;