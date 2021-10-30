import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Members from '../Members/Members';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Members></Members>
            <Contact></Contact>
        </div>
    );
};

export default Home;