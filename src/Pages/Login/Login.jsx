import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;

        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));

    }
    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-gradient-to-b from-gray-400 to-gray-300">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
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

                                <input className="btn btn-outline lg:px-20 text-red-700" type="submit" value="Login" />
                            </div>

                        </form>
                        <div className="divider">OR, Login with</div>
                        <button className="text-center mx-auto btn btn-outline text-red-700"><FaGoogle></FaGoogle></button>
                        <div className="mx-auto">New Here ? <Link className="link link-hover text-red-700" to="/register">Register</Link></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;