import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyInfo from "./MyToyInfo";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([])

    const url = `http://localhost:5000/toy?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);




    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = toys.filter(toy => toy._id !==id);
                        setToys(remaining);
                    }

                })
        }
    }






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
                        
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <MyToyInfo
                            key={toy._id}
                            toy={toy}
                            handleDelete={handleDelete}

                        ></MyToyInfo>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyToys;