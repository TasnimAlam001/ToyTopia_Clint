import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { Button } from "@material-tailwind/react";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    

    const handleLogOut = () => {
        logOut()
            .then(()=>{})
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100 py-4 shadow-[0px_0px_10px_0px_#00000024] my-5 rounded-md bg-gradient-to-b from-gray-400 to-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/"></Link>Home</li>
                        <li><Link to="/allToys">All Toys</Link></li>
                        <li><Link to="/myToys">My Toys</Link></li>
                        <li><Link to="/addToy">Add a Toy</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-3xl font-bold ">Toy<span className="text-red-700"> Topia</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="font-bold text-red-700 text-2xl"><Link to="/">Home</Link></li>
                    <li className="font-bold"><Link to="/allToys">All Toys</Link></li>
                    {
                        user && <>
                        <li className="font-bold"><Link to="/myToys">My Toys</Link></li>
                        <li className="font-bold"><Link to="/addToy">Add a Toy</Link></li>
                        </>
                    }
                    <li className="font-bold"><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            {  user ?
                    <div className="navbar-end mr-5">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">
                                    <img src={user.photoURL? user.photoURL :"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                       {
                                        user? <>
                                        {user.displayName? user.displayName: 'User'}
                                        </>: "Profile"
                                       }
                                       
                                       
                                    </a>
                                </li>
                                <li>

                                <a>
                                {
                                        user? <>
                                        {user.email? user.email: 'UserEmail'}
                                        </>: ""
                                       }
                                </a>
                                </li>
                                <li><Button className="text-red-700" onClick={handleLogOut}>Log Out</Button></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="navbar-end mr-5">
                        <Link className="btn btn-ghost normal-case text-2xl font-bold" to="/login">login</Link>
                    </div>
            }
        </div>
    );
};

export default NavBar;