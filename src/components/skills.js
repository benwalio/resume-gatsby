import React from 'react'
import { ResumeSection } from '../assets/styles/main'
import { SkillName, SkillStrength } from '../assets/styles/skills'

const Skills = (props) => {
    return (
        <ResumeSection>
            {props.skills.map((skill, idx) => 
            <>
                <SkillName render={skill.name} />
                <SkillStrength>{skill.skill_strength}</SkillStrength>
            </>
            )}
            
        </ResumeSection>
    )
}

export default Skills
