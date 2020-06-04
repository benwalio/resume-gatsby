/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Grommet } from "grommet";
import { PageDiv, MainDiv } from "../assets/styles/main";
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
    <Grommet theme={theme} full> 
      <PageDiv full>
        <MainDiv>{children}</MainDiv>
      </PageDiv>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
