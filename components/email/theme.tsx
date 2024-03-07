import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface ALarmProps {
    firstName:string,
    email:string, 
    subject:string, 
    message:string
  }
  
  const baseUrl = `https://alarmrdc.com`
  
  export const ALarm = ({
    firstName,email, subject, message
  }: ALarmProps) => (
    <Html>
      <Head />
      <Preview>
        {subject}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/alarm.png`}
            width="170"
            height="50"
            alt="alarm"
            style={logo}
          />
          <Text style={paragraph}>Bonjour moi ce  {firstName}</Text>
          <Text style={paragraph}>
           {message}
          </Text>
          <Text style={paragraph}>
            Voici mon address mail,
            <br />
            {email}
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Alarm RDC | +243 853282801 Quartier Katingo, Avenu Beni N-212, Bloc III, Goma RDC
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  ALarm.PreviewProps = {
    firstName: "ALARM",
  } as ALarmProps;
  
  export default ALarm;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  