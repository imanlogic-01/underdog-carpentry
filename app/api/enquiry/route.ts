import {handleEnquiry} from "@/lib/enquiries";
export const runtime = "nodejs";
export const maxDuration = 30;
export async function POST(request: Request) {
 return handleEnquiry(request, {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  ENQUIRY_TO_EMAIL: process.env.ENQUIRY_TO_EMAIL,
 });
}
