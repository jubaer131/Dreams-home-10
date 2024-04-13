import { Helmet } from "react-helmet-async";
import Footer from "../component/Footer";
import OurProjects from "../component/OurProjects";
import Services from "../component/Services";
import Slider from "../component/Slider";
import StateCard from "../component/StateCard";
import Navbar from "../shardComponent/Navbar";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Slider></Slider>
                <StateCard></StateCard>
                <Services></Services>
                <OurProjects></OurProjects>
            </div>

            <div className="w-full">
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Home;