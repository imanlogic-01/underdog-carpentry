import {notFound} from "next/navigation";
import Link from "@/components/site-link";
import {areas} from "@/lib/business";
import {PageIntro,Section,CTABanner} from "@/components/sections";
import {metadataFor,StructuredData} from "@/lib/seo";
export const dynamicParams=false;
export function generateStaticParams(){return areas.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const area=areas.find(a=>a.slug===slug);if(!area)return {};return metadataFor("/areas/"+slug,"Carpenter & Home Improvements in "+area.name,"Carpentry and home improvements in "+area.name+", "+area.county+", and nearby villages. Contact Underdog for a free quote.")}
export default async function Area({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const area=areas.find(a=>a.slug===slug);if(!area)notFound();return <main id="main"><StructuredData path={"/areas/"+slug} title={area.name}/><PageIntro title={"Carpenter in "+area.name} breadcrumbs={[{name:area.name}]}/><Section className="placeholder-section"><p>Content coming soon</p><Link className="text-link" href="/contact">Discuss your project</Link></Section><Section className="about-section"><h2>Also covering nearby areas</h2><ul className="coverage-list">{area.local.map(t=><li key={t}>{t}</li>)}</ul><p>Tell us your postcode and the work you have in mind when you enquire.</p></Section><CTABanner/></main>}

