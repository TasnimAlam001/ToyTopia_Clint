import { useLoaderData } from "react-router-dom";


const ToyDetail = () => {
    const toy = useLoaderData();
    const { name, img,price,toyName } = toy;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-full h-[700px]" src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <h2 className="card-title">Price:{price}</h2>
                    <h2 className="card-title">Seller:{name}</h2>

                    <div className="card-actions justify-end absolute bottom-10 right-10">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetail;