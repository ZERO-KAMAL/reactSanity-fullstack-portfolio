import React, { useState } from 'react'
import { HiSun, HiMoon } from "react-icons/hi";

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';

import './App.scss'



const App = () => {

    const [dayNight, setdayNight] = useState(false);
    const ToggleDaynight = () => {
        dayNight ? setdayNight(false) : setdayNight(true);
    }
    return (
        <div className={dayNight ? "darkTheme" : "App"}>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
            <button className="day__night" onClick={ToggleDaynight}>{dayNight ? <HiSun /> : <HiMoon className='moon__icon' />} </button>
        </div>
    );
}

export default App