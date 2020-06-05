import React from "react";
import {
  SocialEntry,
  SocialSection,
  SocialLink,
  SocialAcctSection,
} from "../assets/styles/socialAccounts";
import { ResponsiveContext } from "grommet";
import { Linkedin, Twitter, Github, Phone, Mail } from "grommet-icons";

const ResponsiveGrid = ({ children, columns, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  console.log(size)
  return (
    <SocialSection columns={columns[size]} {...props}>
      {children}
    </SocialSection>
  );
};

const SocialAccounts = (props) => {
  return (
    <SocialAcctSection round="small" background="dark-2">
      <ResponsiveGrid
        columns={{
          small: ["auto"],
          medium: ["auto","auto","auto"],
          large: ["auto","auto","auto","auto","auto"],
          xlarge: ["auto","auto","auto","auto","auto"],
        }}
        rows='auto'
        gap="small"
      >
        {props.accounts.map((account, idx) => (
          <SocialEntry key={idx} alignContent="center" focusIndicator="false">
            <SocialLink
              href={account.account_link.url}
              icon={
                account.account_type === "linkedin" ? (
                  <Linkedin />
                ) : account.account_type === "twitter" ? (
                  <Twitter />
                ) : account.account_type === "github" ? (
                  <Github />
                ) : account.account_type === "phone" ? (
                  <Phone />
                ) : account.account_type === "email" ? (
                  <Mail />
                ) : null
              }
              label={account.account_handle}
              color="accent-4"
              alignSelf="center"
              focusIndicator="false"
            />
          </SocialEntry>
        ))}
      </ResponsiveGrid>
    </SocialAcctSection>
  );
};

export default SocialAccounts;
