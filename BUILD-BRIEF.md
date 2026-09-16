# Underdog Home Improvements — adapted Phase 1 build prompt

## Objective
Build an 18-page UK website for **Underdog Home Improvements Ltd**. Recreate the layout principles, proportions, navigation patterns and visual hierarchy of https://site-clone-af7adf80.vibepreview.com/ using Underdog’s own identity. Secondary reference: https://terra-care.framer.website/. Do not copy another business’s branding, written content, reviews or customer information.

This phase establishes the complete route structure, reusable design system, navigation, service and local-area templates. Keep service and area body copy as **Content coming soon**. Do not write long-form SEO content yet.

## Confirmed business and contact details
- Main working areas: **Colchester and Ipswich**.
- Region: Essex and Suffolk, United Kingdom.
- Phone and WhatsApp: **07940 246031** / **+44 7940 246031**.
- Email: **udoghomeimprovements@gmail.com** (confirmed on the supplied Facebook profile).
- Tagline: **No job too small, because every home is a big deal!**
- Facebook: https://www.facebook.com/people/Underdog-Home-Improvements/61572984301833/
- Instagram: https://www.instagram.com/underdoghomeimprovements
- Google Business Profile: https://share.google/1UVJgywRiqSsQZ4iy
- Do not invent an office address, postcode, opening hours, qualifications, reviews, ratings or guarantees.
- Use reusable configuration for all business data, services, contact links, locations and the canonical site origin.

## Brand and design
Use the supplied bulldog-and-wrench logo and transparent horizontal header logo. Use Underdog navy and orange, white, and a pale neutral secondary surface. Replace the generic blue accent in the source prompt with orange. Use Manrope consistently, bold headings, readable body copy, restrained rounded corners, subtle shadows and spacious sections. Primary CTAs use navy and white; orange provides recognisable emphasis. Test contrast and keyboard focus.

Retain the reference’s white header, dark photographic split hero with quote form on the right, clear services section, image-and-copy about section, contact/area blocks and substantial footer. Make mobile a deliberate stacked layout. No generic fake ratings, badge claims or invented project metrics. Festool is not a confirmed business preference, so do not assert tool-brand allegiance or use its branding.

Use suitable UK carpentry imagery as **illustrative placeholders**, never represented as Underdog customer projects. Use original work photos when supplied. No US architecture, sockets, addresses or terminology.

## Exactly 18 routes
Four core routes:
1. Home — /
2. Services — /services
3. About — /about
4. Contact — /contact

Eight service routes, grounded in the supplied poster and public social content:
5. Carpentry & Joinery — /services/carpentry-joinery
6. Extensions & Renovations — /services/extensions-renovations
7. Kitchens & Bathrooms — /services/kitchens-bathrooms
8. Wall & Floor Tiling — /services/wall-floor-tiling
9. Painting & Decorating — /services/painting-decorating
10. Fencing & Decking — /services/fencing-decking
11. Roofing & Guttering — /services/roofing-guttering
12. Bespoke Wall Panelling — /services/wall-panelling

Wall panelling is evidenced by the Facebook post showing shaker-style hallway panelling. Public posts also show bathroom/ensuite renovation and picket-fence installation. General property repairs remain a supported enquiry topic and can be developed within the broader renovation/carpentry content; do not add a nineteenth page. Do not claim fitted wardrobes, media walls or specialist staircases as a distinct offered service without source evidence or owner confirmation.

Six area routes:
13. Colchester — /areas/colchester
14. Ipswich — /areas/ipswich
15. Wivenhoe — /areas/wivenhoe
16. Manningtree — /areas/manningtree
17. Hadleigh — /areas/hadleigh
18. Woodbridge — /areas/woodbridge

## Local coverage
Prioritise Colchester and Ipswich in page hierarchy and contact messaging. Include nearby places naturally in reusable coverage sections without creating thin extra pages or keyword stuffing:
- Colchester: Stanway, Lexden, Highwoods, Mile End, Greenstead, St John’s, Prettygate, Berechurch, Layer-de-la-Haye, Abberton, Langenhoe, Rowhedge, West Bergholt, Great Horkesley, Boxted, Eight Ash Green, Copford, Marks Tey, Tiptree, Kelvedon, Feering, West Mersea, East Mersea, Great Bentley, Alresford.
- Ipswich: Kesgrave, Rushmere St Andrew, Martlesham, Martlesham Heath, Bramford, Claydon, Great Blakenham, Barham, Westerfield, Witnesham, Tuddenham St Martin, Pinewood, Sproughton, Belstead, Copdock, Washbrook, Hintlesham, Holbrook, Shotley, Chelmondiston, Capel St Mary, Bentley, Felixstowe, Trimley St Mary, Trimley St Martin, Stowmarket, Needham Market.
- Wivenhoe: Elmstead Market, Frating, Thorrington, Brightlingsea, Great Bromley, Little Bromley.
- Manningtree: Lawford, Mistley, Dedham, East Bergholt, Brantham, Ardleigh, Stratford St Mary, Bradfield, Wrabness, Harwich, Dovercourt.
- Hadleigh: Raydon, Layham, Kersey, Polstead, Boxford, Nayland, Stoke-by-Nayland, Bildeston, Sudbury, Lavenham.
- Woodbridge: Melton, Ufford, Wickham Market, Hasketon, Grundisburgh, Rendlesham, Sutton, Waldringfield, Newbourne, Nacton.

This is a practical surrounding-area list, not an exhaustive geographic claim or ranking guarantee. More detailed local content belongs in Phase 2.

## Components and interactions
Global top bar; sticky header; home-linked logo; Home, Services, About, Areas We Cover, Contact navigation; accessible service/area menus; mobile navigation with focus management; reusable footer linking all routes; service grid; area cards; breadcrumbs; CTA banners; contact form; scroll-to-top on every route change.
Prepare review, Google review, testimonial, guarantees, process, FAQ, project gallery and before/after components without fabricated content.
Make telephone links click-to-call. Add a persistent WhatsApp/call widget. Ensure it does not cover active form controls.

## Enquiries
The earlier request to use Resend supersedes the generic prompt’s “do not connect APIs” instruction.
Implement a server-side Resend handler and an accessible form with name, phone, email, UK postcode, service and project message. Validate on the server; bound request size; add a honeypot, modest rate protection, timeout and idempotency. Preserve user-entered values on failure. Display success only after Resend accepts the message. Never place a secret in client code.
Use server environment settings RESEND_API_KEY, RESEND_FROM_EMAIL, ENQUIRY_TO_EMAIL. Sender must be verified in Resend. If these are absent, clearly offer call/WhatsApp instead of pretending the enquiry was sent.
Do not send test emails to the real business without explicit authorisation.

## SEO, performance and accessibility
All 18 content pages must be genuine routes with unique titles, descriptions, canonical URLs, one H1, Open Graph text metadata, business and breadcrumb structured data; service schema for service pages. Include exactly the 18 content routes in sitemap.xml. No fake review schema, coordinates or street address. No extra indexable blogs, galleries, policies, archives or thank-you routes. API endpoints and 404 responses are not content pages.
Use UK English, semantic HTML, labelled controls, keyboard-accessible navigation, focus styles, sufficient contrast, responsive local images and self-hosted font files. Lazy-load below-fold imagery and reserve image dimensions.
Publish Phase 1 privately for review. Public indexing and meaningful ranking require an approved public launch and substantive Phase 2 content.

## Verification
Check 1440, 1280, 768, 390 and 360px widths, plus the current preview width. Verify all routes and internal links, exactly 18 sitemap entries, menu keyboard/mobile behaviour, form validation/error states, click-to-call and WhatsApp URLs, scroll-to-top, image loading, no horizontal overflow, metadata and structured data. Report what passed and any incomplete external setup honestly. Deliver the route table with exactly 18 content rows.

## Source notes
- Supplied poster: service categories, name, branding, telephone, tagline.
- Facebook profile: confirms phone, email, Colchester, carpenter/painter/home improvement and free quotations.
- Wall panelling: https://www.facebook.com/reel/1036935405366966/
- Bathroom/ensuite: https://www.facebook.com/reel/2512857955908053/
- Geography cross-checks: https://www.visitcolchester.com/explore/coast-and-countryside/ and https://allaboutipswich.com/beyond-ipswich/

