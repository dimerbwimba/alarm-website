import * as React from "react";
import ALarm from "./theme";

interface EmailTemplateProps {
  firstName: string;
  email:string,
  subject:string,
  message:string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email, 
  subject, 
  message
}) => (
  <ALarm firstName={firstName} email={email} subject={subject} message={message} />
);

export default EmailTemplate;