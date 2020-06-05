import React from "react";
import { ResumeSection, SectionTitle } from "../assets/styles/main";
import {
  CertGrid,
  CertCard,
  CertName,
  CertDate,
  CertOrg,
} from "../assets/styles/certifications";
import moment from "moment";
import { ResponsiveContext } from 'grommet'

const ResponsiveGrid = ({ children, columns, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <CertGrid columns={columns[size]} {...props}>
      {children}
    </CertGrid>
  );
};

const Certifications = (props) => {
  return (
    <ResumeSection>
      <SectionTitle>Certifications</SectionTitle>
      <ResponsiveGrid columns={{
          small: ["auto"],
          medium: ["auto", "auto"],
          large: ["auto", "auto", "auto"],
          xlarge: ["auto", "auto", "auto"],
        }} gap="medium">
        {props.content.map((cert, idx) => (
          <CertCard align="center" key={idx}>
            <CertName render={cert.cert_name} />
            <CertOrg>{cert.cert_issuer}</CertOrg>
            <CertDate>{moment(cert.cert_date).format("MMM YYYY")}</CertDate>
          </CertCard>
        ))}
      </ResponsiveGrid>
    </ResumeSection>
  );
};

export default Certifications;
