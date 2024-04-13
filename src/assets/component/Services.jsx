import { useEffect, useState } from "react";
import Service from "./Service";
import 'animate.css';
const Services = () => {

    const [service, setservice] = useState([])
    useEffect(() => {

        fetch('Service.json')
            .then(res => res.json())
            .then(data => setservice(data))

    }, [])


    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-3 text-center">
                    <h2 className="text-4xl font-bold  animate__animated animate__jackInTheBox">Our services</h2>
                    <p className="font-serif text-[16px] dark:text-gray-600">Welcome to Dream Homes, where we go beyond providing just a place to live – we offer a lifestyle. Our commitment to excellence extends beyond the walls of our properties, ensuring that our residents have access to a wide range of services and amenities that enhance their living experience.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        service.map(item => <Service item={item}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;