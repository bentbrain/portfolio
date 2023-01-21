import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";
import parse from "html-react-parser";

type Props = {
  name: string;
  email: string;
  message: string;
};

export default function Email({
  name = "Liam",
  email = "liamtc@icloud.com",
  message = `I'v just visited your website.
  Would be keen to work on a project. 

  Let me know when you are available.`,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>{`New Contact From ${name}`}</Preview>
      <Section style={main}>
        <Container style={container}>
          <Text style={h1}>
            New contact on <strong>liamcullen.design</strong>
          </Text>
          <Text style={text}>Hello Liam,</Text>
          <Text style={text}>
            <strong>{name}</strong> (
            <Link href={`mailto:${email}`} style={link}>
              {email}
            </Link>
            ) has sent you a message.
          </Text>
          <Section style={section}>
            <Text style={text}>{parse(message.replace(/\n/g, "<br />"))}</Text>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
};

const section = {
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  padding: "10px",
  marginTop: "10px",
};

const container = {
  border: "1px solid #eaeaea",
  borderRadius: "5px",
  margin: "40px auto",
  padding: "20px",
  maxWidth: "465px",
};

const h1 = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "normal",
  textAlign: "center" as const,
  margin: "30px 0",
  padding: "0",
};

const link = {
  color: "#067df7",
  textDecoration: "none",
};

const text = {
  color: "#000",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  lineHeight: "24px",
  margin: 0,
};
