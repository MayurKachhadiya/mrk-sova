import React from 'react';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Price from './Price';
import Section from './Section';
import Team from './Team';
import Testimony from './Testimony';

const Allpage = (val) => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Testimony/>
      <Team/>
      <Section/>
      <Price/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Allpage;
