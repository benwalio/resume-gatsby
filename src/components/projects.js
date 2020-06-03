import React from 'react'
import { ResumeSection } from '../assets/styles/main'
import { Organization, Type, Description } from '../assets/styles/projects'

const Projects = (props) => {
    return (
        <ResumeSection>
            {props.content.map((project, idx) => 
            <>
                <Organization render={project.organization} />
                <Type render={project.type} />
                <Description render={project.project_description} />
            </>
            )}
        </ResumeSection>
    )
}

export default Projects
