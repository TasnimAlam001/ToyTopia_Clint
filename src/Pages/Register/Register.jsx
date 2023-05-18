
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-gradient-to-b from-gray-400 to-gray-300">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-red-700">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-outline lg:px-20 text-red-700">Register</button>
                        </div>
                        
                        <div className="mx-auto">Already Have an account ? <Link to="/login" className="link link-hover text-red-700">Login</Link></div>

                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Register;