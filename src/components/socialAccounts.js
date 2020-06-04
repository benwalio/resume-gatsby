import React from "react";
import {
  SocialEntry,
  SocialSection,
  SocialLink,
  SocialAcctSection
} from "../assets/styles/socialAccounts";
import { Linkedin, Twitter, Github, Phone, Mail } from "grommet-icons";

const SocialAccounts = (props) => {
  return (
    <SocialAcctSection round='small' background='dark-2' >
      <SocialSection columns={{
        count: 5,
        size: "auto"
      }}
      gap="small">
        {props.accounts.map((account, idx) => (
          <SocialEntry alignContent='center' focusIndicator='false'>
            <SocialLink href={account.account_link.url} icon=
            {account.account_type === "linkedin" ? (
              <Linkedin />
            ) : account.account_type === "twitter" ? (
              <Twitter />
            ) : account.account_type === "github" ? (
              <Github />
            ) : account.account_type === "phone" ? (
              <Phone />
            ) : account.account_type === "email" ? (
              <Mail />
            ) : null}
            label={account.account_handle}
            color='accent-4'
            alignSelf='center' focusIndicator='false'
            />
          </SocialEntry>
        ))}
      </SocialSection>
    </SocialAcctSection>
  );
};

export default SocialAccounts;
