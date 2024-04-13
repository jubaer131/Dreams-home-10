import { useContext } from "react";
import { authContest } from "../layout/AuthProvider";
import Navbar from "../shardComponent/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../component/Footer"


const UpdatedProfile2 = () => {

    const { updateProfilePicture } = useContext(authContest)

    const { user, } = useContext(authContest)
    console.log(user)
    const { displayName, email, photoURL, providerId,
    } = user

    const updatePhoto = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateProfilePicture(name, photo)
            .then((result) => {
                console.log(result)
                alert("successfully registation")
            })
            .catch((error) => {
                console.log(error)
            })






    }


    return (
        <div>
            <Helmet>
                <title>updateProfile</title>
            </Helmet>
            <section>
                <Navbar></Navbar>
            </section>
            <section className=" dark:bg-gray-100 dark:text-gray-900 ">

                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x lg:my-20">
                    <div className="py-6 md:py-0 md:px-6 ">
                        <img src={photoURL} alt="" className="object-cover object-center w-full   dark:bg-gray-500 rounded-full" />
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Update profile</p>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Name : {displayName}</h2>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span> Address, 9999 City</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>Mobile : 123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span> {email}</span>
                            </p>
                        </div>
                    </div>

                    <form onSubmit={updatePhoto} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name="photo" placeholder="Url" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                </div>
            </section>
            <section className="mt-9">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default UpdatedProfile2;