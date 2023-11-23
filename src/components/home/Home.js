import React from 'react'
import Navbar from '../Navbar/Navbar';
import Banner from './Banner';
import Section2 from './Section2';
import Section3 from '../reusables/Section3';
import Section4 from './Section4';
import Footer from '../reusables/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Contactsec3 from '../reusables/Contactsec3';
export default function Home() {
    return (
        <>

        <Navbar />
        <Banner />
        <Section2 />
        <Section3 />
        <Section4 />
        <Contactsec3 />
        <Footer />




        </>
    )
}
