import {PageIntro,Section,ServiceGrid,CTABanner} from "@/components/sections";
import {metadataFor,StructuredData} from "@/lib/seo";
export const metadata=metadataFor("/services","Carpentry & Home Improvement Services","Explore Underdog’s carpentry, wall panelling, renovations, kitchens, bathrooms, tiling, decorating, fencing and roofing services in Colchester and Ipswich.");
export default function Services(){return <main id="main"><StructuredData path="/services" title="Services"/><PageIntro title="Good work. All around your home." breadcrumbs={[{name:"Services"}]}><p>Carpentry and home improvements in Colchester, Ipswich and surrounding areas.</p></PageIntro><Section><ServiceGrid/></Section><CTABanner/></main>}

