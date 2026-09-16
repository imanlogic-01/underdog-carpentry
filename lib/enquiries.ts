import {z} from "zod";
import {services} from "./business";
const enquirySchema=z.object({
 name:z.string().trim().min(2).max(100),
 phone:z.string().trim().min(7).max(30).regex(/^[+()\d\s.-]+$/),
 email:z.string().trim().email().max(254),
 postcode:z.string().trim().min(5).max(12).regex(/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i),
 service:z.string().refine(s=>s==="Not sure yet"||services.some(x=>x.name===s)),
 message:z.string().trim().min(10).max(5000),
 website:z.string().max(500).optional(),
});
type EnquiryEnv={RESEND_API_KEY?:string;RESEND_FROM_EMAIL?:string;ENQUIRY_TO_EMAIL?:string};
const attempts=new Map<string,{count:number;until:number}>();
const answer=(status:number,body:object)=>Response.json(body,{status,headers:{"Cache-Control":"no-store","X-Robots-Tag":"noindex"}});
export async function handleEnquiry(request:Request,env:EnquiryEnv,send:typeof fetch=fetch){
 const origin=request.headers.get("origin");
 if(origin && origin!==new URL(request.url).origin)return answer(403,{error:"Please send your enquiry from this website."});
 if(!request.headers.get("content-type")?.startsWith("application/json"))return answer(415,{error:"Please use the enquiry form."});
 if(Number(request.headers.get("content-length")||0)>16000)return answer(413,{error:"Your message is too long. Please shorten it."});
 let raw:unknown;
 try{
  const reader=request.body?.getReader();if(!reader)return answer(400,{error:"Please complete the enquiry form."});
  const chunks:Uint8Array[]=[];let size=0;
  while(true){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>16000){await reader.cancel();return answer(413,{error:"Your message is too long. Please shorten it."})}chunks.push(value)}
  const bytes=new Uint8Array(size);let offset=0;for(const c of chunks){bytes.set(c,offset);offset+=c.length}
  raw=JSON.parse(new TextDecoder().decode(bytes));
 }catch{return answer(400,{error:"Please check the form and try again."})}
 const parsed=enquirySchema.safeParse(raw);
 if(!parsed.success)return answer(400,{error:"Please check your name, email, phone, UK postcode and project details (at least 10 characters)."});
 const values=parsed.data;if(values.website)return answer(200,{ok:true});
 if(!env.RESEND_API_KEY||!env.RESEND_FROM_EMAIL||!env.ENQUIRY_TO_EMAIL)return answer(503,{error:"Online enquiries are temporarily unavailable. Please call or WhatsApp us instead."});
 const client=request.headers.get("cf-connecting-ip")||"local";
 const now=Date.now();for(const [key,value] of attempts)if(value.until<now)attempts.delete(key);
 const previous=attempts.get(client);if(previous&&previous.count>=5)return answer(429,{error:"Please wait a few minutes before sending another enquiry, or call us."});
 if(attempts.size>10000)return answer(503,{error:"Online enquiries are busy. Please call or try again shortly."});
 attempts.set(client,{count:(previous?.count||0)+1,until:previous?.until||now+600000});
 const providedKey=request.headers.get("idempotency-key");
 if(!providedKey||!/^[a-f0-9-]{36}$/i.test(providedKey))return answer(400,{error:"Please reload the page and try again."});
 try{
 const response=await send("https://api.resend.com/emails",{method:"POST",headers:{Authorization:"Bearer "+env.RESEND_API_KEY,"Content-Type":"application/json","Idempotency-Key":"enquiry/"+providedKey},body:JSON.stringify({from:env.RESEND_FROM_EMAIL,to:[env.ENQUIRY_TO_EMAIL],reply_to:values.email,subject:"Website enquiry: "+values.service,text:["New website enquiry","Name: "+values.name,"Phone: "+values.phone,"Email: "+values.email,"Postcode: "+values.postcode.toUpperCase(),"Service: "+values.service,"","Project details:",values.message].join("\n")}),signal:AbortSignal.timeout(12000)});
 if(!response.ok)return answer(502,{error:"Your enquiry could not be sent. Please try again or contact us by phone."});
 const result=await response.json() as {id?:string};
 if(!result.id)return answer(502,{error:"We couldn’t confirm delivery. Please call us before sending again."});
 return answer(200,{ok:true});
 }catch{return answer(502,{error:"We couldn’t confirm delivery. Please try again or call us."})}
}

