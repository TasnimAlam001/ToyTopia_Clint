
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

import 'react-tabs/style/react-tabs.css';

const Toys = () => {
    const [toys, setToys] = useState([]);
    const [openTab, setOpenTab] = useState(1);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    const animeToys = toys.filter(toy => toy.category === "Anime")
    const marvelToys = toys.filter(toy => toy.category === "Marvel")
    const dcToys = toys.filter(toy => toy.category === "DC")


    return (

        <div className="mt-8">
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-red-700"
                                        : "text-red-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Anime
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-red-700"
                                        : "text-red-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Marvel
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-red-700"
                                        : "text-red-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                DC
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                                        {
                                            animeToys.map(animeToy => <div className="card card-compact w-full bg-base-100 shadow-xl"
                                                key={animeToy.id}>
                                                <figure><img className="lg:h-[400px]" src={animeToy.picture} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{animeToy.name}</h2>
                                                    <p>Price: ${animeToy.price}</p>
                                                    <div>
                                                        <span>Rating:</span>
                                                        <Rating
                                                            placeholderRating={animeToy.rating}
                                                            emptySymbol={<FaRegStar></FaRegStar>}
                                                            placeholderSymbol={<FaStar className="text-red-700"></FaStar>}
                                                            fullSymbol={<FaStar></FaStar>}
                                                        />
                                                    </div>
                                                    <div className="card-actions justify-end">
                                                        <button className="btn btn-primary">View Details</button>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                                        {
                                            marvelToys.map(marvelToy => <div className="card card-compact w-full bg-base-100 shadow-xl"
                                                key={marvelToy.id}>
                                                <figure><img className="lg:h-[400px]" src={marvelToy.picture} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{marvelToy.name}</h2>
                                                    <p>Price: ${marvelToy.price}</p>
                                                    <div>
                                                        <span>Rating:</span>
                                                        <Rating
                                                            placeholderRating={marvelToy.rating}
                                                            emptySymbol={<FaRegStar></FaRegStar>}
                                                            placeholderSymbol={<FaStar className="text-red-700"></FaStar>}
                                                            fullSymbol={<FaStar></FaStar>}
                                                        />
                                                    </div>
                                                    <div className="card-actions justify-end">

                                                        <button className="btn btn-primary">View Details</button>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                                        {
                                            dcToys.map(toy => <div className="card card-compact w-full bg-base-100 shadow-xl"
                                                key={toy.id}>
                                                <figure><img className="lg:h-[400px]" src={toy.picture} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{toy.name}</h2>
                                                    <p>Price: ${toy.price}</p>
                                                    <div>
                                                        <span>Rating:</span>
                                                        <Rating
                                                            placeholderRating={toy.rating}
                                                            emptySymbol={<FaRegStar></FaRegStar>}
                                                            placeholderSymbol={<FaStar  className="text-red-700"></FaStar>}
                                                            fullSymbol={<FaStar></FaStar>}
                                                        />
                                                    </div>
                                                    <div className="card-actions justify-end">
                                                        <button className="btn btn-primary">View Details</button>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;