"use client";
import { useState, useId, useRef } from "react";
import { ArrowUpRight, CheckCircle, LoaderCircle } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { services, business } from "@/lib/business";
export function ContactForm({compact=false}:{compact?:boolean}) {
  const prefix=useId(); const [service,setService]=useState(""); const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle"); const [error,setError]=useState(""); const idempotency=useRef("");
  async function submit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form=e.currentTarget; const fields=Object.fromEntries(new FormData(form));
    setStatus("sending"); setError("");
    idempotency.current ||= crypto.randomUUID();
    try {
      const response=await fetch("/api/enquiry",{method:"POST",headers:{"Content-Type":"application/json","Idempotency-Key":idempotency.current},body:JSON.stringify({...fields,service:service || "Not sure yet"})});
      const data=await response.json() as {error?:string;ok?:boolean};
      if(!response.ok) throw new Error(data.error || "Your enquiry could not be sent. Please try again or call us.");
      setStatus("success"); form.reset(); setService(""); idempotency.current="";
    } catch(e) {setStatus("error"); setError(e instanceof Error?e.message:"Please try again or call us.");}
  }
  return <div className={"quote-card"+(compact?" compact":"")}><h2>Let’s talk about your project.</h2><p>Tell us what you have in mind for a free quote.</p>
    {status === "success" ? <div className="form-success" role="status"><CheckCircle size={32}/><h3>Enquiry received.</h3><p>Thanks for getting in touch. We’ll contact you to discuss your project.</p><button className="button" onClick={()=>setStatus("idle")}>Send another enquiry</button></div> :
    <form onSubmit={submit} onChange={()=>{if(status!=="sending")idempotency.current="";}}>
      <div className="form-grid">
        <label htmlFor={prefix+"name"}>Your name <span>*</span><input id={prefix+"name"} name="name" autoComplete="name" required maxLength={100} placeholder="Full name"/></label>
        <label htmlFor={prefix+"phone"}>Phone <span>*</span><input id={prefix+"phone"} name="phone" type="tel" autoComplete="tel" required maxLength={30} placeholder="Your phone number"/></label>
        <label htmlFor={prefix+"email"}>Email <span>*</span><input id={prefix+"email"} name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.co.uk"/></label>
        <label htmlFor={prefix+"postcode"}>Postcode <span>*</span><input id={prefix+"postcode"} name="postcode" autoComplete="postal-code" required maxLength={12} placeholder="e.g. CO1 1AA"/></label>
      </div>
      <label htmlFor={prefix+"service"}>Service required</label><Select name="service" value={service} onValueChange={setService}><SelectTrigger id={prefix+"service"} className="service-select"><SelectValue placeholder="What can we help with?"/></SelectTrigger><SelectContent>{services.map(s=><SelectItem key={s.slug} value={s.name}>{s.name}</SelectItem>)}<SelectItem value="Not sure yet">Not sure yet</SelectItem></SelectContent></Select>
      <label htmlFor={prefix+"message"}>Tell us about your project <span>*</span><textarea id={prefix+"message"} name="message" required minLength={10} maxLength={5000} rows={compact?2:4} placeholder="A little about the work you’re planning…"/></label>
      <div className="form-trap" aria-hidden="true"><label htmlFor={prefix+"website"}>Leave blank<input id={prefix+"website"} name="website" tabIndex={-1} autoComplete="off"/></label></div>
      <button className="button submit-button" type="submit" disabled={status==="sending"}>{status==="sending"?<>Sending… <LoaderCircle className="spin" size={18}/></>:<>Request a free quote <ArrowUpRight size={18}/></>}</button>
      <p className="form-note">We’ll use your details only to respond to your enquiry.</p>
      {error && <div className="form-error" role="alert">{error} <a href={business.phoneHref}>Call {business.phone}</a></div>}
    </form>}
  </div>;
}
