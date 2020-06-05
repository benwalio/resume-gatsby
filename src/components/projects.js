import React from "react";
import {
  ResumeSection,
  History,
  HistoryInfo,
  HistoryContent,
  SectionTitle,
} from "../assets/styles/main";
import { Organization, Type, Description } from "../assets/styles/projects";

const Projects = (props) => {
  return (
    <ResumeSection>
      <SectionTitle>Projects</SectionTitle>
      {props.content.map((project, idx) => (
        <History
          key={idx}
          rows={["flex"]}
          columns={["1/3", "flex"]}
          gap="small"
          areas={[
            { name: "organization", start: [0, 0], end: [0, 0] },
            { name: "content", start: [1, 0], end: [1, 0] },
          ]}
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
        </History>
      ))}
    </ResumeSection>
  );
};

export default Projects;
