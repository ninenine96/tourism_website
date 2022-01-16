import React from 'react'
import {
    FooterSubscription as Container,
    Form, 
    FormInput, 
    FooterSubText as Paragraph
} from '../../components/footer/styles/footer'
import {
    Button
} from '../../globalStles'

const Contact_Us = () => {
    return (
        <>
            <Container>
                <Form>
                        <Paragraph>Enter Your Contacts Details and we will get back to you shortly<br></br></Paragraph>
                        <FormInput name="name" type="text" placeholder="Enter Your Name"/>
                        <FormInput name="email" type="email" placeholder="Enter Your Email"/>
                        <FormInput name="phone" type="number" placeholder='+91' />
                        <Button fontBig>Submit</Button>
                </Form>
            </Container>
        </>
    )
}

export default Contact_Us
