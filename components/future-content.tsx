import Link from "@/components/site-link";
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent} from "@/components/ui/accordion";
// Render only supplied, verified content. Empty datasets create no public claims.
export function FAQ({items}:{items:{question:string;answer:string}[]}){if(!items.length)return null;return <Accordion type="single" collapsible>{items.map((item,i)=><AccordionItem key={i} value={String(i)}><AccordionTrigger>{item.question}</AccordionTrigger><AccordionContent>{item.answer}</AccordionContent></AccordionItem>)}</Accordion>}
export function ReviewCard({quote,author,source}:{quote:string;author:string;source?:string}){return <figure><blockquote>{quote}</blockquote><figcaption>{author}{source&&<> · <a href={source}>Read original review</a></>}</figcaption></figure>}
export const TestimonialCard=ReviewCard;
export function GoogleReviewDisplay({reviews}:{reviews:{quote:string;author:string;source:string}[]}){return reviews.length?<section aria-label="Google reviews">{reviews.map(r=><ReviewCard key={r.source} {...r}/>)}</section>:null}
export function ProcessSteps({steps}:{steps:{title:string;text:string}[]}){return steps.length?<ol>{steps.map(s=><li key={s.title}><h3>{s.title}</h3><p>{s.text}</p></li>)}</ol>:null}
export function WhyChooseUs({points}:{points:string[]}){return points.length?<ul>{points.map(p=><li key={p}>{p}</li>)}</ul>:null}
export const Guarantees=WhyChooseUs;
export function ProjectGallery({projects}:{projects:{src:string;alt:string;caption:string}[]}){return projects.length?<div className="service-grid">{projects.map(p=><figure key={p.src}><img src={p.src} alt={p.alt} loading="lazy" width="600" height="400"/><figcaption>{p.caption}</figcaption></figure>)}</div>:null}
export function BeforeAfterGallery({items}:{items:{before:string;after:string;description:string}[]}){return items.length?<div>{items.map(p=><figure key={p.before}><img src={p.before} alt={"Before: "+p.description} loading="lazy" width="600" height="400"/><img src={p.after} alt={"After: "+p.description} loading="lazy" width="600" height="400"/></figure>)}</div>:null}
export function QuoteCTA(){return <Link className="button" href="/contact">Get a free quote</Link>}
export const ContactCTA=QuoteCTA;

