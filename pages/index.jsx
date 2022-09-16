import Header from '../components/pages/Header'
import Landing from '../components/pages/Landing'
import About from '../components/pages/About'
import HowItWorks from '../components/pages/HowItWorks'
import FAQs from '../components/pages/FAQs'
import Testimonials from '../components/pages/Testimonials'
import Partners from '../components/pages/Partners'
import Footer from '../components/pages/Footer'

import {useEffect} from 'react'

export default () => {
    return (
        <>
        <Header />
        <Landing />
        <About />
        <HowItWorks />
        <Testimonials />
        <Partners />
        <Footer />
        </>
    )
}
