import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import 'animate.css';

const Slider = () => {


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])



    return (
        <div className="carousel w-full rounded-3xl mt-10">
            <div id="slide1" className="carousel-item relative w-full h-72  md:h-[600px] bg-[url('https://i.ibb.co/RQSby23/3d-electric-car-building.jpg')] bg-cover">
                <div data-aos="fade-down-left" className="mt-32 mx-auto text-center space-y-3">
                    <h1  ><span className="text-xl md:text-4xl font-extrabold text-[#166161]  "> Welcom to Dreams Home</span></h1>
                    <h2 className="text-xl  md:text-4xl font-extrabold text-[#186b6b] ">Your Getway to lurgary living</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div data-aos="zoom-in-down" id="slide2" className="carousel-item relative w-full h-72  md:h-[600px] bg-[url('https://i.ibb.co/YZ22QS4/francesca-tosolini-Xy-Gv-Ej587-Mc-unsplash.jpg')] bg-cover ">

                <div data-aos="zoom-in-down" className="mt-32 mx-auto text-center space-y-3">
                    <h1 ><span className="text-xl md:text-4xl font-extrabold text-[#1f8484]"> Welcom to Dreams Home</span></h1>
                    <h2 className="text-xl  md:text-4xl font-extrabold text-[#1f8484]">Your Getway to lurgary living</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div data-aos="fade-up-left" id="slide3" className="carousel-item relative w-full h-72  md:h-[600px] bg-[url('https://i.ibb.co/QbvCyBt/modern-luxury-domestic-room-comfortable-relaxation-generative-ai.jpg')] bg-cover ">

                <div data-aos="fade-up-left" className="mt-32 mx-auto text-center space-y-3">
                    <h1 ><span className="text-xl md:text-4xl font-extrabold text-[#1f8484]"> Welcom to Dreams Home</span></h1>
                    <h2 className="text-xl  md:text-4xl font-extrabold text-[#1f8484]">Your Getway to lurgary living</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div data-aos="fade-left" id="slide4" className="carousel-item relative w-full h-72  md:h-[600px]  bg-[url('https://i.ibb.co/HD2XBX7/francesca-tosolini-h-CU4fim-RW-c-unsplash.jpg')] bg-cover animate__animated animate__bounceInDown">

                <div data-aos="fade-up-left" className="mt-32 mx-auto text-center space-y-3">
                    <h1 data-aos="fade-up-left" ><span className="text-xl md:text-4xl font-extrabold text-[#1f8484]"> Welcom to Dreams Home</span></h1>
                    <h2 className="text-xl  md:text-4xl font-extrabold text-[#1f8484]">Your Getway to lurgary living</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Slider;