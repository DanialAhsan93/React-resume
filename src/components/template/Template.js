import React from 'react';
import Navbar from '../Navbar/Navbar';
import Aboutsec1 from '../about/Aboutsec1';
import Section3 from '../reusables/Section3';
import Section4 from '../home/Section4';
import Footer from '../reusables/Footer';
import Templatesec1 from './Templatesec1';
import Templatesec2 from './Templatesec2';

export default function Template() {
  return (
    <>
    <Navbar />
    <Aboutsec1 mainhead='CV / Resume Templates ' pabout='View our list of resume/CV templates for every
     profession and career.'/>
     <Templatesec1 />
     <Templatesec2 />

    {/* <Section3 /> */}
    {/* <Section4 /> */}

    <Footer />




    </>
  )
}
