import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://bongo-travel.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <>
        <section id="services" className="doctors section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>Popular Tours</h2>
                <p>The below tours are very popular in tour planning services..</p>
                </div>
                {/* services.slice(0, 6).map */}
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </section>
        </>
    );
};

export default Services;