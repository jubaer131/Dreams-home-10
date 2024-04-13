import { Link } from "react-router-dom";
import 'animate.css';


const Card = ({ item }) => {

    const { estate_title, description, view_property_button, image, id } = item


    console.log(item)
    return (
        <div className="card  bg-base-100 shadow-2xl rounded-2xl ">

            <figure ><img className="rounded-[40px] lg:max-h-[380px] lg:w-full p-6  " src={image} alt="Shoes" /></figure>
            <div className="card-body space-y-4">
                <h2 className="card-title ">
                    {estate_title}

                </h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <Link to={`/card/${id}`}
                        className="text-blue-500 font-bold animate__animated animate__zoomInDown "> <button className="btn  bg-teal-400">{view_property_button}</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;