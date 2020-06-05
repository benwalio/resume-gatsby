import React from "react";
import { ResumeSection, SectionTitle } from "../assets/styles/main";
import {
  SkillName,
  SkillStackBox,
  SkillStrength,
  SkillStack,
  SkillStackGrid,
} from "../assets/styles/skills";
import { ResponsiveContext } from "grommet";

const ResponsiveGrid = ({ children, columns, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <SkillStackGrid columns={columns[size]} {...props}>
      {children}
    </SkillStackGrid>
  );
};

const Skills = (props) => {
  return (
    <ResumeSection>
      <SectionTitle>Skills</SectionTitle>
      <ResponsiveGrid
        columns={{
          small: ["auto", "auto"],
          medium: ["auto", "auto", "auto"],
          large: ["auto", "auto", "auto", "auto", "auto"],
          xlarge: ["auto", "auto", "auto", "auto", "auto"],
        }}
        gap="medium"
      >
        {props.skills.map((skill, idx) => (
          <SkillStackBox align="center" key={idx}>
            <SkillStack anchor="center">
              <SkillStrength
                max="100"
                round={true}
                type="circle"
                size="small"
                values={[
                  {
                    value: skill.skill_strength,
                    label: skill.name,
                    color:
                      skill.skill_strength > 80
                        ? "accent-1"
                        : skill.skill_strength > 60
                        ? "status-ok"
                        : skill.skill_strength > 40
                        ? "neutral-1"
                        : "neutral-2",
                  },
                ]}
              />
              <SkillName>{skill.name}</SkillName>
            </SkillStack>
          </SkillStackBox>
        ))}
      </ResponsiveGrid>
    </ResumeSection>
  );
};

export default Skills;
