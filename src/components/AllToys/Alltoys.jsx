import { useEffect, useState } from "react";

import AllToysTable from "./AllToysTable";
import { Button } from "@material-tailwind/react";


const Alltoys = () => {
    const [toys, setToys] = useState([]);
    // const [query, setQuery] = useState("");
    console.log()

    useEffect(() => {
        fetch('https://assignment-11-server-seven-dusky.vercel.app/toy')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    // const handleSearch = event =>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     setQuery(name);
    //     const result =toys.filter(toy => toy.toyName.toLowerCase().includes("lu"))
    //     console.log(result);
    //     setToys(result);
    // }

    // {
    //     toys.filter(toy => toy.toyName.toLowerCase().includes(query))


    // }


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
                        <th>
                            <form >
                                <input className="p-3 rounded" name="name" type="text" placeholder="Search By Name"
                                    />
                                {

                                }
                                <Button className="btn btn-outline px-3 text-red-700 ml-2"><input type="submit" value="Search" /></Button>
                            </form>

                        </th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.slice(0, 20).map(toy => <AllToysTable
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