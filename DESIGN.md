---
name: Underdog Home Improvements
description: Navy and orange identity for local home-improvement enquiries.
colors:
  navy: "#082f57"
  navy-deep: "#071f36"
  orange: "#f56800"
  orange-dark: "#b94800"
  white: "#ffffff"
  muted-foreground: "#536474"
  border: "#d4dde5"
  input-surface: "#fafbfd"
  service-surface: "#f2f5f7"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3.7rem,5.1vw,4.6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem,3.1vw,2.8rem)"
    fontWeight: 800
    lineHeight: 1.12
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 750
rounded:
  input: "6px"
  button: "8px"
  area: "12px"
  service: "14px"
  quote: "16px"
spacing:
  section-mobile: "60px"
  section-desktop: "100px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "13px 24px"
  text-input:
    backgroundColor: "{colors.input-surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.input}"
    padding: "11px 12px"
  service-card:
    backgroundColor: "{colors.service-surface}"
    rounded: "{rounded.service}"
    padding: "28px 25px"
---

# Design System: Underdog Home Improvements

The implemented identity retains the supplied bulldog logo, navy and orange, Manrope, bold headings and spacious sections. This records the supplied direction; it does not introduce a new brand concept.

The home sequence is white sticky navigation, a dark photographic split hero and quote form, service cards, image-and-copy about content, six area cards, orange CTA and navy footer. Illustrative images must never be represented as verified customer projects.

## Layout and typography

The container is 1280px maximum with total horizontal insets of 96px on desktop, 64px below 1150px, 40px below 760px and 36px below 480px. Sections use 100px desktop and 60px mobile spacing. The hero has a flexible copy column and a 470px form column, narrowing through 440px and 390px before stacking below 760px.

Service cards change from four to two columns below 980px, then one below 480px. Area cards change from three to two, then one at the same breakpoints. About and contact sections stack below 760px. Navigation becomes a mobile sheet below 980px.

Manrope is self-hosted at weights 400, 600, 700 and 800. Effective form labels, footer links and service-card actions use 14px; footer headings use 15px; form notes use 12px. Mobile inputs use 16px to prevent automatic zoom. Hero type has dedicated responsive overrides.

## Components and behaviour

Navy primary buttons have white text, 8px corners and 52px minimum height before header overrides. Inputs have pale surfaces and 45px minimum height, increasing to 48px on mobile. The white quote panel has 16px corners and a soft shadow. Service cards lift 4px on hover; buttons lift 2px. Reduced-motion settings remove animation and transitions.

Keep the 3px dark-orange keyboard focus ring, skip link, accessible menu focus management and route scroll reset. The WhatsApp/call widget hides when its bounds overlap a quote panel with 12px clearance. Preserve form data on request failure, and show success only after the email provider accepts the request.

## Content constraints

Keep exactly 18 content routes for Phase 1. Service and area bodies remain Content coming soon. Use PRODUCT.md and BUILD-BRIEF.md for business evidence and routes. Do not invent reviews, guarantees, experience, an address, project attribution or a ranking promise. Use the supplied identity and reference hierarchy without adding an unrelated visual concept.
