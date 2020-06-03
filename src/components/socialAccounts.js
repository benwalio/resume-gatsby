import React from 'react'
import { ResumeSection } from '../assets/styles/main'
import { AcctName, AcctLink } from '../assets/styles/socialAccounts'

const SocialAccounts = props => {
    return (
        <ResumeSection>
            {props.accounts.map((account, idx) => 
                <>
                    <p>{account.account_handle}</p>
                    <AcctName render={account.account_name} />
                    <AcctLink render={account.account_link} />
                </>
            )}
        </ResumeSection>
    )
}

export default SocialAccounts
