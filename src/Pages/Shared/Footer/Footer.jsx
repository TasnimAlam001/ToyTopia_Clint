import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-neutral text-neutral-content bg-gradient-to-b from-gray-400 to-gray-300 ">
            
                    <div>
                        <Link className="btn btn-ghost normal-case text-3xl font-bold ">Toy<span className="text-red-700"> Topia</span></Link>
                        <p className="text-black">Toy Industries Ltd.<br />Providing reliable goods since 2012</p>
                    </div>
                    <div>
                        <span className="footer-title text-black">Leave a Comment</span>
                        <div className="grid grid-flow-col gap-4">

                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-outline text-red-700 absolute top-0 right-0 rounded-l-none">Comment</button>
                            </div>
                        </div>
                    </div>
                
                
            </footer>
        </div>
    );
};

export default Footer;