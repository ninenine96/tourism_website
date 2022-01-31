import React, { useRef } from "react";
import {
  Form,
  FormInput,
  FooterSubText as Paragraph,
  Selection,
  Option,
} from "../../components/footer/styles/footer";
import { InfoSecForm } from "../../components/InfoSection/InfoSection.styles";
import { Button } from "../../globalStles";
import { InfoSectionAbout } from "../../components/InfoSection/InfoSection";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ruhaan_email",
        "template_qp6190g",
        form.current,
        "user_CDvEiGFSbxwkMarvEB57W"
      )
      .then(
        () => {
          window.alert("Form Submitted! We shall get back to you soon.");
        },
        (error) => {
          window.alert(error.text);
        }
      );
    e.target.reset();
  };

  const dataContactUs = {
    lightBg: true,
    imgStart: "flex-end",
    lightTopLine: !true,
    lightText: !true,
    lightTextDesc: !true,
    headline: "Contact Us",
    topLine: "",
    description: "Enter your details and our team will contact you.",
    img: "contact_us.svg",
    alt: "Image",
    start: "",
  };
  return (
    <>
      <InfoSectionAbout {...dataContactUs} />
      <InfoSecForm>
        <Form ref={form} onSubmit={sendEmail}>
          <Paragraph>
            Enter Your Contacts Details and we will get back to you shortly
            <br></br>
          </Paragraph>
          <FormInput
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
          />

          <FormInput name="phone" type="number" placeholder="+91" required />

          <FormInput
            name="adults"
            type="number"
            placeholder="Number Of Adults"
            required
          />

          <FormInput
            name="Kids"
            type="number"
            placeholder="Number Of Kids (leave blank if none)"
          />
          <FormInput name="days" type="number" placeholder="Number Of Days" />
          <Selection name="packages" type="packages">
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

export default ContactUs;
