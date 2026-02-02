import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const ContactEmail = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>Nový kontakt zo stránky securedo.sk</Preview>
      <Body style={main}>
        <Container style={container}>
          {name && (
            <Section style={{ marginTop: "8px" }}>
              <Text style={textStyle}>Meno: {name}</Text>
            </Section>
          )}
          {email && (
            <Section style={{ marginTop: "8px" }}>
              <Text style={textStyle}>Email: {email}</Text>
            </Section>
          )}
          {message && (
            <Section style={{ marginTop: "8px" }}>
              <Text style={textStyle}>Správa: {message}</Text>
            </Section>
          )}

          <Section
            style={{
              paddingTop: "80px",
              paddingBottom: "80px",
              marginTop: "40px",
            }}
          >
            <Hr style={hrStyle} />
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  fontFamily: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
  backgroundColor: "#ffffff",
  padding: "20px",
};

const container = {
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  border: "1px solid #eaeaea",
  borderRadius: "8px",
};

const hrStyle = {
  margin: "40px 0",
  borderColor: "#a39f9f",
};

const tableCell = { display: "table-cell" };

const textStyle = { margin: "4px 0" };
