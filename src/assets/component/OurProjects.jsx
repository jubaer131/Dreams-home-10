import { useEffect, useState } from "react";
import Project from "./Project";
import 'animate.css';

const OurProjects = () => {

    const [project, setproject] = useState([])
    useEffect(() => {
        fetch('Projects.json')
            .then(res => res.json())
            .then(data => setproject(data))
    }, [])
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block  animate__animated animate__slideInRight  max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src="https://i.ibb.co/qYrPrgm/smiling-teenager-with-his-wooden-house.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl  sm:text-4xl group-hover:underline group-focus:underline font-bold">Our Projects</h3>
                        <span className="text-xs dark:text-gray-600">Discover Your Perfect Home with Us</span>
                        <p>At Dream Home, we're dedicated to creating exceptional living spaces tailored to your needs. Our projects are designed with care and attention to detail, offering a range of options to suit every lifestyle.</p>
                    </div>
                </a>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/* text */}
                    {
                        project.map(item => <Project item={item}></Project>)
                    }
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;