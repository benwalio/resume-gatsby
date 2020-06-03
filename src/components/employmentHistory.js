import React from "react";
import { ResumeSection } from "../assets/styles/main";
import {
  History,
  HistoryInfo,
  HistoryContent,
  Company,
  JobTitle,
  DateSpan,
  Location,
  Responsibilities,
} from "../assets/styles/employmentHistory";

import moment from "moment";

const employmentHistory = (props) => {
  return (
    <ResumeSection>
      {props.content.map((entry, idx) => (
        <History
          rows={["flex"]}
          columns={["small", "flex"]}
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
          <HistoryContent gridArea="content">
            <DateSpan>
              {moment(entry.start_date).format("MMM YYYY")} -{" "}
              {entry.end_date
                ? moment(entry.end_date).format("MMM YYYY")
                : "Present"}
            </DateSpan>
            <Location render={entry.location} />
            <Responsibilities render={entry.job_responsibilities} />
          </HistoryContent>
        </History>
      ))}
    </ResumeSection>
  );
};

export default employmentHistory;
