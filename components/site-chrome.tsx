"use client";
import Link from "@/components/site-link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Phone, Menu, ArrowUpRight, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { business, services, areas } from "@/lib/business";

export function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
    const frame=requestAnimationFrame(()=>{
      const main=document.getElementById("main");
      main?.setAttribute("tabindex","-1");
      main?.focus({preventScroll:true});
      window.scrollTo(0,0);
    });
    return ()=>cancelAnimationFrame(frame);
  }, [pathname]);
  return null;
}
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <div className="topbar"><div className="container topbar-inner"><span><MapPin size={14} /> Serving Colchester, Ipswich & surrounding areas</span><a href={business.phoneHref}><Phone size={14}/>{business.phone}</a></div></div>
    <header className="header"><div className="container header-inner">
      <Link className="brand" href="/" aria-label="Underdog Home Improvements — home"><img src="/images/header-logo.png" srcSet="/images/header-logo@2x.png 2x" width="200" height="100" alt="Underdog"/><span>HOME IMPROVEMENTS LTD</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
        <DropdownMenu><DropdownMenuTrigger className={pathname.startsWith("/services") ? "nav-trigger active" : "nav-trigger"}>Services <ChevronDown size={14}/></DropdownMenuTrigger><DropdownMenuContent className="nav-dropdown" align="start"><DropdownMenuItem asChild><Link href="/services">All services</Link></DropdownMenuItem>{services.map(s=><DropdownMenuItem key={s.slug} asChild><Link href={"/services/"+s.slug}>{s.name}</Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
        <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>About</Link>
        <DropdownMenu><DropdownMenuTrigger className="nav-trigger">Areas we cover <ChevronDown size={14}/></DropdownMenuTrigger><DropdownMenuContent className="nav-dropdown">{areas.map(a=><DropdownMenuItem key={a.slug} asChild><Link href={"/areas/"+a.slug}>{a.name}</Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
        <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
      </nav>
      <Link className="button header-cta" href="/contact">Get a free quote <ArrowUpRight size={18}/></Link>
      <Sheet open={open} onOpenChange={setOpen}><SheetTrigger className="menu-button" aria-label="Open navigation"><Menu/></SheetTrigger><SheetContent className="mobile-sheet"><SheetTitle>Underdog</SheetTitle><SheetDescription>Home improvements in Colchester & Ipswich.</SheetDescription><nav aria-label="Mobile navigation"><Link href="/" onClick={()=>setOpen(false)}>Home</Link><Link href="/services" onClick={()=>setOpen(false)}>Services</Link><Link href="/about" onClick={()=>setOpen(false)}>About</Link><details><summary>Areas we cover</summary>{areas.map(a=><Link href={"/areas/"+a.slug} onClick={()=>setOpen(false)} key={a.slug}>{a.name}</Link>)}</details><Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link><a className="button" href={business.phoneHref}><Phone size={18}/> Call {business.phone}</a></nav></SheetContent></Sheet>
    </div></header>
  </>;
}
export function ContactWidget() {
  const widget=useRef<HTMLElement>(null);
  const [obscured,setObscured]=useState(false);
  const pathname=usePathname();
  useEffect(()=>{
    let frame=0;
    const measure=()=>{
      const bounds=widget.current?.getBoundingClientRect();if(!bounds)return;
      setObscured([...document.querySelectorAll(".quote-card")].some(form=>{
        const r=form.getBoundingClientRect();
        return r.left<bounds.right+12&&r.right>bounds.left-12&&r.top<bounds.bottom+12&&r.bottom>bounds.top-12;
      }));
    };
    const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(measure);};
    const resize=new ResizeObserver(update);resize.observe(document.body);
    window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);update();
    return ()=>{cancelAnimationFrame(frame);resize.disconnect();window.removeEventListener("scroll",update);window.removeEventListener("resize",update);};
  },[pathname]);
  return <aside ref={widget} className={"contact-widget"+(obscured?" is-obscured":"")} aria-hidden={obscured||undefined} aria-label="Quick contact"><a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="widget-whatsapp"><MessageCircle size={20}/><span>WhatsApp</span></a><a href={business.phoneHref} className="widget-call"><Phone size={18}/><span>Call now</span></a></aside>;
}
export function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-grid">
    <div className="footer-business"><Link href="/" className="footer-wordmark">UNDERDOG<span>HOME IMPROVEMENTS LTD</span></Link><p>{business.tagline}</p><a href={business.phoneHref} className="footer-phone">{business.phone}</a><a href={"mailto:"+business.email}>{business.email}</a><p>Colchester & Ipswich<br/>Essex & Suffolk</p><div className="social-links">{Object.entries(business.social).map(([name,href])=><a key={name} href={href} target="_blank" rel="noopener noreferrer">{name === "Google Business Profile" ? "Google" : name}<ArrowUpRight size={14}/></a>)}</div></div>
    <div><h2>Explore</h2><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div>
    <div><h2>Our services</h2>{services.map(s=><Link key={s.slug} href={"/services/"+s.slug}>{s.name}</Link>)}</div>
    <div><h2>Areas we cover</h2>{areas.map(a=><Link key={a.slug} href={"/areas/"+a.slug}>{a.name}</Link>)}</div>
  </div><div className="footer-bottom"><span>© 2026 {business.name}. All rights reserved.</span><span>Carpentry · Building · Renovations · Maintenance</span></div></div></footer>;
}
