import type {ComponentProps} from "react";

// Content routes use normal document navigation: URLs, metadata and scroll state
// are ready together, with no dependency on a client-side routing transition.
export default function SiteLink(props:ComponentProps<"a">){return <a {...props}/>}
