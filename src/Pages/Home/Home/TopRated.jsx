import { useEffect, useState } from "react";
import {  FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";



const TopRated = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-seven-dusky.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    const bestToys = toys.filter(toy => toy.rating >= 4.8);

    return (
        <div className="bg-gradient-to-b from-gray-400 to-gray-300 p-6 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    bestToys.map(bt => <div className="card card-compact w-full bg-base-100 shadow-xl"
                        key={bt._id}
                    >
                        <figure><img className="w-full h-[400px]" src={bt.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{bt.name}</h2>
                            <div>
                                <span className="font-bold">Rating:</span>
                                <Rating
                                    placeholderRating={bt.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className="text-red-700"></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                /> <span>{bt.rating}</span>
                            </div>
                            
                        </div>
                    </div>)
                }
            </div>
        </div>

    );
};

export default TopRated;