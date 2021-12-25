import React, { useState } from 'react'
import { Skills } from './style';
import { nanoid } from "nanoid"
const MySkills = ({ value }) => {
    const [show, setShow] = useState(false)
    const [id, setId] = useState(null);
    console.log(id);
    const onShow = (id) => {
        setShow(!show);
        setId(id)
    }
    return (
        <Skills show={show} className='skills__content' onClick={() => onShow(value.id)}>
            <div className='skills__header'>
                <value.Icon className="skills__icon" />
                <h1 className='skills__title'>{value.title}</h1>
                <value.arrow className="skills__arrow" />

            </div>
            <div className='skills__list grid'>
                {value.skills.map((item) => (
                    <span key={nanoid(3)} className='skills__name'>{item}</span>
                ))}



            </div>
        </Skills>
    )
}

export default MySkills
