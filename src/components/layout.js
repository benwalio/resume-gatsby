/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Grommet } from "grommet";
import { MainDiv } from "../assets/styles/main";
import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(base, {
  global: {
    font: {
      family: "Arial, Roboto",
    }
  },
});

const Layout = ({ children }) => {
  return (
    <Grommet theme={theme}>
      <MainDiv>{children}</MainDiv>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
