import React from 'react'
import { ResumeSection } from '../assets/styles/main'
import { Company, JobTitle, DateSpan, Location, Responsibilities } from '../assets/styles/employmentHistory'

import moment from 'moment';

const employmentHistory = (props) => {
    return (
        <ResumeSection>
            {props.content.map((entry, idx) => 
            <>
                <Company render={entry.company_title} />
                <JobTitle render={entry.job_title} />
                <DateSpan>{moment(entry.start_date).format("MMM YYYY")} - { entry.end_date ? moment(entry.end_date).format("MMM YYYY") : 'Present'}</DateSpan>
                <Location render={entry.location} />
                <Responsibilities render={entry.job_responsibilities} />
            </>
            )}
        </ResumeSection>
    )
}

export default employmentHistory
