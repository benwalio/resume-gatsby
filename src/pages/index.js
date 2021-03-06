import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SliceZone from '../components/sliceZone'

export const query = graphql`
{
  prismic {
    allResumes {
      edges {
        node {
          body {
            ... on PRISMIC_ResumeBodyResume_title {
              type
              primary {
                about
                name
              }
            }
            ... on PRISMIC_ResumeBodySocial_accounts {
              type
              fields {
                account_handle
                account_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
                account_name
                account_type
              }
            }
            ... on PRISMIC_ResumeBodyResume_employment_history_entry {
              type
              fields {
                company_title
                end_date
                job_responsibilities
                job_title
                start_date
                location
              }
            }
            ... on PRISMIC_ResumeBodyResume_projects {
              type
              fields {
                type
                project_description
                organization
              }
            }
            ... on PRISMIC_ResumeBodySkill_ratings {
              fields {
                name
                skill_strength
              }
              type
            }
            ... on PRISMIC_ResumeBodyCertifications {
              type
              fields {
                cert_date
                cert_issuer
                cert_name
              }
            }
          }
        }
      }
    }
  }
}
`

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <SliceZone body={props.data.prismic.allResumes.edges[0].node.body} />
  </Layout>
)

export default IndexPage
