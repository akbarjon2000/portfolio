import React from 'react'
import { Container } from './style'
import Home from './home'
import About from './about'
import Skills from './skills'
import Qualifications from './qualifications'
import Services from './services'
import Portfolio from './portfolio'
import Contact from './contact'
const Main = () => {
    return (
        <Container>
            <Home />
            <About />
            <Skills />
            <Qualifications />
            <Services />
            <Portfolio />
            <Contact />
        </Container >
    )
}

export default Main
