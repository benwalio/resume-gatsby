import styled from "styled-components";
import { RichText } from 'prismic-reactjs'
import { Box } from 'grommet'

export const Company = styled(RichText)`

`

export const JobTitle = styled(RichText)`

`

export const Location = styled(RichText)`
    

`

export const Responsibilities = styled(RichText)`

`

export const DateLocBox = styled(Box)`
    & p {
        margin: 0 1rem;
    }
`

export const DateSpan = styled.span`
    font-style: italic;
    font-weight: 300;
    color: #777777;
`