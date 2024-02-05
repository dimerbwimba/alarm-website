import { EmailTemplate } from '@/app/_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {

    return Response.json({success:"data"});
  } catch (error) {
    return Response.json({ error });
  }
}