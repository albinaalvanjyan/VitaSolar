import { useState } from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import './App.scss'
import HeaderSection from './../components/HeaderSection/HeaderSection';
import AboutUs from '../components/AboutUs/AboutUs';
import SolarKits from '../components/SolarKits/SolarKits';
import CalculatorRender from './../components/CalculatorRender/CalculatorRender';
import OurWorks from '../components/OurWorks/OurWorks';
import Footer from '../components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <HeaderSection />
        <AboutUs />
        <SolarKits />
        <CalculatorRender />
        <OurWorks />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
