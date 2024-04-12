import { useEffect, useState } from "react";
import Card from "./Card";

const StateCard = () => {


    const [stateCard, setstateCard] = useState([])
    useEffect(() => {
        fetch("Estates.json")
            .then(response => response.json())
            .then(data => setstateCard(data))
    }, [])
    return (
        <div>
            <h1 className=" text-center text-3xl font-bold my-6 animate__animated animate__bounceInLeft"> Estates Your<span className=" text-center text-3xl text-teal-400 font-bold my-6 animate__animated animate__bounceInLeft"> Gateway</span> to Luxury Living</h1>
            <p className="text-xl text-center md:w-[650px] mx-auto mb-6">luxurious villas to elegant penthouses, each estate promises unparalleled comfort and style. Discover your dream home and embark on a journey where luxury knows no bounds.</p>

            <div className="grid lg:grid-cols-2 gap-8">
                {
                    stateCard.map(item => <Card item={item}></Card>)
                }
            </div>


        </div>
    );
};

export default StateCard;