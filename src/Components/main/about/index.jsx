import React from 'react'
import { Container } from './style'

const About = () => {
    return (
        <Container id='about'>


            <h2 className='section-title'>About me</h2>
            <span className='section-subtitle'>My Introduction</span>
            <div className='about__container container grid'>
                <div className='about__image'>
                    <img src='./photo3.png' alt="myphoto" />
                </div>
                <div className='about__data'>
                    <p className='about__description'>
                        I am a front end developer with
                        long experience in creating
                        functional and beautiful web
                        sites. I often rely on my hard
                        working and creative personality
                        and I have a talent in logical
                        thinking.
                    </p>
                    <div className='about__info'>
                        <div>
                            <span className='about__info-title'>02+</span>
                            <span className='about__info-name'>Team <br /> work</span>
                        </div>
                        <div>
                            <span className='about__info-title'>02+</span>
                            <span className='about__info-name'>Team <br /> work</span>
                        </div>
                        <div>
                            <span className='about__info-title'>02+</span>
                            <span className='about__info-name'>Team <br /> work</span>
                        </div>
                    </div>
                    <div className='about__buttons'>
                        <a download="" href='./developerResume.pdf' className='button button--flex'>
                            Download CV <i className="uil uil-import button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About
