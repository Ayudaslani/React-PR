import './Exploremore.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Collapse } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from 'react';
import SliderSection from '../Silder-section/SilderSection';
import exploremore from '/src/image/exploremore-1.webp'
import exploremore2 from '/src/image/exploremore2.webp'
import exploremore3 from '/src/image/exploremore3.avif'
import exploremore4 from '/src/image/exploremore5.jpg'
import exploremore5 from '/src/image/exploremore6.jpeg'
import exploremore6 from '/src/image/exploremore7.webp'
import saleposter from '/src/image/saleposter.jpeg'
import banner4 from '/src/image/banner-4.png'
import banner5 from '/src/image/banner-5.png'
import banner6 from '/src/image/banner-6.png'
import icon1 from '/src/image/icon-1.jpeg'
import icon2 from '/src/image/icon-2.png'
import icon3 from '/src/image/icon-3.jpeg'
import icon4 from '/src/image/icon-4.png'
import icon5 from '/src/image/icon-5.webp'
import icon6 from '/src/image/icon-6.jpeg'
import icon7 from '/src/image/icon-7.png'
import icon8 from '/src/image/icon-8.png'
import icon9 from '/src/image/icon-9.png'
import icon10 from '/src/image/icon-10.png'
const Explormore = () => {
    const [open, setOpen] = useState(false);
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

            <section className="py-5">
                <div className="container">
                    <div className="row text-center">
                        <h3 className="mb-4">EXPLORE MORE</h3>
                        <div className="col-6 col-lg-2 mb-3">
                            <img src={exploremore} className="img-fluid rounded" alt="explore1" />
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <img src={exploremore2} className="img-fluid rounded" alt="explore2" />
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <img src={exploremore3} className="img-fluid rounded" alt="explore3" />
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <img src={exploremore4} className="img-fluid rounded" alt="explore4" />
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <img src={exploremore5} className="img-fluid rounded" alt="explore4" />
                        </div>
                        <div className="col-6 col-lg-2 mb-3">
                            <img src={exploremore6} className="img-fluid rounded" alt="explore4" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-2">
                <div className="container">
                    <div className="row">
                        <div className="saleposter-image">
                            <img src={saleposter}></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-3'>
                <div className='container'>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-6 d-flex justify-content-start'>
                            <h3> UP To  60% OFF</h3>
                        </div>
                        <div className='col-6 col-6 d-flex justify-content-end'>
                            <button style={{ border: "2px solid black", borderRadius: "20px", background: "transparent", height: "45px", width: "35%" }}>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="slide">
                                <img src={banner4} alt="slide1" />
                            </div>
                            <div className="slide">
                                <img src={banner5} alt="slide2" />
                            </div>
                            <div className="slide">
                                <img src={banner6} alt="slide3" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section className='pt-5'>
                <SliderSection></SliderSection>
            </section>

            <section className="mb-4 pt-5">
                <div
                    className="d-flex justify-content-between align-items-center bg-dark text-white px-4 py-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpen(!open)}
                >
                    <h6 className="m-0 text-uppercase">
                        More about online shopping at Megamart
                    </h6>
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                <Collapse in={open}>
                    <div className="bg-light text-dark p-4">
                        <div className="container">
                            <h5 className="fw-bold mb-3">Why Shop at Megamart?</h5>
                            <p className="mb-2">
                                Megamart brings you the latest trends in fashion, footwear, and accessories
                                from the world’s top brands — all in one place. Enjoy amazing deals, fast
                                delivery, and an easy return process for a seamless shopping experience.
                            </p>
                            <p className="mb-0">
                                Explore categories including men's, women's, and kids' fashion,
                                as well as lifestyle and home essentials. Shop smart, save more!
                            </p>
                        </div>
                    </div>
                </Collapse>
            </section>

            <section className='pb-5'>
                <div className='container'>
                    <div className='row d-flex align-items-center justify-content-center'>
                        <div className='col-3'>
                            <img src={icon1} className="brand-img"></img>
                        </div>
                        <div className='col-3'>
                            <img src={icon2} className="brand-img"></img>
                        </div>
                        <div className='col-3'>
                            <img src={icon3} className="brand-img"></img>
                        </div>
                        <div className='col-3'>
                            <img src={icon4} className="brand-img">

                            </img>
                        </div>

                        <div className='col-3'>
                            <img src={icon5}  className="brand-img">

                            </img>
                        </div>
                        <div className='col-3'>
                            <img src={icon6} className="brand-img"></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5 bg-black text-white'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-12'>
                            <h3>CONNECT WITH US</h3>
                            <p className='text-center'>Be the First to Know about new products, exclusive collections, <br></br>latest trends adn more</p>
                            <div className='d-flex gap-3 justify-content-center'>
                                <input placeholder='Enter your Email address' style={{ border: "1px solid white", background: "	#272626ff", borderRadius: "8px", padding: "8px 40px" }}></input>
                                <button style={{ background: "#e0dedeff", border: "0px", borderRadius: "18px", padding: "10px 30px" }}> SUBSCRIBE</button>
                            </div>
                            <div className='mt-2'>
                                <input type='checkbox'></input> I agree to receive marketing emails/SMS/texts<br></br> and have read and accepted the Terms & condition and Privacy Policy.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='products-section py-3'>
                <div className='container'>
                    <div className='row d-flex justify-content-center text-center'>
                        <div className='col-6 col-lg-2'>
                            <img src={icon7} className='product-image'></img>
                            <p>1L + products</p>
                        </div>
                        <div className='col-6 col-lg-2'>
                            <img src={icon8} className='product-image'></img>
                            <p>Easy 15 Days</p>
                        </div>
                        <div className='col-6 col-lg-2'>
                            <img src={icon9} className='product-image'></img>
                            <p>Authentic Brands</p>
                        </div>
                        <div className='col-6 col-lg-2'>
                            <img src={icon10} className='product-image'></img>
                            <p>Free Shipping</p>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
export default Explormore;