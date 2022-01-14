import React, { useState } from 'react'
import { Container } from "./style"

//ICONS:
import { ReactComponent as Apps } from "../../assets/icons/apps.svg"
import { ReactComponent as Home } from "../../assets/icons/house-door.svg"
import { ReactComponent as About } from "../../assets/icons/person.svg"
import { ReactComponent as Skill } from "../../assets/icons/file.svg"
import { ReactComponent as Service } from "../../assets/icons/briefcase.svg"
import { ReactComponent as Portfolio } from "../../assets/icons/image.svg"
import { ReactComponent as Contact } from "../../assets/icons/send.svg"
import { ReactComponent as Close } from "../../assets/icons/x.svg"

const Header = () => {
    const [active, setActive] = useState(false)
    const onToggle = () => {
        setActive(true);
    }
    const onClose = () => {
        setActive(false)
    }
    const linkAction = () => {
        setActive(false);
    }

    return (


        <Container className='header scroll-header' id='header' active={active} >
            <nav className='nav container' >
                <a href='#home' className='nav__logo'>Akbarjon</a>
                <div className='nav__menu' id='nav-menu' >
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link' onClick={linkAction}>
                                <Home style={{ width: "30px" }} className="navIcon"></Home> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' className='nav__link' onClick={linkAction}>
                                <About className="navIcon"></About> About
                            </a>
                        </li><li className='nav__item'>
                            <a href='#skills' className='nav__link' onClick={linkAction}>
                                <Skill className="navIcon"></Skill> Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#service' className='nav__link' onClick={linkAction}>
                                <Service className="navIcon"></Service> service
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#portfolio' className='nav__link' onClick={linkAction}>
                                <Portfolio className="navIcon"></Portfolio> Portfolio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' className='nav__link' onClick={linkAction}>
                                <Contact style={{ transform: "rotate(45deg)" }} className="navIcon"></Contact> Contact me
                            </a>
                        </li>

                    </ul>
                    <Close style={{ color: "black" }} className=" nav__close" id='nav-close' onClick={onClose}></Close>
                </div>
                <div className='nav__btns '>
                    {/* <i className="uil uil-moon change-theme"></i> */}
                    <div onClick={onToggle} className='nav__toggle' id='nav-toggle'>
                        <Apps className="app"></Apps>
                    </div>
                </div>
            </nav>
        </Container>


    )
}

export default Header
