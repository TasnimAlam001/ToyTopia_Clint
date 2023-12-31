import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    const toy = useLoaderData();
    const { name, picture,price } = toy;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-full h-[700px]" src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Price:{price}</h2>
                    <div className="card-actions justify-end absolute bottom-10 right-10">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;