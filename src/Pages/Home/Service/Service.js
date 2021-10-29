import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, short_description, img } = service;
    return (
        <>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                    <img src={img} className="img-fluid serviceImg" alt="" />
                    <div className="social">
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-warning py-2 bx-tada-hover">Book Now <i className="fas fa-suitcase-rolling"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="member-info">
                    <h4 className="title">{name}</h4>
                    <p className="description">{short_description}</p>

                    <Link to={`/service-details/${_id}`}>
                        <button className="btn btn-success mt-3">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
    );
};

export default Service;