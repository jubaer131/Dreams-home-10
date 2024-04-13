import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Navbar from "../shardComponent/Navbar"
import { IoLocationSharp } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { IoIosPricetag } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const CardDetails = () => {

    const { id } = useParams()

    const [cards, setcards] = useState([])
    console.log(cards, id)

    useEffect(() => {
        fetch('/Estates.json')
            .then(res => res.json())
            // 
            .then(data => {
                const match = data.find(item => item.id === id);
                setcards(match);
            })

    }, [])



    const { image, estate_title, segment_name, description, price, status, area, location, facilities, view_property_button } = cards
    return (
        <div>
            <Navbar></Navbar>
            <Helmet>
                <title>{`segment_name`}||{`estate_title`}</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl gap-6 px-8 mt-10 container mx-auto">
                <div className="lg:w-6/12 ">
                    <figure><img className="w-full h-[650px] bg-cover bg-no-repeat rounded-3xl" src={image} alt="Album" /></figure>
                </div>

                <div className=" lg:w-6/12 p-6">
                    <div className="  mx-auto space-y-16 ">
                        <article className="space-y-4  text-black">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl"></h1>
                                <h2 className="text-[20px] font-medium">{segment_name}</h2>
                            </div>

                            <hr className=" border-t border-dashed border-gray-400" />
                            <p > <span className="text-[20px] font-medium"> State : </span> {estate_title}</p>
                            {/* <hr className=" border-b border-dashed border-gray-400" /> */}
                            <p >  <span className="text-[20px] font-medium"> Review :  </span> {description}</p>

                        </article>
                        <div>
                            <div className="flex flex-wrap items-center justify-start md:gap-24 mb-5">
                                <h2 className="flex items-center gap-4"><IoIosPricetag></IoIosPricetag> <span className="text-[20px] font-medium">  Price :  </span>  {price}</h2>
                                <h2 className="flex items-center gap-4"> <FaDollarSign></FaDollarSign> <span className="text-[20px] font-medium"> Status :  </span>  {status}</h2>

                            </div>
                            <div className="space-y-5">
                                <hr className=" border-t border-dashed border-gray-400" />

                                <p className="flex items-center gap-4"> <GiFamilyHouse></GiFamilyHouse><span className="text-[20px] font-medium">  Area :   </span> {area}</p>
                                <p className="flex items-center gap-4"><IoLocationSharp></IoLocationSharp> <span className="text-[20px] font-medium">  Location : </span>  {location}</p>


                            </div>


                            <div className="mt-6">
                                <h2 className="text-[20px] font-medium">Facilities : </h2>
                                {
                                    Array.isArray(facilities) && facilities.map((item, index) => (

                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </div>

                            <div className="mt-6">
                                <Link to="/"> <button className="btn bg-teal-500 ">{view_property_button}</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetails;