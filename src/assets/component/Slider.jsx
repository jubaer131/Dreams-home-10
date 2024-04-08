

const Slider = () => {
    return (
        <div className="carousel w-full rounded-3xl mt-10">
            <div id="slide1" className="carousel-item relative w-full h-72  md:h-[600px]">
                <img src="https://i.ibb.co/RQSby23/3d-electric-car-building.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-72  md:h-[600px]">
                <img src="  https://i.ibb.co/SJKrTP9/tall-apartment-buildings-with-modern-design.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-72  md:h-[600px]">
                <img src="https://i.ibb.co/QbvCyBt/modern-luxury-domestic-room-comfortable-relaxation-generative-ai.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-72  md:h-[600px]">
                <img src="https://i.ibb.co/jbSVhZq/cozy-living-room-interior-with-panoramic-window.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Slider;