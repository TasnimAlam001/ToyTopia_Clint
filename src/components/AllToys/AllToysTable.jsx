import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllToysTable = ({ toy }) => {
    const { name, img, category, quantity, toyName, price } = toy;
    return (
        <tr>
            <th>
                
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
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
                <Link to={`/toy/${toy._id}`}><button className="btn btn-outline text-red-700 btn-xs"><span className="">Details</span> <FaArrowRight className="ml-3"></FaArrowRight></button></Link>
            </th>
        </tr>

    );
};

export default AllToysTable;