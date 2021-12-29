import React from 'react'
import { ReactComponent as Teleg } from "../../assets/icons/teleg.svg"
import { ReactComponent as Insta } from "../../assets/icons/insta.svg"
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg"
const Footer = () => {
    return (
        <>

            <div className='footer'>
                <div className='footer__bg'>
                    <div className='footer__container container grid'>
                        <div>
                            <h1 className='footer__title'> Akbarjon</h1>
                            <p className='footer__subtitle'>Frontend Developer</p>
                        </div>
                        <ul className='footer__links'>
                            <li>
                                <a className='footer__link' href='#service'>Services</a>
                            </li>
                            <li>
                                <a className='footer__link' href='#portfolio'>Portfolio</a>
                            </li>
                            <li>
                                <a className='footer__link' href='#contact' style={{ display: "flex", minWidth: "100px", flexDirection: "row" }}>Conatact me</a>
                            </li>
                        </ul>
                        <div className='footer__socials'>
                            <a className='footer__social' href='https://telegram.org/'>
                                <Teleg style={{ width: "20px" }} />
                            </a>
                            <a className='footer__social' href='https://www.instagram.com/akbarjonabdulkhamidov/'>
                                <Insta style={{ width: "20px" }} />
                            </a>
                            <a className='footer__social' href='https://twitter.com/Akbarjo18812608'>
                                <Twitter style={{ fill: "#fff" }} />
                            </a>
                        </div>
                    </div>
                    <p className='footer__copy'>&#169; Akbarjon. All Rights Reserved</p>
                </div>
            </div>
            {/* <a href='#' className='scrollup'>
                <i class="uil uil-arrow-up scroll__up-icon"></i>
            </a> */}
        </>
    )
}

export default Footer
