import { useEffect, useState } from "react";
import { FaArrowRight, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Alltoys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {
                    toys.map(toy => <div className="card card-compact w-full bg-base-100 shadow-xl"
                        key={toy.id}>
                        <figure><img className="lg:h-[400px]" src={toy.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-red-700">{toy.name}</h2>
                            <p className="font-bold">Price: ${toy.price}</p>
                            <div>
                                <span className="font-bold">Rating:</span>
                                <Rating
                                    placeholderRating={toy.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className="text-red-700"></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline text-red-700">View Details <FaArrowRight className="ml-4"></FaArrowRight></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Alltoys;