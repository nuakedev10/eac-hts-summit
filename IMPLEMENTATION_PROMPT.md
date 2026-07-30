# EA-HTS 2027 React/TypeScript UI Implementation Prompt

You are a senior product designer and frontend engineer working in the `react-typescript-conversion` branch of the EA-HTS 2027 website. Build a production-quality, accessible, responsive React and TypeScript experience for **Side Events** and **Partnership Opportunities**, while completing the most important gaps in the current static-to-React migration.

## Repository Context

- Framework: React 18, TypeScript 5.6, Vite 5.
- Application root: `frontend/`.
- Current entry point: `frontend/src/main.tsx`.
- Current UI: almost the entire homepage is contained in `frontend/src/App.tsx`.
- Current shared stylesheet: `frontend/css/styles.css`.
- Existing visual identity: IEEE-inspired navy, blue, gold, white, and neutral gray; Archivo headings and Inter body copy.
- Build command: `npm run build`.
- There is currently no router, component test setup, lint script, or backend.
- The current React branch renders only the homepage. Navigation still points to legacy `.html` files that do not exist in this Vite app.

Do not recreate the old static pages inside React as monolithic markup. Establish a maintainable component and routing structure that can support the remaining migration.

## Primary Product Goal

Create a world-class, visually distinctive, highly polished event experience that makes Side Events feel valuable and Partnership Opportunities feel credible, prestigious, and actionable. The result should feel like a leading international IEEE and humanitarian technology summit, not a generic conference template or a grid of interchangeable cards.

Build:

1. A concise Side Events preview and Partnership Opportunities preview on the homepage.
2. A dedicated `/side-events` page.
3. A dedicated `/partners` page.
4. Working navigation between these routes without full-page reloads or `.html` URLs.

Use React Router unless the repository already adopts another routing solution before implementation. Preserve deep-link and browser back/forward behavior.

## Required Content: Side Events

The summit includes exactly these eight side events:

1. IEEE SIGHT Leadership Forum
2. Women in Humanitarian Technology Forum
3. Youth Innovation Summit
4. Government Policy Dialogue
5. UN Agencies Roundtable
6. Humanitarian Technology Research Symposium
7. Startup Investor Forum
8. Career and Opportunities Fair

The source text contains `Career and Opportunities Fair1`; treat the trailing `1` as a footnote artifact and do not render it unless an actual corresponding footnote is supplied.

Do not invent confirmed speakers, dates, times, venues, sponsors, application deadlines, or attendance limits. If supporting descriptions are needed, write short, factual, noncommittal summaries based only on each event title and clearly avoid implying unconfirmed programme details.

### Side Events Experience

- Open with a strong editorial hero that immediately signals leadership, policy, research, investment, inclusion, and career opportunity.
- Use a real, relevant, inspectable image showing an East African technology, policy, research, or professional gathering. Avoid generic hands, handshakes, blurred crowds, dark stock imagery, decorative SVG hero art, and gradient-only heroes.
- Present all eight events with clear hierarchy and intentional visual variety. A structured programme index, editorial list, or alternating feature layout is preferable to eight identical floating cards.
- Give each event an appropriate Lucide icon and an event category such as leadership, inclusion, youth, policy, multilateral coordination, research, investment, or careers.
- Add a useful filter or segmented control only if it improves scanning; do not manufacture complexity.
- Include a prominent `Propose a side event` mail link using `ieeeahts27@gmail.com`, with a prefilled subject and concise body template.
- Include a secondary CTA to register for the summit, but do not claim registration is functional until its real workflow exists.
- Homepage preview should show enough breadth to be compelling, then link to `/side-events` for all eight events.

## Required Content: Partnership Opportunities

Represent all organizations as **prospective partners** unless confirmation data is supplied. Do not imply endorsement, sponsorship, or an established relationship.

### IEEE Partners

- IEEE HTB
- IEEE Foundation, including IEEE Smart Village
- IEEE SIGHT
- IEEE Region 8
- IEEE Africa Council

### UN Agencies

- UNDP
- UNICEF
- ITU
- WHO
- FAO
- UNHCR
- WFP

### Development Organizations

- GSMA Mobile for Development
- World Bank
- African Development Bank
- GIZ
- Mastercard Foundation

### Industry Partners

- Microsoft
- Davis & Shirtliff
- Google
- Ericsson
- Nokia
- MTN
- Airtel
- Safaricom

Keep these as four distinct categories. Do not merge Industry and Development into one group, as the current homepage does. Treat IEEE Smart Village as part of the IEEE Foundation entry while allowing its identity to be visible.

### Partner Experience

- Build an authoritative hero centered on regional collaboration and measurable humanitarian impact.
- Explain partnership value through concrete opportunity areas such as programme contribution, technology demonstrations, startup support, research visibility, capacity building, and regional impact. Phrase these as opportunities, not confirmed benefits or contractual promises.
- Use official organization logos sourced from authoritative organization or brand-resource websites. Do not redraw, approximate, or AI-generate logos.
- Store approved logo assets locally in a clearly organized asset directory; do not hotlink production logos.
- Preserve each logo's aspect ratio, safe space, and brand colors. Provide meaningful accessible names and ensure marks remain legible in grayscale/high-contrast contexts.
- If an authoritative downloadable logo cannot be verified, use a polished text treatment for that organization rather than a fabricated mark.
- Add category navigation or tabs that remain keyboard accessible and usable without hover.
- Include a clear, persistent `Become a partner` mail link to `ieeeahts27@gmail.com` with a prefilled partnership inquiry subject and body.
- Add a concise disclosure near the organization directory: `Prospective partners identified for engagement; participation is not yet confirmed.`
- Homepage preview should communicate the four-category ecosystem without becoming a dense logo wall, then link to `/partners`.

## Visual Direction

- Preserve recognizable EA-HTS and IEEE visual continuity, but elevate it beyond the current blue-and-gold card grid.
- Maintain a balanced palette. Navy and IEEE blue can anchor trust; gold should be a deliberate highlight rather than a fill used everywhere. Introduce restrained neutral and contextual accents where they improve category recognition.
- Use expressive, purposeful typography with strong editorial hierarchy. Do not use oversized display text inside compact panels.
- Avoid nested cards, excessive rounded rectangles, decorative blobs, generic gradient orbs, and repetitive icon-card layouts.
- Use full-width bands, editorial spacing, strong alignment, and selective imagery to create rhythm.
- Keep card radii at 8px or less unless an existing shared token is retained for compatibility.
- Use Lucide React icons rather than hand-authored inline SVGs for interface and content icons.
- Add only a few meaningful transitions: route entrance, section reveal, and category/filter changes. Honor reduced-motion preferences.
- Make hover, focus, active, loading, empty, and fallback states intentional.

## Responsive and Accessibility Requirements

- Design mobile-first and verify at approximately 360px, 768px, 1024px, and 1440px widths.
- No inline fixed-column grids. Use reusable CSS classes with responsive grid or flex rules.
- No horizontal scrolling, clipped text, overlapping controls, or layout shifts caused by logos and images.
- Use semantic landmarks, one logical `h1` per page, ordered heading levels, lists for event and organization collections, and descriptive link text.
- Mobile navigation must expose correct `aria-expanded` and `aria-controls` state, close on route selection and Escape, and restore body scrolling.
- All controls and routes must work by keyboard with visible focus styles.
- Meet WCAG 2.2 AA contrast expectations.
- Images require useful `alt` text; decorative images should use empty alt text.
- Respect `prefers-reduced-motion`. Reveal content must remain visible when JavaScript, observers, or animation support is unavailable.

## React and TypeScript Architecture

- Break up `frontend/src/App.tsx` into focused components and page modules. Suggested boundaries:
  - `components/layout/Header.tsx`
  - `components/layout/Footer.tsx`
  - `components/layout/PageHero.tsx`
  - `components/common/SectionHeading.tsx`
  - `components/common/CallToAction.tsx`
  - `features/side-events/SideEventCard.tsx` or a more editorial equivalent
  - `features/partners/PartnerDirectory.tsx`
  - `pages/HomePage.tsx`
  - `pages/SideEventsPage.tsx`
  - `pages/PartnersPage.tsx`
  - typed content modules for side events and partner groups
- Keep content data separate from rendering and give it explicit TypeScript types.
- Prefer declarative React state and event handlers. Remove direct `document.querySelector` listeners for navigation and other behavior React owns.
- Do not retain unused registration state or effects in the homepage.
- Use a reusable, cleanup-safe intersection observer hook only where reveal behavior adds value.
- Preserve Strict Mode compatibility without duplicate listeners, stale closures, or body-scroll leaks.
- Avoid premature `useMemo` and `useCallback`; use them only when a measured or established local need exists.
- Keep metadata accurate for each route. Use the repository's preferred lightweight head-management approach, or implement route-aware document title and meta-description updates without unnecessary dependencies.

## Migration Gaps to Correct

Address these issues while implementing the pages, without expanding into unrelated redesign work:

1. Replace nonexistent `.html` navigation links with real React routes.
2. Correct the programme weekdays wherever migrated: January 27-29, 2027 are Wednesday-Friday, not Monday-Wednesday.
3. Resolve the awards-count inconsistency. The detailed source defines nine awards, while the homepage currently says ten. Use nine unless an approved tenth category is supplied.
4. Keep registration clearly marked as unavailable or upcoming until a real submission endpoint and confirmed payment details exist. Do not present an alert-only demo as a completed registration.
5. Do not publish placeholder payment numbers, fees, banking details, partner confirmations, or social URLs.
6. Replace `href="#"` social links with verified destinations or omit/disable them accessibly until URLs are supplied.
7. Eliminate layout-critical inline styles and move responsive behavior into maintainable styles or the project's adopted styling system.
8. Add reduced-motion behavior and a no-animation-visible baseline.
9. Use local production assets where practical and provide graceful image/logo fallbacks.
10. Keep all factual summit content unchanged unless correcting one of the explicitly identified inconsistencies.

## Interaction Copy

Use concise, professional CTA labels:

- `Explore all side events`
- `Propose a side event`
- `Explore partnership opportunities`
- `Become a partner`
- `Register for EA-HTS 2027` only when linked to a clearly labeled registration status/page

Prefill mail links using `ieeeahts27@gmail.com`. Encode subjects and body text correctly. Suggested subjects:

- `EA-HTS 2027 Side Event Proposal`
- `EA-HTS 2027 Partnership Inquiry`

## Quality and Verification

- Keep `npm run build` passing with strict TypeScript.
- Add ESLint and a `lint` script if the branch still lacks linting, using a minimal React and TypeScript configuration compatible with Vite.
- Add focused tests for route rendering, all eight side-event names, all four partner categories and their organizations, mobile navigation semantics, and CTA destinations. Use Vitest and React Testing Library unless the project adopts another test stack first.
- Run dependency audit and report vulnerabilities; do not apply breaking `--force` upgrades without review.
- Launch the Vite development server and inspect both routes in a real browser.
- Use Playwright screenshots at desktop and mobile sizes to verify hierarchy, wrapping, image/logo rendering, navigation, focus behavior, and absence of overlap or horizontal overflow.
- Test direct navigation and refresh on `/side-events` and `/partners`. Document any hosting rewrite required for SPA fallback.
- Confirm that no organization is presented as a confirmed partner.

## Definition of Done

- `/side-events` and `/partners` are complete, polished, responsive pages using the exact supplied organization and event lists.
- Homepage previews for both areas are visually strong and link to their full pages.
- Navigation uses working client-side routes and exposes accurate active states.
- Official logos are local, verified, accessible, and never fabricated; unavailable marks fall back to text.
- Both inquiry CTAs open correctly encoded prefilled emails.
- The experience works at mobile and desktop widths, with keyboard navigation and reduced motion.
- Strict TypeScript build, lint, and focused tests pass.
- Browser screenshots demonstrate that the pages are nonblank, correctly framed, and free from clipping, overlap, and horizontal overflow.
- The implementation does not claim unconfirmed partners, schedules, speakers, registration processing, or payment details.

Before coding, inspect the current branch and state a short implementation plan tied to actual files. Then implement, validate, and summarize changed files, commands run, and any content or asset approvals still needed.