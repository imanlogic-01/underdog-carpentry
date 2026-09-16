# Underdog Home Improvements

Phase 1: 18 routes covering four core pages, eight services and six area pages, prioritising Colchester and Ipswich. See BUILD-BRIEF.md for the adapted user prompt, ROUTE-AUDIT.md for validation, and DESIGN.md for design tokens.

## Run locally

Use Node 22.13 or newer. Install with npm ci, copy .env.example to .env, then use npm run dev. Build with npm run build. This is a Vinext/React site targeting Cloudflare Workers through Sites.

Vite currently fails when the checkout path contains a # character. On this machine a runtime copy without that character is used for preview/build; keep the source in this folder authoritative and copy changes before building. If the Windows npm command shim fails, run the installed npm-cli.js directly with Node.

## Enquiries

WhatsApp and telephone links use +447940246031. The server-side Resend handler requires RESEND_API_KEY, RESEND_FROM_EMAIL (a verified Resend sender), and ENQUIRY_TO_EMAIL. Use Sites runtime secrets for hosted configuration; local .env files are ignored. SITE_URL should match the deployed canonical origin. Never commit secrets.

Without email configuration, the form preserves entered details and offers call/WhatsApp instead. No live email was sent during validation. The handler uses server validation, request-size limits, a honeypot, bounded per-worker rate protection, timeouts and idempotency. Per-worker rate protection is best effort, not a globally shared quota.

## Content and validation

Service and area bodies intentionally say Content coming soon. Images are illustrative placeholders. No invented reviews, ratings, guarantees, address or experience claims. The site is initially private for owner review; public indexing and substantive local content are later launch work.

The audit script is scripts/audit.mjs. It checks the 18 routes, metadata, schema, sitemap, 404s and enquiry handling with mocked delivery. Browser checks cover 1440, 1280, 768, 390 and 360px, navigation, route scroll reset, form validation and error preservation.
