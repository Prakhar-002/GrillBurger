import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from "./components/Services/Services.jsx"
import Banner from './components/Banner/Banner.jsx'
import AppStore from './components/AppStore/AppStore.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
import Footer from './components/Footer/Footer.jsx'

import Aos from "aos";
import "aos/dist/aos.css";


const App = () => {
      React.useEffect(() => {
            Aos.init({
                  offset:200,
                  duration:800,
                  easing: "ease-in-sine",
                  delay:100
            });
      });
      return (
            <div>
                  <Navbar/>
                  <Hero/>
                  <Services/>
                  <Banner/>
                  <AppStore/>
                  <Testimonial/>
                  <Footer/>
            </div>
      )
}

export default App
