import assert from "node:assert/strict";
import {mkdir,writeFile} from "node:fs/promises";
import {pathToFileURL} from "node:url";
import {resolve} from "node:path";
import {build} from "esbuild";
await mkdir("outputs",{recursive:true});
await build({stdin:{contents:'export {handleEnquiry} from "./lib/enquiries"; export {routes,business} from "./lib/business";',resolveDir:process.cwd(),loader:"ts"},outfile:"outputs/audit-bundle.mjs",bundle:true,platform:"node",format:"esm",logLevel:"silent"});
const {routes,business,handleEnquiry}=await import(pathToFileURL(resolve("outputs/audit-bundle.mjs")).href);
assert.equal(routes.length,18);assert.equal(new Set(routes.map(r=>r.path)).size,18);
const base="http://localhost:5173";
const valid={name:"Website QA",phone:"07940 246031",email:"website-test@example.invalid",postcode:"CO1 1AA",service:"Carpentry & Joinery",message:"This is a local mocked validation test.",website:""};
let nonce=0;
const request=(data=valid,headers={})=>new Request(base+"/api/enquiry",{method:"POST",headers:{"Content-Type":"application/json",Origin:base,"Idempotency-Key":crypto.randomUUID(),"x-forwarded-for":"mock-"+(++nonce),...headers},body:JSON.stringify(data)});
assert.equal((await handleEnquiry(request(),{})).status,503);
assert.equal((await handleEnquiry(request(valid,{Origin:"https://unrelated.example"}),{})).status,403);
assert.equal((await handleEnquiry(request({...valid,postcode:"INVALID"}),{})).status,400);
assert.equal((await handleEnquiry(request({...valid,message:"x".repeat(17000)}),{})).status,413);
let sends=0;let last;
const env={RESEND_API_KEY:"local-mock-only",RESEND_FROM_EMAIL:"Mock <sender@example.invalid>",ENQUIRY_TO_EMAIL:"recipient@example.invalid"};
const success=async(url,options)=>{sends++;last={url,...options};return Response.json({id:"mock-accepted"});};
assert.equal((await handleEnquiry(request({...valid,website:"spam"}),env,success)).status,200);assert.equal(sends,0);
assert.equal((await handleEnquiry(request(),env,success)).status,200);assert.equal(sends,1);
assert.equal(last.url,"https://api.resend.com/emails");
assert.equal(JSON.parse(last.body).reply_to,valid.email);assert.equal(JSON.parse(last.body).to[0],env.ENQUIRY_TO_EMAIL);
assert.equal((await handleEnquiry(request(),env,async()=>new Response("",{status:429}))).status,502);
assert.equal((await handleEnquiry(request(),env,async()=>{throw Error("mock network error")})).status,502);
for(let i=0;i<6;i++){assert.equal((await handleEnquiry(request(valid,{"x-forwarded-for":"rate-limit-test"}),env,success)).status,i<5?200:429)}
const htmlResults=[];const titles=new Set();const descriptions=new Set();
for(const route of routes){
 const response=await fetch(base+route.path);const html=await response.text();
 assert.equal(response.status,200,route.path+" HTTP status");assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,route.path+" H1");
 const title=html.match(/<title>([^<]+)<\/title>/)?.[1];assert.ok(title);assert.ok(!titles.has(title),"Unique title "+route.path);titles.add(title);
 const desc=html.match(/<meta name="description" content="([^"]*)"/)?.[1];assert.ok(desc);assert.ok(!descriptions.has(desc),"Unique description");descriptions.add(desc);
 assert.ok(html.includes('rel="canonical"'));assert.ok(html.includes('application/ld+json'));assert.ok(html.includes('property="og:title"'));
 if(route.type!=="Core")assert.ok(html.includes("Content coming soon"));
 htmlResults.push({...route,status:response.status,h1:1,title,metadata:true});
}
const sitemap=await (await fetch(base+"/sitemap.xml")).text();assert.equal((sitemap.match(/<loc>/g)||[]).length,18);
for(const route of routes)assert.ok(sitemap.includes(business.origin+route.path));
assert.equal((await fetch(base+"/does-not-exist")).status,404);
assert.equal((await fetch(base+"/services/does-not-exist")).status,404);
assert.equal((await fetch(base+"/areas/does-not-exist")).status,404);
const live=await fetch(base+"/api/enquiry",{method:"POST",headers:{"Content-Type":"application/json",Origin:base,"Idempotency-Key":crypto.randomUUID()},body:JSON.stringify(valid)});
assert.equal(live.status,503,"Missing credentials must not report success");
for(const asset of ["/images/header-logo.png","/images/header-logo@2x.png","/images/hero.png","/images/interior.png","/fonts/manrope-400.ttf","/fonts/manrope-800.ttf"])assert.equal((await fetch(base+asset)).status,200);
await writeFile("outputs/route-audit.json",JSON.stringify(htmlResults,null,2));
await writeFile("ROUTE-AUDIT.md","# Phase 1 route audit\n\nAll 18 routes return HTTP 200, one H1, unique title and description, canonical, Open Graph text metadata and JSON-LD. Unknown routes return 404. Sitemap has exactly 18 entries.\n\n| Page | URL | Type | Status |\n|---|---|---|---|\n"+htmlResults.map(r=>"| "+r.name+" | "+r.path+" | "+r.type+" | Passed |").join("\n")+"\n\nEnquiry tests: validation, request size, origin, honeypot, missing configuration, mocked Resend acceptance/failure, and rate protection passed. No real email was sent.\n");
console.log(JSON.stringify({routes:htmlResults.length,uniqueTitles:titles.size,uniqueDescriptions:descriptions.size,sitemapEntries:18,unknownRoutes:404,enquiryChecks:"passed; mock only",liveMissingCredentials:live.status},null,2));

