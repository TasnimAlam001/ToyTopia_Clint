
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.log(error));

    }



    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-gradient-to-b from-gray-400 to-gray-300">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>

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

                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-outline lg:px-20 text-red-700" type="submit" value="Register" />
                            </div>

                        </form>
                        <div className="mx-auto">Already Have an account ? <Link to="/login" className="link link-hover text-red-700">Login</Link></div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;