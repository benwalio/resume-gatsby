import React from 'react'
import ResumeTitle from './resumeTitle'

function SliceZone(props) {
    const body = props.body;
    return (
        <>
            {body.map((bodyContent, idx) => {
                if (bodyContent.type === 'resume_title') {
                    return <ResumeTitle key={idx} title={bodyContent.primary.name} />
                }
            })}
            
        </>
    )
}

export default SliceZone
