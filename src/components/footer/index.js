import React from 'react'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput

} from './styles/footer'
import { Button } from '../../globalStles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Something Something 
                </FooterSubHeading>
                <FooterSubText>Will you take the red pill?</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Enter Your Email"/>
                        
                    <Button fontBig>Yes</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
