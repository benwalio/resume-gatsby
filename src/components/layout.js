/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Grommet, ResponsiveContext } from 'grommet'
import { MainDiv } from '../assets/styles/main'
import { base } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'

// import "./layout.css"

const theme = deepMerge(base,{
  global: {
    font: {
      family: 'Arial, Roboto'
    },
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 900
      },
      medium: undefined,
      middle: {
        value: 3000
      }
    }
}})

const Layout = ({ children }) => {

  return (
    <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          <MainDiv>{children}</MainDiv>
        </ResponsiveContext.Consumer>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
