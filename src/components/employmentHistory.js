import React from "react";
import {
  ResumeSection,
  HistoryInfo,
  HistoryContent,
  History,
} from "../assets/styles/main";
import {
  Company,
  JobTitle,
  DateSpan,
  Location,
  Responsibilities,
  DateLocBox,
} from "../assets/styles/employmentHistory";

import moment from "moment";

const employmentHistory = (props) => {
  return (
    <ResumeSection margin={{ top: "medium" }}>
      {props.content.map((entry, idx) => (
        <History
          rows={["flex"]}
          columns={["1/3", "flex"]}
          gap="small"
          areas={[
            { name: "company", start: [0, 0], end: [0, 0] },
            { name: "content", start: [1, 0], end: [1, 0] },
          ]}
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
        </History>
      ))}
    </ResumeSection>
  );
};

export default employmentHistory;
