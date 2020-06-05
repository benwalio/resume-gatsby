import React from "react"
import renderer from "react-test-renderer"
import Layout from "../layout"
import SocialAccounts from '../socialAccounts'
import IndexPage from '../../pages/index'
describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<IndexPage siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})