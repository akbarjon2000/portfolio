import React, { useState } from 'react'
import { Container } from "./style"
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
        <Container className='header' id='header' active={active}>
            <nav className='nav container'>
                <a href='#' className='nav__logo'>Akbarjon</a>
                <div className='nav__menu' id='nav-menu' >
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link' onClick={linkAction}>
                                <i className="nav__icon uil uil-estate"></i> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' className='nav__link' onClick={linkAction}>
                                <i className="nav__icon uil uil-user"></i> About
                            </a>
                        </li><li className='nav__item'>
                            <a href='#skills' className='nav__link' onClick={linkAction}>
                                <i className="nav__icon uil uil-file-alt"></i> Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#service' className='nav__link' onClick={linkAction}>
                                <i className="nav__icon uil uil-briefcase-alt"></i> service
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#portfolio' className='nav__link' onClick={linkAction}>
                                <i className="nav__icon uil uil-scenery"></i> Portfolio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' className='nav__link' onClick={linkAction}>
                                <i className="nav__icon uil uil-message"></i> Contact me
                            </a>
                        </li>

                    </ul>
                    <i className="uil uil-times nav__close" id='nav-close' onClick={onClose}></i>
                </div>
                <div className='nav__btns '>
                    <div onClick={onToggle} className='nav__toggle' id='nav-toggle'>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </Container>
    )
}

export default Header
