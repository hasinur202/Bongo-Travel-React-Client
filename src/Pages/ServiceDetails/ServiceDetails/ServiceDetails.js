import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const [tour, setTour] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        const url = `https://bongo-travel.herokuapp.com/tours/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTour(data));
    }, []);
    
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Tour Details</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={tour.img || ''} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-warning py-2 bx-tada-hover">Book {tour.name}</button>
                        </Link>
                        <h3 className="text-left">{tour.name || ''}</h3>
                        <p className="fst-italic text-left">
                            {tour.short_description || ''}
                        </p>
                        <ul>
                            <li><i className="text-left bi bi-check-circle"></i>Price: $4545</li>
                        </ul>
                        <p className="text-justify">
                            {tour.description || ''}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;