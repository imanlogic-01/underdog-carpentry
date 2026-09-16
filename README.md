# Underdog Home Improvements — GitHub and Vercel edition

This is the complete Next.js website source, prepared for Vercel. It contains 18 content pages, the logo and local images/fonts, and the server-side Resend enquiry endpoint. It does not require Cloudflare or a ChatGPT sign-in.

## Deploy from GitHub

1. Extract the ZIP. The directory containing package.json is the project root.
2. Put these extracted files at the root of your GitHub repository. Upload the extracted files, not the ZIP itself. If replacing the earlier Cloudflare edition, replace its source files rather than merging the two configurations. Keep your local Git history and secret files out of uploads.
3. In Vercel choose Add New > Project and import that GitHub repository.
4. Framework: Next.js. Root Directory: ./ (or the directory containing package.json). Node.js: 22.x. Keep the default output directory; vercel.json supplies npm ci and npm run build.
5. Add the environment variables below, then deploy. Vercel installs dependencies and builds the website.

If you use a custom domain, connect it in Vercel and set SITE_URL to its full https:// URL, then redeploy so canonical links and sitemap use that domain.

## Environment variables

| Name | Value |
|---|---|
| RESEND_API_KEY | Your Resend API key |
| RESEND_FROM_EMAIL | An approved sender on your Resend-verified domain |
| ENQUIRY_TO_EMAIL | udoghomeimprovements@gmail.com |
| SITE_URL | Optional full public URL; defaults to Vercel's production domain |

Set these for Production, and for Preview if you want enquiry testing there. Never prefix secrets with NEXT_PUBLIC_. Do not upload a populated .env file. Email stays unavailable until the three Resend settings are present. Call and WhatsApp links work independently.

## Local development and checks

Use Node 22. Run npm ci, npm run dev, and open http://localhost:5173. For a production check run npm run build then npm start. With the server running, npm run audit checks all 18 routes, metadata, sitemap, 404s and mocked email behaviour. No real email is sent by the audit. For its missing-configuration test, run without Resend credentials.

The rate limiter is best-effort per server instance, not a globally shared quota. Use Vercel's trusted x-forwarded-for header; configure trusted proxy handling if adding another proxy.

## Content status

Service and area body copy remains Content coming soon, as requested for Phase 1. Images are illustrative placeholders, not verified client projects. Public deployment does not guarantee search rankings.

Official references: https://vercel.com/docs/frameworks/full-stack/nextjs and https://vercel.com/docs/environment-variables/managing-environment-variables

For local builds, extract into a path without a # character, such as C:\Projects\underdog-carpentry. This avoids a Windows build-tool path issue.

