import React from 'react'
import { obj } from '../../../utils/skills'
import MySkills from './skills'
import { Container } from './style'
import { nanoid } from "nanoid"

const Skills = () => {

    return (
        <Container className='skill section ' id='skills'>
            <h2 className='section-title'>Skills</h2>
            <span className='section-subtitle'>My technical skills</span>
            <div className='skills__container  '>
                <div className='myskills'>
                    {obj.map((value) => (
                        <MySkills key={nanoid(3)} value={value} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Skills
