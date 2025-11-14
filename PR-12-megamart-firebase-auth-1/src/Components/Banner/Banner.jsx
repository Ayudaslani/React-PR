import Slider from "react-slick";
import './Banner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "/src/image/banner-1.png"
import banner2 from "/src/image/banner-2.png"
import banner3 from "/src/image/banner-3.png"
const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };
    return (
        <>
            <section>
                <div className="container">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="slide">
                                <img src={banner1} alt="slide1" />
                            </div>
                            <div className="slide">
                                <img src={banner2} alt="slide2" />
                            </div>
                            <div className="slide">
                                <img src={banner3} alt="slide3" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

        </>
    )
}


export default Banner;