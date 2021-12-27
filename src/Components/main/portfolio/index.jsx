import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-right.svg"
import { ReactComponent as Send } from "../../../assets/icons/send.svg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Portfolio = () => {
    return (
        <div className='portfolio section' id="portfolio">
            <h2 className='section-title'>Portfolio</h2>
            <span className='section-subtitle'>Most recent work</span>
            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className=' portfolio__container container mySwiper'>
                {/* <<<<<<<<<<<<<<<<<<PORTFOLIO CONTENT 1>>>>>>>>>>>>>>> */}
                <SwiperSlide className='portfolio__content grid'>
                    <img src='./Maxsulotlar.png' alt='imgae' className='portfolio__img' />
                    <div className='portfolio__data'>
                        <h3 className='portfolio__title'>Modern Website</h3>
                        <p className='portfolio__description'>Website for fast food delivery with amazing GUI and good functionnality for the end-users</p>
                        <a href='#' className='button button--flex button--small portfolio__button'>

                            Demo
                            <Arrow className="t button__icon"></Arrow>
                        </a>
                    </div>
                </SwiperSlide>

                {/* <<<<<<<<<<<<<<<<<<PORTFOLIO CONTENT 1>>>>>>>>>>>>>>> */}

                <SwiperSlide className='portfolio__content grid'>
                    <img src='./Maxsulotlar.png' alt='imgae' className='portfolio__img' />
                    <div className='portfolio__data'>
                        <h3 className='portfolio__title'>Brand Design</h3>
                        <p className='portfolio__description'>Website for fast food delivery with amazing GUI and good functionnality for the end-users</p>
                        <a href='#' className='button button--flex button--small portfolio__button'>

                            Demo
                            <i className="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </SwiperSlide>

                {/* <<<<<<<<<<<<<<<<<<PORTFOLIO CONTENT 2>>>>>>>>>>>>>>> */}

                <SwiperSlide className='portfolio__content grid'>
                    <img src='./Maxsulotlar.png' alt='imgae' className='portfolio__img' />
                    <div className='portfolio__data'>
                        <h3 className='portfolio__title'>Online Store</h3>
                        <p className='portfolio__description'>Website for fast food delivery with amazing GUI and good functionnality for the end-users</p>
                        <a href='#' className='button button--flex button--small portfolio__button'>

                            Demo
                            <i className="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='project section'>
                <div className='project__bg'>
                    <div className='project__container container grid'>
                        <div className='project__data'>
                            <h2 className='project__title'>You need a Frontend Developer</h2>
                            <p className='project__description'>Contact me now and hire one of the best developers ;)</p>
                            <a href='#contact' className='button button--flex button--white'>
                                Contact me
                                <Send className=" button__icon" style={{ transform: "rotate(45deg)" }}></Send>
                            </a>
                        </div>
                        <img src='./photo4.png' alt='alt' className='project__img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
