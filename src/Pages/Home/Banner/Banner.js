import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css'

const Banner = () => {
    return (     
        <>       
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-50"
                    src={banner3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="slide-container">
                        <h2>EXPERIENCE THE NATURE'S BEAUTY</h2>
                        <p className="bg-info px-2"> Enhance your creativity. " To roam the roads of lands remote, To travel is to live. " ~ Hans Christian Andersen</p>
                        <button className="btn-get-started btn-info scrollto">Read More</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-75"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="slide-container">
                        <h2>Welcome to <span>BONGO TRAVEL</span></h2>
                        <p className="text-white">BONGO TRAVEL, Dhaka, Bangladesh is one of the best Travel Agency Company. The hospital is a 150 beds and tertiary care facility, Many people can travelling with an affordable price.</p>
                        <button className="btn-get-started btn-info scrollto">Read More</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-50"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="slide-container">
                        <h2>TRAVELLING AROUND THE BANGLADESH</h2>
                        <p className="bg-info px-2">Achieve peace of mind. Travel is your cure!</p>
                        <button className="btn-get-started btn-info scrollto">Read More</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <section id="features" className="features">
            <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2><span className="text-success">WHY</span> CHOOSE US</h2>
            </div>

                <div className="row">
                <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                    <div className="icon-box mt-5 mt-lg-0 activityCont">
                        <i className="bx bx-receipt"></i>
                        <h4>Cost Effective</h4>
                        <p>We are very well known that how much you have worked hard for your savings. In addition, we want to save as much as possible on your trips and get the best services.</p>
                    </div>
                    <div className="icon-box mt-5 activityCont">
                        <i class="fas fa-dollar-sign"></i>
                        <h4>No Hidden Charges</h4>
                        <p>This is the most commong thing that is suffered by most of the people. Bongo Travel has a policy that says "NO HIDDEN CHARGES".</p>
                    </div>
                    <div className="icon-box mt-5 activityCont">
                    <i class="fas fa-chart-line"></i>
                        <h4>Quality Assurance</h4>
                        <p>We guarantee that you will enjoy and have fun with our loved ones during your holidays. </p>
                    </div>
                    <div className="icon-box mt-5 activityCont">
                        <i className="bx bx-shield"></i>
                        <h4>Hassle Free Travelling</h4>
                        <p>Our expert guide will ensure that you face no problems and stay completely hassle free throughout the entire tour, just relax, and have fun.</p>
                    </div>
                </div>
                <div className="image col-lg-6 order-1 order-lg-2" style={{backgroundImage: `url("assets/img/about-1.jpg")`}} data-aos="zoom-in"></div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Banner;