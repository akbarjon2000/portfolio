import React, { useState } from 'react'
import { Container } from './style'
import { ReactComponent as Pen } from "../../../assets/icons/pen.svg"
import { ReactComponent as Code } from "../../../assets/icons/file-code.svg"
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-right.svg"
import { ReactComponent as Check } from "../../../assets/icons/check.svg"
import { ReactComponent as X } from "../../../assets/icons/x.svg"
const Services = () => {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const onShow1 = () => {
        setActive1(true)
    }
    const onShow2 = () => {
        setActive2(true)
    }
    const onClose = () => {
        setActive1(false)
        setActive2(false)
    }
    return (
        <Container active1={active1} active2={active2} className='services section' id="service">
            <h2 className='services-title'>Services</h2>
            <p className='services-subtitle' style={{ marginBottom: "3rem" }}>What I offer</p>

            <div className='services__container container grid'>

                {/* <<<<<<<<<<<<<<<<<<<CONTENT1>>>>>>>>>>>>>>>>> */}


                <div className='services__content'>
                    <Code className="services__icon" style={{ margin: "0", padding: "0" }} />
                    <h3 className='services__title'>Front End <br /> Developer</h3>
                    <span onClick={onShow1} className=' button--flex button--small button--link services__button'>
                        View More <Arrow className="button__icon" />
                    </span>
                    <div className='services__modal ServiceOne'>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>Front End <br /> Developer</h4>
                            <X onClick={onClose} className=" services__modal-close"></X>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <Check className="services__modal-icon" />
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <Check className="services__modal-icon" />
                                    <p>Web page development.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <Check className="services__modal-icon" />
                                    <p>Providing responsivness.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <Check className="services__modal-icon" />
                                    <p>I position your brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* <<<<<<<<<<<<<<<<<<<CONTENT2>>>>>>>>>>>>>>>>> */}

                <div className='services__content'>
                    <Pen className="services__icon" style={{ opacity: "0.5" }} />
                    <h3 className='services__title'>Branding <br /> Designer </h3>
                    <span onClick={onShow2} className=' button--flex button--small button--link services__button'>
                        View More <Arrow className="button__icon" />
                    </span>
                    <div className='services__modal ServiceTwo'>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>Branding <br /> Designer</h4>
                            <X onClick={onClose} className=" services__modal-close"></X>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <Check className="services__modal-icon" />
                                    <p>I create branding design.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <Check className="services__modal-icon" />
                                    <p>I use design libraries.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <Check className="services__modal-icon" />
                                    <p>Providing ease for the end-users.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <Check className="services__modal-icon" />
                                    <p>Code reusability.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </Container >
    )
}

export default Services
