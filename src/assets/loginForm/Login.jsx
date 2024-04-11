import { useContext, useState } from "react";
import { authContest } from "../layout/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shardComponent/Navbar";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, googleSignin } = useContext(authContest);
    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        creatUser(email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user);
                e.target.reset()
                navigate("/");

            })
            .catch((error) => {
                console.log(error);
                toast.error("Invalid email or password");

            });
    }
    const handlegoogle = (e) => {
        e.preventDefault();
        googleSignin()

            .then((result) => {
                console.log(result.user)
                navigate("/");
            }).catch((error) => {
                console.log(error)
            });

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/ZHPfK4T/modern-business-center.jpg')] bg-cover">

                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full lg:max-w-5xl shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body lg:w-[600px] ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered "
                                    required

                                />
                                <span className="absolute right-5 bottom-5" onClick={() => setShowPassword(!showPassword)}>
                                    {/* You can use eye icons here to toggle password visibility */}
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <ToastContainer />
                        </form>

                        <p className='text-center pb-4'>Don't have an account please  <Link className='text-green-500' to="/register">Register now</Link></p>

                        <button onClick={handlegoogle} className="btn "> Google  </button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Login;
