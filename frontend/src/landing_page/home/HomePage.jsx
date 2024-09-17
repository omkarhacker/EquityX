import React, { useEffect } from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        if (urlParams.get('signOut') === 'true') {
          localStorage.removeItem("token"); // Remove token from localStorage
          navigate('/'); // Redirect to login or home page
        }
      }, [location.search, navigate]);
    return ( 
        <div>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </div>
     );
}

export default HomePage;