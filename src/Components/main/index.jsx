import React from 'react'
import { Container } from './style'
import Home from './home'
import About from './about'
import Skills from './skills'
import Qualifications from './qualifications'
import Services from './services'
const Main = () => {
    return (
        <Container>
            <Home />
            <About />
            <Skills />
            <Qualifications />
            <Services />
        </Container >
    )
}

export default Main
