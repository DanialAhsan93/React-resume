import React from 'react';
import Navbar from '../Navbar/Navbar';
import Aboutsec1 from './Aboutsec1';
import Aboutsec2 from './Aboutsec2';
import Aboutsec3 from './Aboutsec3';
import Aboutsec4 from './Aboutsec4';
import Footer from '../reusables/Footer';
export default function About() {
  const styles = {
    background:'var(--bs-primary)'
  }
  return (
    <>
    <Navbar />
    <Aboutsec1 mainhead='About Us' habout='Find out what sets us apart from the competition'
    pabout='With our innovative blend of technology and intuitive user experience, crafting 
    resumes becomes effortless' customstyle={styles}/> 
    <Aboutsec2 />
    <Aboutsec3 />
    {/* <Aboutsec4 /> */}
    <Footer />

    </>
  )
}
