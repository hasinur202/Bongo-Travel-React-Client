import React from 'react';

import doctor1 from '../../../images/doctors/doctors-1.jpg';
import doctor2 from '../../../images/doctors/doctors-2.jpg'
import doctor3 from '../../../images/doctors/doctors-3.jpg'
import doctor4 from '../../../images/doctors/doctors-4.jpg'
import Doctor from '../Doctor/Doctor';

const experts = [
    {
        img: doctor1,
        name: 'Walter White',
        expertize: 'Chief Medical Officer'
    },
    {
        img: doctor2,
        name: 'Sarah Jhonson',
        expertize: 'Anesthesiologist'
    },
    {
        img: doctor3,
        name: 'William Anderson',
        expertize: 'Cardiology'
    },
    {
        img: doctor4,
        name: 'Amanda Jepson',
        expertize: 'Neurosurgeon'
    },
]

const Doctors = () => {
    return (
        <section id="doctors" className="doctors section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>Doctors</h2>
                <p>Some specialized doctor information.</p>
                </div>
                <div className="row">
                    {
                        experts.map(expert => <Doctor
                            key={expert.name}
                            expert={expert}
                        >
                        </Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;