import React from 'react'
import { Container } from './style'
import { ReactComponent as Download } from "../../../assets/icons/import.svg"

const About = () => {
    return (
        <Container className='section' id='about'>
            <h2 className='section-title'>About me</h2>
            <span className='section-subtitle'>My Introduction</span>
            <div className='about__container container grid'>
                <div className='about__image'>
                    {/* <img src='./myPhoto.png' alt="myphoto" className='myPhoto' /> */}
                </div>
                <div className='about__data'>
                    <p className='about__description'>
                        I am a front end developer with
                        good ability and skills in creating
                        functional and beautiful web
                        sites. I often rely on my hard
                        working and creative personality
                        and I have a talent in logical
                        thinking.
                    </p>
                    <div className='about__info'>
                        <div>
                            <span className='about__info-title'>03+</span>
                            <span className='about__info-name'>IT Academy <br />Graduates</span>
                        </div>
                        <div>
                            <span className='about__info-title'>02+</span>
                            <span className='about__info-name'>Team <br /> Work</span>
                        </div>
                        <div>
                            <span className='about__info-title'>03+</span>
                            <span className='about__info-name'>Personal and Real <br /> Projects</span>
                        </div>
                    </div>
                    <div className='about__buttons'>
                        <a download="" href='./developerResume.pdf' className='button button--flex'>
                            Download CV <Download className="button__icon" style={{ width: "20px" }} />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About
