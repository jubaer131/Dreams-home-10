import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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



    const { image, estate_title } = cards
    return (
        <div className="card  bg-base-100 shadow-2xl rounded-2xl container max-w-7xl mx-auto">
            <figure ><img className="rounded-[40px] lg:max-h-[380px] lg:w-full p-6 " src={image} alt="Shoes" /></figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">
                    {estate_title}

                </h2>
                <p>jubaer</p>
                {/* <div className="card-actions justify-start">
                    <Link to={`/card/${id}`}
                        className="text-blue-500 font-bold"> <button className="btn">{view_property_button}</button> </Link>
                </div> */}
            </div>
        </div>
    );
};

export default CardDetails;