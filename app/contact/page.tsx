import {PageIntro,Section,ContactDetails} from "@/components/sections";
import {ContactForm} from "@/components/contact-form";
import {metadataFor,StructuredData} from "@/lib/seo";
export const metadata=metadataFor("/contact","Contact Us for a Free Quote","Contact Underdog Home Improvements on 07940 246031. Enquire about carpentry and home improvements in Colchester, Ipswich and surrounding areas.");
export default function Contact(){return <main id="main"><StructuredData path="/contact" title="Contact"/><PageIntro title="Let’s make a start." breadcrumbs={[{name:"Contact"}]}><p>Tell us what you have in mind. Call, WhatsApp or send an enquiry.</p></PageIntro><Section><div className="contact-layout"><div><h2>Big plans.<br/>Small repairs.<br/>We’re here to help.</h2><ContactDetails/></div><ContactForm/></div></Section></main>}

