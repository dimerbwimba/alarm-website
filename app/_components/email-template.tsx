import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastname:string;
  subject:string;
  message:string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, subject,lastname, message
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);