import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from 'gatsby'
import Layout from "../layout"
import SocialAccounts from '../socialAccounts'
import IndexPage from '../../pages/index'

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        "data": {
          "prismic": {
            "allResumes": {
              "edges": [
                {
                  "node": {
                    "body": [
                      {
                        "type": "resume_title",
                        "primary": {
                          "about": [
                            {
                              "type": "paragraph",
                              "text": "about-test",
                              "spans": []
                            }
                          ],
                          "name": [
                            {
                              "type": "heading1",
                              "text": "Ben Wallace",
                              "spans": []
                            }
                          ]
                        }
                      },
                      {
                        "type": "social_accounts",
                        "fields": [
                          {
                            "account_handle": "@benwal_io",
                            "account_link": {
                              "url": "https://twitter.com/benwal_io"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "Twitter",
                                "spans": []
                              }
                            ],
                            "account_type": "twitter"
                          },
                          {
                            "account_handle": "ben-wallace-88787620",
                            "account_link": {
                              "url": "https://www.linkedin.com/in/ben-wallace-88787620/"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "LinkedIn",
                                "spans": []
                              }
                            ],
                            "account_type": "linkedin"
                          },
                          {
                            "account_handle": "benwalio",
                            "account_link": {
                              "url": "https://github.com/benwalio"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "Github",
                                "spans": []
                              }
                            ],
                            "account_type": "github"
                          },
                          {
                            "account_handle": "ben@benwal.io",
                            "account_link": {
                              "url": "mailto:ben@benwal.io"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "email",
                                "spans": []
                              }
                            ],
                            "account_type": "email"
                          },
                          {
                            "account_handle": "(717)823-0915",
                            "account_link": {
                              "url": "tel:+17178230915"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "phone",
                                "spans": []
                              }
                            ],
                            "account_type": "phone"
                          }
                        ]
                      },
                      {
                        "type": "resume_employment_history_entry",
                        "fields": [
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "LearnUpon",
                                "spans": []
                              }
                            ],
                            "end_date": null,
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Serve as single technical PoC for external clients over $100k ARR",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Serve as single internal escalation point for high value/ impact technical issues",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Test and document integrations through a multitude of platforms (Workday, Dynamics, etc)",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Lead internal support QA; create internal trainings and knowledge shares",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Enterprise Integrations Engineer",
                                "spans": []
                              }
                            ],
                            "start_date": "2019-10-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Philadelphia, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "LearnUpon",
                                "spans": []
                              }
                            ],
                            "end_date": "2019-10-01",
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Manage Level 2 ticket escalations from Support Representatives",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Provide technical oversight for clients on a diverse set of technologies",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- SAML SSO, Salesforce, SCORM, DNS, API, SSL, etc",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Direct training and on boarding of new hires. Continued training of Support Analysts",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Building tools in Bash, Python3 and Perl; Rolling out tools for increased efficiency",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Senior Support Specialist",
                                "spans": []
                              }
                            ],
                            "start_date": "2019-03-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Philadelphia, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "LearnUpon",
                                "spans": []
                              }
                            ],
                            "end_date": "2019-03-01",
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Provide industry-leading customer service to clients (NPS 60)",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Interface with clients through Email, Phone and Webinar tools",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Resolve technical issues in a timely manner and provide understandable RCA’s",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Support Analyst",
                                "spans": []
                              }
                            ],
                            "start_date": "2017-08-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Philadelphia, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "Instem",
                                "spans": []
                              }
                            ],
                            "end_date": "2017-08-01",
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Working with Oracle, create, test, and deploy SQL queries and scripts",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Provider Tier 1 support to clients and manage escalations ",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Create data change requests in accordance with QA policies and FDA regulations",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Support Analyst",
                                "spans": []
                              }
                            ],
                            "start_date": "2016-08-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Conshohocken, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "Insomnia Cookies",
                                "spans": []
                              }
                            ],
                            "end_date": "2016-08-01",
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Work in a fast paced environment to facilitate openings of store (25 => 95 over 3.5 years)",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Oversee all aspects of the Brand’s technology - internal IT, system admin, front end, etc",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Manage staffing for Loss Prevention, Development and IT departments",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Serve as Technical Liasion for Senior Executive Board",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Technology Manager",
                                "spans": []
                              }
                            ],
                            "start_date": "2013-03-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Newtown Square, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 18,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 18,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "resume_projects",
                        "fields": [
                          {
                            "type": [
                              {
                                "type": "paragraph",
                                "text": "System Administration",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 21,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 21,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ],
                            "project_description": [
                              {
                                "type": "paragraph",
                                "text": "Setup and maintain a cluster of servers that utilize a wide range of technologies - docker, \t\tgit, ssh, OpenVPN, dns, dhcp. Built a fully functional home router on top of Arch Linux. Utilize InfuxDB and Grafana to track metrics. Build and maintain home automation server",
                                "spans": []
                              }
                            ],
                            "organization": [
                              {
                                "type": "heading3",
                                "text": "Personal, Homelab",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "type": [
                              {
                                "type": "paragraph",
                                "text": "Web Development",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ],
                            "project_description": [
                              {
                                "type": "paragraph",
                                "text": "Utilizing primarily React.js, Gatsby, Prismic, GraphQL, styled-components - built an optimized webpage that could be updated based on CMS hooks. Also handled the DNS and hosting in order to provide maximum uptime.",
                                "spans": []
                              }
                            ],
                            "organization": [
                              {
                                "type": "heading3",
                                "text": "Personal, Resume Page",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "type": [
                              {
                                "type": "paragraph",
                                "text": "App Development",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ],
                            "project_description": [
                              {
                                "type": "paragraph",
                                "text": "- Managed a team of 5 programmers and oversaw development of an iOS/ Android app that a baseline increase of 17% revenue YoY",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Managed the development of an app for delivery drivers that gave clients delivery status updates. Internally, this helped bring average delivery times down by 11% to under 20 minutes per delivery.",
                                "spans": []
                              }
                            ],
                            "organization": [
                              {
                                "type": "heading3",
                                "text": "Insomnia Cookies",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "type": [
                              {
                                "type": "paragraph",
                                "text": "Data Team Chair",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ],
                            "project_description": [
                              {
                                "type": "paragraph",
                                "text": "Served as chair of a committee that sought to utilize organization data to drive Board decisions. Worked with Postgres, Heroku, Survey Monkey and Tableau to gather, assemble, parse and present data.",
                                "spans": []
                              }
                            ],
                            "organization": [
                              {
                                "type": "heading3",
                                "text": "PADA",
                                "spans": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "certifications",
                        "fields": [
                          {
                            "cert_date": "2007-12-13",
                            "cert_issuer": "CompTIA",
                            "cert_name": [
                              {
                                "type": "heading3",
                                "text": "Network+",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "cert_date": "2020-04-01",
                            "cert_issuer": "Udemy",
                            "cert_name": [
                              {
                                "type": "heading3",
                                "text": "Web Developer Bootcamp",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "cert_date": "2020-05-01",
                            "cert_issuer": "Udemy",
                            "cert_name": [
                              {
                                "type": "heading3",
                                "text": "React Developer Bootcamp",
                                "spans": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "fields": [
                          {
                            "name": "React.js",
                            "skill_strength": 85
                          },
                          {
                            "name": "Gatsby JS",
                            "skill_strength": 55
                          },
                          {
                            "name": "HTML & CSS",
                            "skill_strength": 65
                          },
                          {
                            "name": "Python3",
                            "skill_strength": 70
                          },
                          {
                            "name": "SQL",
                            "skill_strength": 90
                          },
                          {
                            "name": "MongoDB",
                            "skill_strength": 40
                          },
                          {
                            "name": "ELK Stack",
                            "skill_strength": 55
                          },
                          {
                            "name": "docker",
                            "skill_strength": 75
                          },
                          {
                            "name": "Data Analysis",
                            "skill_strength": 60
                          },
                          {
                            "name": "Tensorflow",
                            "skill_strength": 35
                          },
                          {
                            "name": "Excel",
                            "skill_strength": 85
                          },
                          {
                            "name": "Linux CLI",
                            "skill_strength": 60
                          },
                          {
                            "name": "Troubleshooting",
                            "skill_strength": 100
                          },
                          {
                            "name": "Figma",
                            "skill_strength": 55
                          },
                          {
                            "name": "git",
                            "skill_strength": 65
                          }
                        ],
                        "type": "skill_ratings"
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      })
    )
  })

const props = 

describe("Layout", () => {

    const props = {
        "data": {
          "prismic": {
            "allResumes": {
              "edges": [
                {
                  "node": {
                    "body": [
                      {
                        "type": "resume_title",
                        "primary": {
                          "about": [
                            {
                              "type": "paragraph",
                              "text": "about-test",
                              "spans": []
                            }
                          ],
                          "name": [
                            {
                              "type": "heading1",
                              "text": "Ben Wallace",
                              "spans": []
                            }
                          ]
                        }
                      },
                      {
                        "type": "social_accounts",
                        "fields": [
                          {
                            "account_handle": "@benwal_io",
                            "account_link": {
                              "url": "https://twitter.com/benwal_io"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "Twitter",
                                "spans": []
                              }
                            ],
                            "account_type": "twitter"
                          },
                          {
                            "account_handle": "ben-wallace-88787620",
                            "account_link": {
                              "url": "https://www.linkedin.com/in/ben-wallace-88787620/"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "LinkedIn",
                                "spans": []
                              }
                            ],
                            "account_type": "linkedin"
                          },
                          {
                            "account_handle": "benwalio",
                            "account_link": {
                              "url": "https://github.com/benwalio"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "Github",
                                "spans": []
                              }
                            ],
                            "account_type": "github"
                          },
                          {
                            "account_handle": "ben@benwal.io",
                            "account_link": {
                              "url": "mailto:ben@benwal.io"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "email",
                                "spans": []
                              }
                            ],
                            "account_type": "email"
                          },
                          {
                            "account_handle": "(717)823-0915",
                            "account_link": {
                              "url": "tel:+17178230915"
                            },
                            "account_name": [
                              {
                                "type": "heading3",
                                "text": "phone",
                                "spans": []
                              }
                            ],
                            "account_type": "phone"
                          }
                        ]
                      },
                      {
                        "type": "resume_employment_history_entry",
                        "fields": [
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "LearnUpon",
                                "spans": []
                              }
                            ],
                            "end_date": null,
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Serve as single technical PoC for external clients over $100k ARR",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Serve as single internal escalation point for high value/ impact technical issues",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Test and document integrations through a multitude of platforms (Workday, Dynamics, etc)",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Lead internal support QA; create internal trainings and knowledge shares",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Enterprise Integrations Engineer",
                                "spans": []
                              }
                            ],
                            "start_date": "2019-10-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Philadelphia, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "LearnUpon",
                                "spans": []
                              }
                            ],
                            "end_date": "2019-10-01",
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Manage Level 2 ticket escalations from Support Representatives",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Provide technical oversight for clients on a diverse set of technologies",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- SAML SSO, Salesforce, SCORM, DNS, API, SSL, etc",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Direct training and on boarding of new hires. Continued training of Support Analysts",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Building tools in Bash, Python3 and Perl; Rolling out tools for increased efficiency",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Senior Support Specialist",
                                "spans": []
                              }
                            ],
                            "start_date": "2019-03-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Philadelphia, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "LearnUpon",
                                "spans": []
                              }
                            ],
                            "end_date": "2019-03-01",
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Provide industry-leading customer service to clients (NPS 60)",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Interface with clients through Email, Phone and Webinar tools",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Resolve technical issues in a timely manner and provide understandable RCA’s",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Support Analyst",
                                "spans": []
                              }
                            ],
                            "start_date": "2017-08-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Philadelphia, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "Instem",
                                "spans": []
                              }
                            ],
                            "end_date": "2017-08-01",
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Working with Oracle, create, test, and deploy SQL queries and scripts",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Provider Tier 1 support to clients and manage escalations ",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Create data change requests in accordance with QA policies and FDA regulations",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Support Analyst",
                                "spans": []
                              }
                            ],
                            "start_date": "2016-08-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Conshohocken, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 16,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "company_title": [
                              {
                                "type": "heading3",
                                "text": "Insomnia Cookies",
                                "spans": []
                              }
                            ],
                            "end_date": "2016-08-01",
                            "job_responsibilities": [
                              {
                                "type": "paragraph",
                                "text": "- Work in a fast paced environment to facilitate openings of store (25 => 95 over 3.5 years)",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Oversee all aspects of the Brand’s technology - internal IT, system admin, front end, etc",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Manage staffing for Loss Prevention, Development and IT departments",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Serve as Technical Liasion for Senior Executive Board",
                                "spans": []
                              }
                            ],
                            "job_title": [
                              {
                                "type": "paragraph",
                                "text": "Technology Manager",
                                "spans": []
                              }
                            ],
                            "start_date": "2013-03-01",
                            "location": [
                              {
                                "type": "paragraph",
                                "text": "Newtown Square, PA",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 18,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 18,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "resume_projects",
                        "fields": [
                          {
                            "type": [
                              {
                                "type": "paragraph",
                                "text": "System Administration",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 21,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 21,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ],
                            "project_description": [
                              {
                                "type": "paragraph",
                                "text": "Setup and maintain a cluster of servers that utilize a wide range of technologies - docker, \t\tgit, ssh, OpenVPN, dns, dhcp. Built a fully functional home router on top of Arch Linux. Utilize InfuxDB and Grafana to track metrics. Build and maintain home automation server",
                                "spans": []
                              }
                            ],
                            "organization": [
                              {
                                "type": "heading3",
                                "text": "Personal, Homelab",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "type": [
                              {
                                "type": "paragraph",
                                "text": "Web Development",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ],
                            "project_description": [
                              {
                                "type": "paragraph",
                                "text": "Utilizing primarily React.js, Gatsby, Prismic, GraphQL, styled-components - built an optimized webpage that could be updated based on CMS hooks. Also handled the DNS and hosting in order to provide maximum uptime.",
                                "spans": []
                              }
                            ],
                            "organization": [
                              {
                                "type": "heading3",
                                "text": "Personal, Resume Page",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "type": [
                              {
                                "type": "paragraph",
                                "text": "App Development",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ],
                            "project_description": [
                              {
                                "type": "paragraph",
                                "text": "- Managed a team of 5 programmers and oversaw development of an iOS/ Android app that a baseline increase of 17% revenue YoY",
                                "spans": []
                              },
                              {
                                "type": "paragraph",
                                "text": "- Managed the development of an app for delivery drivers that gave clients delivery status updates. Internally, this helped bring average delivery times down by 11% to under 20 minutes per delivery.",
                                "spans": []
                              }
                            ],
                            "organization": [
                              {
                                "type": "heading3",
                                "text": "Insomnia Cookies",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "type": [
                              {
                                "type": "paragraph",
                                "text": "Data Team Chair",
                                "spans": [
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "em"
                                  },
                                  {
                                    "start": 0,
                                    "end": 15,
                                    "type": "strong"
                                  }
                                ]
                              }
                            ],
                            "project_description": [
                              {
                                "type": "paragraph",
                                "text": "Served as chair of a committee that sought to utilize organization data to drive Board decisions. Worked with Postgres, Heroku, Survey Monkey and Tableau to gather, assemble, parse and present data.",
                                "spans": []
                              }
                            ],
                            "organization": [
                              {
                                "type": "heading3",
                                "text": "PADA",
                                "spans": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "type": "certifications",
                        "fields": [
                          {
                            "cert_date": "2007-12-13",
                            "cert_issuer": "CompTIA",
                            "cert_name": [
                              {
                                "type": "heading3",
                                "text": "Network+",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "cert_date": "2020-04-01",
                            "cert_issuer": "Udemy",
                            "cert_name": [
                              {
                                "type": "heading3",
                                "text": "Web Developer Bootcamp",
                                "spans": []
                              }
                            ]
                          },
                          {
                            "cert_date": "2020-05-01",
                            "cert_issuer": "Udemy",
                            "cert_name": [
                              {
                                "type": "heading3",
                                "text": "React Developer Bootcamp",
                                "spans": []
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "fields": [
                          {
                            "name": "React.js",
                            "skill_strength": 85
                          },
                          {
                            "name": "Gatsby JS",
                            "skill_strength": 55
                          },
                          {
                            "name": "HTML & CSS",
                            "skill_strength": 65
                          },
                          {
                            "name": "Python3",
                            "skill_strength": 70
                          },
                          {
                            "name": "SQL",
                            "skill_strength": 90
                          },
                          {
                            "name": "MongoDB",
                            "skill_strength": 40
                          },
                          {
                            "name": "ELK Stack",
                            "skill_strength": 55
                          },
                          {
                            "name": "docker",
                            "skill_strength": 75
                          },
                          {
                            "name": "Data Analysis",
                            "skill_strength": 60
                          },
                          {
                            "name": "Tensorflow",
                            "skill_strength": 35
                          },
                          {
                            "name": "Excel",
                            "skill_strength": 85
                          },
                          {
                            "name": "Linux CLI",
                            "skill_strength": 60
                          },
                          {
                            "name": "Troubleshooting",
                            "skill_strength": 100
                          },
                          {
                            "name": "Figma",
                            "skill_strength": 55
                          },
                          {
                            "name": "git",
                            "skill_strength": 65
                          }
                        ],
                        "type": "skill_ratings"
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
  it("renders correctly", () => {
    const tree = renderer
      .create(<IndexPage data={props} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})