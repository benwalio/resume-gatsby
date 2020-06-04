import React from 'react'
import { Title, TitleBox } from "../assets/styles/title";

const ResumeTitle = (props) => {
    return (
        <TitleBox align='center'>
            <Title render={props.title} />
        </TitleBox>
    )
}

export default ResumeTitle
