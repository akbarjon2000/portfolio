import React, { useState } from 'react'
import { ReactComponent as Cap } from "../../../assets/icons/graduation-cap.svg"
import { ReactComponent as Case } from "../../../assets/icons/briefcase-alt.svg"
import { ReactComponent as Calendar } from "../../../assets/icons/calendar-alt.svg"
import { Container } from './style'

const Qualifications = () => {
    const [active, setActive] = useState(null)
    return (
        <Container className='qualification section' active={active}>
            <h2 className='section-title'>Qualification</h2>
            <span className='section-subtitle'>My personal journey</span>
            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div className='qualification__button button--flex' onClick={() => setActive(true)} style={{ cursor: "pointer" }}>
                        <Cap style={{ width: "1.8rem", fontWeight: "500", cursor: "pointer" }} />  Education
                    </div>
                    <div className='qualification__button button--flex' onClick={() => setActive(false)} style={{ cursor: "pointer" }}>
                        <Case style={{ width: "1.8rem", fontWeight: "500", cursor: "pointer" }} /> Work
                    </div>
                </div>
                <div className='qualification__sections'>

                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<content1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


                    <div className='qualification__content education'>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification-title'>Computer Engineering</h3>
                                <span className='qualification-subtitle'>Gachon University</span>
                                <div className='qualification__calendar' >
                                    <Calendar style={{ width: "1rem", color: "grey" }} />
                                    2021-2024
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>


                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>Web Development</h3>
                                <span className='qualification-subtitle'>Web Brain IT Academy</span>
                                <div className='qualification__calendar' >
                                    <Calendar style={{ width: "1rem", color: "grey" }} />
                                    2021
                                </div>
                            </div>

                        </div>


                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification-title'>Web Design</h3>
                                <span className='qualification-subtitle'>Ali Tech IT Academy</span>
                                <div className='qualification__calendar' >
                                    <Calendar style={{ width: "1rem", color: "grey" }} />
                                    2021
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>


                    </div>


                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<content2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <div className='qualification__content work'>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification-title'>Team Work</h3>
                                <span className='qualification-subtitle'>Web Brain IT Academy</span>
                                <div className='qualification__calendar' >
                                    <Calendar style={{ width: "1rem", color: "grey" }} />
                                    2021
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>


                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>Team Work</h3>
                                <span className='qualification-subtitle'>Ali Tech IT Academy</span>
                                <div className='qualification__calendar' >
                                    <Calendar style={{ width: "1rem", color: "grey" }} />
                                    2021
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Qualifications
