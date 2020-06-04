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

const Certifications = (props) => {
  return (
    <ResumeSection>
      <SectionTitle>Certifications</SectionTitle>
      <CertGrid columns={{ count: 3, size: "auto" }} gap="medium">
        {props.content.map((cert, idx) => (
          <CertCard align="center">
            <CertName render={cert.cert_name} />
            <CertOrg>{cert.cert_issuer}</CertOrg>
            <CertDate>{moment(cert.cert_date).format("MMM YYYY")}</CertDate>
          </CertCard>
        ))}
      </CertGrid>
    </ResumeSection>
  );
};

export default Certifications;
