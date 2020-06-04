import React from "react";
import ResumeTitle from "./resumeTitle";
import SocialAccounts from "./socialAccounts";
import EmploymentHistory from "./employmentHistory";
import Projects from "./projects";
import Skills from './skills'
import Certifications from './certifications'

function SliceZone(props) {
  const body = props.body;
  return (
    <>
      {body.map((bodyContent, idx) => {
        if (bodyContent.type === "resume_title") {
          return <ResumeTitle key={idx} title={bodyContent.primary.name} />;
        } else if (bodyContent.type === "social_accounts") {
          return <SocialAccounts key={idx} accounts={bodyContent.fields} />;
        } else if (bodyContent.type === "resume_employment_history_entry") {
          return <EmploymentHistory key={idx} content={bodyContent.fields} />;
        } else if (bodyContent.type === "resume_projects") {
          return <Projects key={idx} content={bodyContent.fields} />;
        } else if (bodyContent.type === "certifications") {
          return <Certifications key={idx} content={bodyContent.fields} />;
        } else if (bodyContent.type === "skill_ratings") {
            return <Skills key={idx} skills={bodyContent.fields} />
        }
        return null;
      })}
    </>
  );
}

export default SliceZone;
