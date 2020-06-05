import React from "react";
import {
  ResumeSection,
  HistoryInfo,
  HistoryContent,
  History,
  SectionTitle,
} from "../assets/styles/main";
import {
  Company,
  JobTitle,
  DateSpan,
  Location,
  Responsibilities,
  DateLocBox,
} from "../assets/styles/employmentHistory";
import { ResponsiveContext } from "grommet";

import moment from "moment";

const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <History areas={areas[size]} {...props}>
      {children}
    </History>
  );
};

const EmploymentHistory = (props) => {
  return (
    <ResumeSection margin={{ top: "medium" }}>
      <SectionTitle>Employment History</SectionTitle>
      {props.content.map((entry, idx) => (
        <ResponsiveGrid
          key={idx}
          rows={["auto","auto"]}
          columns={["1/3", "flex"]}
          gap="small"
          areas={{
            small: [
              { name: "company", start: [0, 0], end: [1, 0] },
              { name: "content", start: [0, 1], end: [1, 1] },
            ],
            medium: [
              { name: "company", start: [0, 0], end: [0, 0] },
              { name: "content", start: [1, 0], end: [1, 0] },
            ],
            large: [
              { name: "company", start: [0, 0], end: [0, 0] },
              { name: "content", start: [1, 0], end: [1, 0] },
            ],
            xlarge: [
              { name: "company", start: [0, 0], end: [0, 0] },
              { name: "content", start: [1, 0], end: [1, 0] },
            ],
          }}
        >
          <HistoryInfo gridArea="company">
            <Company render={entry.company_title} />
            <JobTitle render={entry.job_title} />
          </HistoryInfo>
          <HistoryContent
            gridArea="content"
            border={{ color: "light-2", side: "bottom", size: "small" }}
          >
            <DateLocBox direction="row">
              <DateSpan>
                {moment(entry.start_date).format("MMM YYYY")} -{" "}
                {entry.end_date
                  ? moment(entry.end_date).format("MMM YYYY")
                  : "Present"}
              </DateSpan>
              <Location render={entry.location} />
            </DateLocBox>
            <Responsibilities render={entry.job_responsibilities} />
          </HistoryContent>
        </ResponsiveGrid>
      ))}
    </ResumeSection>
  );
};

export default EmploymentHistory;
