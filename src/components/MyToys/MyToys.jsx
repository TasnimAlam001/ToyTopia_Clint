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
    }, [url]);




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

    const handleToyUpdate = id =>{
        fetch(`http://localhost:5000/toy/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'update'})
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                const remaining = toys.filter(toy=>toy._id !==id);
                const updated = toys.find(toy => toy._id === id);
                updated.status= 'update'
                const newToys = [updated, ...remaining];
                setToys(newToys);
            }
        })
    }






    return (
        <div className="overflow-x-auto w-full">
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
                            handleToyUpdate={handleToyUpdate}

                        ></MyToyInfo>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default MyToys;