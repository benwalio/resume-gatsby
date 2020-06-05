import React from "react";
import {
  ResumeSection,
  History,
  HistoryInfo,
  HistoryContent,
  SectionTitle,
} from "../assets/styles/main";
import { Organization, Type, Description } from "../assets/styles/projects";
import { ResponsiveContext } from 'grommet'

const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <History areas={areas[size]} {...props}>
      {children}
    </History>
  );
};

const Projects = (props) => {
  return (
    <ResumeSection>
      <SectionTitle>Projects</SectionTitle>
      {props.content.map((project, idx) => (
        <ResponsiveGrid
          key={idx}
          rows={["auto",'auto']}
          columns={["1/3", "flex"]}
          gap="small"
          areas={{
            small: [
              { name: "organization", start: [0, 0], end: [1, 0] },
              { name: "content", start: [0, 1], end: [1, 1] },
            ],
            medium: [
              { name: "organization", start: [0, 0], end: [0, 0] },
              { name: "content", start: [1, 0], end: [1, 0] },
            ],
            large: [
              { name: "organization", start: [0, 0], end: [0, 0] },
              { name: "content", start: [1, 0], end: [1, 0] },
            ],
            xlarge: [
              { name: "organization", start: [0, 0], end: [0, 0] },
              { name: "content", start: [1, 0], end: [1, 0] },
            ],
          }}
        >
          <HistoryInfo gridArea="organization">
            <Organization render={project.organization} />
          </HistoryInfo>
          <HistoryContent
            gridArea="content"
            border={{ color: "light-2", side: "bottom", size: "small" }}
          >
            <Type render={project.type} />
            <Description render={project.project_description} />
          </HistoryContent>
        </ResponsiveGrid>
      ))}
    </ResumeSection>
  );
};

export default Projects;
