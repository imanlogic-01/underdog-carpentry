import {notFound} from "next/navigation";
import Link from "@/components/site-link";
import {services} from "@/lib/business";
import {PageIntro,Section,CTABanner} from "@/components/sections";
import {metadataFor,StructuredData} from "@/lib/seo";
export const dynamicParams=false;
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)return {};return metadataFor("/services/"+slug,s.name+" in Colchester & Ipswich",s.name+" from Underdog Home Improvements in Colchester, Ipswich and nearby areas. Contact us to discuss your project and request a free quote.")}
export default async function Service({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)notFound();return <main id="main"><StructuredData path={"/services/"+s.slug} title={s.name} service={s.name}/><PageIntro title={s.name+" in Colchester & Ipswich"} breadcrumbs={[{name:"Services",href:"/services"},{name:s.name}]}/><Section className="placeholder-section"><p>Content coming soon</p><Link className="text-link" href="/contact">Discuss your project</Link></Section><CTABanner/></main>}

