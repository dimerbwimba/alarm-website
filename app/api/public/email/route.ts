import { EmailTemplate } from '@/components/email/email-template';
import Mail from '@/models/mail.model';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
  try {
    const body = await req.json()
    
    // const data = await resend.emails.send({
    //   from: `ALARM ${"<onboarding@resend.dev>"}`,
    //   to: ['info@alarm-congo.org'],
    //   subject: "ALARM WEBSITE",
    //   react: EmailTemplate({ firstName: body.name, email:body.email, subject:body.subject, message:body.message }),
    //   text:"Site Internet ALARM RDC"    
    // });

    const forDBMS = {
      from : body.name,
      subject:body.subject,
      body:body.message,
      mail:body.email,
      to:"info@alarm-congo.org"
    }

   await Mail.create(forDBMS)

    return Response.json({success:true });
  } catch (error) {
    return Response.json({ error });
  }
}
