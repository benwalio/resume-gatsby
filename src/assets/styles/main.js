import styled from "styled-components";
import { Box, Grid, Main } from 'grommet'

export const PageDiv = styled.div`
margin: 0;
background-color: #f7f7f7;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
`

export const MainDiv = styled(Main)`
    width: 75vw;
    margin: auto;
    
`

export const ResumeSection = styled(Box)`
    margin-bottom: 3rem;
`

export const History = styled(Grid)`
    justify-content: flex-start;
    margin: auto 1rem;
    padding-bottom: .5rem;
`

export const HistoryInfo = styled(Box)`

`

export const HistoryContent = styled(Box)`
    
`

export const SectionTitle = styled.h2`
    text-align: center;
        color: #555555;
        border-bottom: 1px solid #555555;
`