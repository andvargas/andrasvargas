# Andras Vargas website

Next.js App Router, TypeScript and Tailwind CSS. First local homepage for the Fractional Operations Engineering offer.

## Local development

Run `npm install`, then `npm run dev`. Open the local address printed by Next.js. Use `npm run build` and `npm run lint` to validate changes.

## Content and brand

- Homepage: src/app/page.tsx
- Shared styles and Tailwind colour tokens: src/app/globals.css
- Contact email: src/lib/site.ts (hello@webtechsupport.co.uk, confirmed by Andras)
- Fonts: src/app/fonts, locally served Montserrat Bold and Ysabeau Regular
- Logo and icons: public, from the approved New Website/Elements exports
- Brand: background #F0EEE9; primary #FF7C00; text #020817; accent #56001E; surface #FFFFFF

The homepage uses real navigation anchors and expandable FAQs. Contact actions open an email draft; no enquiry is sent by the site. There are no invented customer results, testimonials or project screenshots.

## Before public launch

- Confirm contact address, public copy and engagement details.
- Register/configure the intended domain, and complete the planned migration checks.
- Add the actual business/privacy information appropriate to the final functionality.
- Review src/app/layout.tsx: indexing is intentionally disabled for this initial preview. Enable it only at public launch and add the confirmed canonical domain and sitemap.
- Implement an enquiry form if required, with delivery and error handling tested end to end.

## Client portal

See docs/CLIENT-PORTAL.md for the deferred Naplo login/activity integration. The current API is https://api.webtechsupport.co.uk; the source project is /Users/andras/Sites/api.andrasvargas. Live functionality has not been verified. The homepage does not contact or modify it.
