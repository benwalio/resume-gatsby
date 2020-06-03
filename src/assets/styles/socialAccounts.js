import styled from "styled-components";
import { RichText } from 'prismic-reactjs'
import { Box, Grid, Anchor } from 'grommet'
import { ResumeSection } from './main'

export const SocialAcctSection = styled(ResumeSection)`
    margin: 0;
`

export const AcctName = styled(RichText)`

`

export const AcctLink = styled(RichText)`

`

export const SocialEntry = styled(Box)`
    justify-content: center;
    margin: auto .5rem;
`

export const SocialSection = styled(Grid)`
    height: 3rem;
`

export const SocialLink = styled(Anchor)`
    display: flex;
    justify-content: center;
`