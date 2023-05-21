import { FaArrowRight } from "react-icons/fa";


const MyToyInfo = ({ toy,handleDelete }) => {
    const { _id, name, img, category, quantity, toyName, price } = toy;

    



    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square text-red-700 btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>

                    </div>
                </div>
            </td>
            <td>
                {name}

            </td>
            <td>
                {category}

            </td>
            <td>{quantity}</td>
            {price ?
                <td>${price}</td>
                : "NM"}
            <th>
                <button className="btn btn-outline text-red-700 btn-xs"><span className="">Details</span> <FaArrowRight className="ml-3"></FaArrowRight></button>
            </th>
        </tr>

    );
};

export default MyToyInfo;