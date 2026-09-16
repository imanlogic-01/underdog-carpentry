import type { Metadata } from "next";
import { Header,Footer,ScrollToTop,ContactWidget } from "@/components/site-chrome";
import { business } from "@/lib/business";
import "./globals.css";
export const metadata:Metadata = {
 metadataBase: new URL(business.origin),
 title:{default:"Home Improvements in Colchester & Ipswich | Underdog",template:"%s | Underdog Home Improvements"},
 description:"Carpentry, renovations and property improvements in Colchester, Ipswich and surrounding Essex and Suffolk. Contact Underdog for a free quote.",
 icons:{icon:"/images/logo.jpg"},
 robots:{index:true,follow:true},
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en-GB"><body><a href="#main" className="skip-link">Skip to content</a><ScrollToTop/><Header/>{children}<Footer/><ContactWidget/></body></html>;
}

