import Link from "@/components/site-link";
import { ArrowUpRight, Phone, Hammer, House, Wrench } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Section,ServiceGrid,AreasSection,CTABanner } from "@/components/sections";
import { business } from "@/lib/business";
import { metadataFor,StructuredData } from "@/lib/seo";
export const metadata=metadataFor("/","Home Improvements in Colchester & Ipswich","Carpentry, renovations and property repairs in Colchester, Ipswich and nearby Essex and Suffolk. Speak to Underdog about your next project.");
export default function Home(){return <main id="main"><StructuredData path="/"/>
 <section className="hero"><img className="hero-image" src="/images/hero.png" alt="" width="1536" height="1024" fetchPriority="high"/><div className="hero-shade"/><div className="container hero-grid">
 <div className="hero-copy"><h1>Your home.<br/>Our <span>pride.</span></h1><p className="hero-location">Home improvements in <br/>Colchester & Ipswich.</p><p className="hero-tagline">{business.tagline}</p><a href={business.phoneHref} className="hero-phone"><Phone size={19}/>{business.phone}<ArrowUpRight size={18}/></a><div className="hero-disciplines"><span>Carpentry</span><span>Renovations</span><span>Repairs</span></div></div>
 <ContactForm compact/>
 </div></section>
 <div className="service-strip"><div className="container"><span><Hammer size={20}/> Carpentry & joinery</span><span><House size={20}/> Home improvements</span><span><Wrench size={20}/> Property maintenance</span><Link href="/services">Find your service <ArrowUpRight size={18}/></Link></div></div>
 <Section className="services-section"><div className="section-heading"><h2>A better home.<br/>From the ground up.</h2><div><p>From carpentry and kitchens to the repairs that keep everything working.</p><Link href="/services" className="text-link">View all services <ArrowUpRight size={18}/></Link></div></div><ServiceGrid/></Section>
 <Section className="about-section"><div className="about-grid"><figure className="interior-figure"><img src="/images/interior.png" alt="Illustrative UK interior with fitted alcove cabinetry" width="1536" height="1024" loading="lazy"/><figcaption>Joinery inspiration · illustrative interior</figcaption></figure><div className="about-copy"><h2>A name to put<br/>behind your home.</h2><p>We’re Underdog Home Improvements. We work across Colchester, Ipswich and the surrounding areas, bringing carpentry, building, renovation and maintenance services together.</p><p className="about-tagline">No job too small.</p><Link href="/about" className="button">Meet Underdog <ArrowUpRight size={18}/></Link></div></div></Section>
 <AreasSection/><CTABanner/>
 </main>}
