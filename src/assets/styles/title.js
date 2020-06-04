import styled from "styled-components";
import { RichText } from 'prismic-reactjs'
import { Box } from 'grommet'

export const Title = styled(RichText)``

export const TitleBox = styled(Box)`
    & h1 {
        font-size: 3rem;
    }
`