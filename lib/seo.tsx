import type {Metadata} from "next";
import {business,areas} from "./business";
export function metadataFor(path:string,title:string,description:string):Metadata{return {title,description,alternates:{canonical:business.origin+path},openGraph:{title,description,url:business.origin+path,siteName:business.name,locale:"en_GB",type:"website"}}}
export function StructuredData({path,title,service}:{path:string;title?:string;service?:string}){
 const org={"@type":"HomeAndConstructionBusiness","@id":business.origin+"/#business",name:business.name,url:business.origin,telephone:"+447940246031",email:business.email,logo:business.origin+"/images/logo.jpg",areaServed:areas.map(a=>({"@type":"Place",name:a.name})),sameAs:Object.values(business.social)};
 const crumbs=[{name:"Home",item:business.origin+"/"}];
 if(path.startsWith("/services/")) crumbs.push({name:"Services",item:business.origin+"/services"});
 if(path!=="/") crumbs.push({name:title||"Page",item:business.origin+path});
 const graph:unknown[]=[org,{"@type":"BreadcrumbList",itemListElement:crumbs.map((c,i)=>({"@type":"ListItem",position:i+1,...c}))}];
 if(service) graph.push({"@type":"Service",name:service,serviceType:service,provider:{"@id":business.origin+"/#business"},areaServed:org.areaServed,url:business.origin+path});
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph}).replace(/</g,"\\u003c")}}/>;
}

