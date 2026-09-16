import {PageIntro,Section,CTABanner} from "@/components/sections";
import {metadataFor,StructuredData} from "@/lib/seo";
import {business} from "@/lib/business";
export const metadata=metadataFor("/about","About Underdog","Meet Underdog Home Improvements: carpentry, renovations and maintenance across Colchester, Ipswich and surrounding Essex and Suffolk.");
export default function About(){return <main id="main"><StructuredData path="/about" title="About us"/><PageIntro title="Your home. Our priority." breadcrumbs={[{name:"About us"}]}/><Section><div className="about-grid"><img src="/images/logo.jpg" width="460" height="460" alt={business.name}/><div className="about-copy"><h2>Underdog Home Improvements.</h2><p>Carpentry, building, renovations and maintenance in Colchester, Ipswich and the surrounding areas.</p><p>{business.tagline}</p><p>Content coming soon</p></div></div></Section><CTABanner/></main>}

