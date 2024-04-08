import Slider from "../component/Slider";
import StateCard from "../component/StateCard";
import Navbar from "../shardComponent/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <StateCard></StateCard>

        </div>
    );
};

export default Home;