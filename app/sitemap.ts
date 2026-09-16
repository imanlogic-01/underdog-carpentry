import type {MetadataRoute} from "next";
import {routes,business} from "@/lib/business";
export default function sitemap():MetadataRoute.Sitemap{return routes.map(r=>({url:business.origin+r.path}))}

