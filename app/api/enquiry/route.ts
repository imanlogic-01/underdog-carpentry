import {env} from "cloudflare:workers";
import {handleEnquiry} from "@/lib/enquiries";
export async function POST(request:Request){return handleEnquiry(request,env as unknown as {RESEND_API_KEY?:string;RESEND_FROM_EMAIL?:string;ENQUIRY_TO_EMAIL?:string})}

