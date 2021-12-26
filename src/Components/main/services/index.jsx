import React, { useState } from 'react'
import { Container } from './style'

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
        <Container active1={active1} active2={active2} className='services section ' id="service">
            <h2 className='services-title'>Services</h2>
            <p className='services-subtitle' style={{ marginBottom: "3rem" }}>What I offer</p>

            <div className='services__container container grid'>

                {/* <<<<<<<<<<<<<<<<<<<CONTENT1>>>>>>>>>>>>>>>>> */}


                <div className='services__content'>
                    <i className="uil uil-arrow services__icon" ></i>
                    <h3 className='services__title'>Front End <br /> Developer</h3>
                    <span onClick={onShow1} className=' button--flex button--small button--link services__button'>
                        View More <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className='services__modal ServiceOne'>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>Front End <br /> Developer</h4>
                            <i onClick={onClose} className="uil uil-times services__modal-close"></i>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I position your brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* <<<<<<<<<<<<<<<<<<<CONTENT2>>>>>>>>>>>>>>>>> */}

                <div className='services__content'>
                    <i class="uil uil-pen services__icon"></i>
                    <h3 className='services__title'>Branding <br /> Designer </h3>
                    <span onClick={onShow2} className=' button--flex button--small button--link services__button'>
                        View More <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className='services__modal ServiceTwo'>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'>Branding <br /> Designer</h4>
                            <i onClick={onClose} className="uil uil-times services__modal-close"></i>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Web page development.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I develop the user interface.</p>
                                </li>
                                <li className='services__modal-service'>
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>I position your brand.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Services
