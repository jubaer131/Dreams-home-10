import { useContext } from "react";
import { authContest } from "../layout/AuthProvider";
import Navbar from "../shardComponent/Navbar";
import { getAuth, updateProfile } from "firebase/auth";
import { Result } from "postcss";

const UpdatedProfile2 = () => {

    const { user, } = useContext(authContest)
    console.log(user)
    const { displayName, email, photoURL, uid, lastRefreshAt, providerId,
    } = user

    const handlePhoto = () => {

        // updateProfile(Result.user, {
        //     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
        // }).then(() => {
        //     // Profile updated!
        //     // ...
        // }).catch((error) => {
        //     // An error occurred
        //     // ...
        // });




    }


    return (
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900 ">
            <Navbar></Navbar>


            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x lg:my-20">
                <div className="py-6 md:py-0 md:px-6 ">
                    <img src={photoURL} alt="" className="object-cover object-center w-full lg:h-full  dark:bg-gray-500 rounded-full" />
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
                <form noValidate="" className="flex md:items-center flex-col py-6 space-y-6 md:py-0 md:px-6 lg:mt-32">
                    <label className="block">
                        <span className="mb-1">Update Photo</span>
                        <input type="url" placeholder="Photo" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
                    </label>


                    <button onClick={handlePhoto} type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                </form>
            </div>
        </section>


    );
};

export default UpdatedProfile2;