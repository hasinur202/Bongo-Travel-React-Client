import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
// import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css'

const Banner = () => {
    return (     
        <>       
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block banner w-100 h-75"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="slide-container">
                        <h2>Welcome to <span>BONGO TRAVEL</span></h2>
                        <p>ANI General Hospital, Dhaka is the newest hospital one of the largest Bangladeshi health care provider. The hospital is a 150 beds and tertiary care facility, delivering international standard health care at an affordable price to the peoples of Bangladesh</p>
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
                        <h2>Audiology</h2>
                        <p>Home health services like intermittent skilled nursing care, physical therapy, speech-language pathology, continued occupational services.</p>
                        <button className="btn-get-started btn-info scrollto">Read More</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <section id="features" className="features">
            <div className="container" data-aos="fade-up">

                <div className="row">
                <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right">
                    <div className="icon-box mt-5 mt-lg-0 activityCont">
                        <i className="bx bx-receipt"></i>
                        <h4>Est labore ad</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                    <div className="icon-box mt-5 activityCont">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Harum esse qui</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                    <div className="icon-box mt-5 activityCont">
                        <i className="bx bx-images"></i>
                        <h4>Aut occaecati</h4>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                    <div className="icon-box mt-5 activityCont">
                        <i className="bx bx-shield"></i>
                        <h4>Beatae veritatis</h4>
                        <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                    </div>
                </div>
                <div className="image col-lg-6 order-1 order-lg-2" style={{backgroundImage: `url("assets/img/features.jpg")`}} data-aos="zoom-in"></div>
                </div>
            </div>
        </section>
        {/* <section id="cta" className="cta">
            <div className="container" bg="dark" data-aos="zoom-in">
                <div className="text-center">
                <h3>In an emergency? Need help now?</h3>
                <p> Every patient has the right to fast and adequate emergent medical care. We need better systems, more professionals and more resources. Support Emergency Carers. Celebrate EM-Day with us.</p>
                <Link className="cta-btn scrollto" to="/appointment">Make an Appointment</Link>
                </div>
            </div>
        </section> */}
        </>
    );
};

export default Banner;