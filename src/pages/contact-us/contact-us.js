import React from "react";
import {
  Form,
  FormInput,
  FooterSubText as Paragraph,
  Selection,
  Option,
} from "../../components/footer/styles/footer";
import { InfoSecForm } from "../../components/InfoSection/InfoSection.styles";
import { Button } from "../../globalStles";

const Contact_Us = () => {
  return (
    <>
      <InfoSecForm>
        <Form>
          <Paragraph>
            Enter Your Contacts Details and we will get back to you shortly
            <br></br>
          </Paragraph>
          <FormInput name="name" type="text" placeholder="Enter Your Name" />
          <FormInput name="email" type="email" placeholder="Enter Your Email" />
          <FormInput name="phone" type="number" placeholder="+91" />
          <Selection>
            <Option value="">Choose A Package</Option>
            <Option value="Kashmir-Katra-Amritsar">
              Kashmir-Katra-Amritsar
            </Option>
            <Option value="Special Holiday">Special Holiday</Option>
            <Option value="Special Honeymoon">Special Honeymoon</Option>
            <Option value="Honeymoon">Honeymoon</Option>
            <Option value="Special Family Holiday">
              Special Family Holiday
            </Option>
            <Option value="Kashmir-Katra">Kashmir-Katra</Option>
            <Option value="Ladakh">Ladakh</Option>
          </Selection>

          <Button fontBig mt="20px 0">
            Submit
          </Button>
        </Form>
      </InfoSecForm>
    </>
  );
};

export default Contact_Us;
