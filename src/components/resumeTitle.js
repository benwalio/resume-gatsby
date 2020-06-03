import React from 'react'
import { RichText } from "prismic-reactjs";

const ResumeTitle = (props) => {
    return (
        <>
            <RichText render={props.title} />
        </>
    )
}

export default ResumeTitle
