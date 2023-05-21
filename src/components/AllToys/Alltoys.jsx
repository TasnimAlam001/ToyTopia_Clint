import { useEffect, useState } from "react";

import AllToysTable from "./AllToysTable";

const Alltoys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);
    return (
        <div className=" w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy details</th>
                        <th>seller</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <AllToysTable
                            key={toy._id}
                            toy={toy}

                        ></AllToysTable>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default Alltoys;