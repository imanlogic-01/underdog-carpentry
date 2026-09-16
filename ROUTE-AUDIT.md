# Phase 1 route audit

All 18 routes return HTTP 200, one H1, unique title and description, canonical, Open Graph text metadata and JSON-LD. Unknown routes return 404. Sitemap has exactly 18 entries.

| Page | URL | Type | Status |
|---|---|---|---|
| Home | / | Core | Passed |
| Services | /services | Core | Passed |
| About Us | /about | Core | Passed |
| Contact | /contact | Core | Passed |
| Carpentry & Joinery | /services/carpentry-joinery | Service | Passed |
| Extensions & Renovations | /services/extensions-renovations | Service | Passed |
| Kitchens & Bathrooms | /services/kitchens-bathrooms | Service | Passed |
| Wall & Floor Tiling | /services/wall-floor-tiling | Service | Passed |
| Painting & Decorating | /services/painting-decorating | Service | Passed |
| Fencing & Decking | /services/fencing-decking | Service | Passed |
| Roofing & Guttering | /services/roofing-guttering | Service | Passed |
| Bespoke Wall Panelling | /services/wall-panelling | Service | Passed |
| Colchester | /areas/colchester | Area | Passed |
| Ipswich | /areas/ipswich | Area | Passed |
| Wivenhoe | /areas/wivenhoe | Area | Passed |
| Manningtree | /areas/manningtree | Area | Passed |
| Hadleigh | /areas/hadleigh | Area | Passed |
| Woodbridge | /areas/woodbridge | Area | Passed |

Enquiry tests: validation, request size, origin, honeypot, missing configuration, mocked Resend acceptance/failure, and rate protection passed. No real email was sent.
